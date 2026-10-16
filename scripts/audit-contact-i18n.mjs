import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import Module, { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
for (const ext of [".ts", ".tsx"]) {
  require.extensions[ext] = (module, filename) =>
    module._compile(
      ts.transpileModule(
        fs
          .readFileSync(filename, "utf8")
          .replace(/(["'])@\//g, `$1${root}/src/`),
        {
          compilerOptions: {
            module: ts.ModuleKind.CommonJS,
            esModuleInterop: true,
            jsx: ts.JsxEmit.ReactJSX,
          },
        },
      ).outputText,
      filename,
    );
}
require.extensions[".css"] = (module) => {
  module.exports = {};
};
const { siteLocales, siteBaseUrl } = require("../src/lib/locale.ts");
const {
  getContactMessages,
  contactOffices,
} = require("../src/data/contact.ts");
const { contactMetadata } = require("../src/lib/contact-metadata.ts");
const { localizedPageHref } = require("../src/lib/localized-pages.ts");
const { getNavigation } = require("../src/data/navigation-english.ts");
const translations = require("../src/data/contact-translations.json");
const sourceKeys = Object.keys(translations.vi).sort();

// Exercise the actual client submit handler without a browser or sending email.
const react = require("react"),
  originalLoad = Module._load;
let state = [],
  cursor = 0;
Module._load = function (id, ...args) {
  if (id === "react")
    return {
      ...react,
      useState(initial) {
        const index = cursor++;
        if (!(index in state)) state[index] = initial;
        return [
          state[index],
          (value) => {
            state[index] = value;
          },
        ];
      },
    };
  return originalLoad.call(this, id, ...args);
};
const { ContactForm } = require("../src/components/contact-form.tsx");
Module._load = originalLoad;
const originalFetch = globalThis.fetch,
  OriginalFormData = globalThis.FormData;
const formValues = {
  name: "I18n test",
  phone: "0000000000",
  email: "test@example.invalid",
  service: "Thiết kế nội thất",
  area: "Hà Nội",
  scale: "80 m²",
  interests: "Thiết kế nội thất",
  message: "Test only; no transport.",
};
globalThis.FormData = class extends OriginalFormData {
  constructor() {
    super();
    for (const [key, value] of Object.entries(formValues))
      this.append(key, value);
  }
};
function render(messages) {
  cursor = 0;
  return ContactForm({ messages });
}
function nodes(element) {
  if (!element || typeof element !== "object") return [];
  return [element, ...[element.props?.children].flat(Infinity).flatMap(nodes)];
}
function text(element) {
  if (element == null || typeof element === "boolean") return "";
  if (typeof element === "string" || typeof element === "number")
    return String(element);
  return [element?.props?.children].flat(Infinity).map(text).join("");
}
let submissionCases = 0;
try {
  for (const locale of siteLocales) {
    const messages = getContactMessages(locale);
    assert.deepEqual(Object.keys(messages).sort(), sourceKeys);
    assert.ok(
      Object.values(messages).every(
        (value) => typeof value === "string" && value.trim(),
      ),
    );
    const href = localizedPageHref("/lien-he", locale);
    assert.equal(
      localizedPageHref("/en/lien-he#tu-van", locale),
      href + "#tu-van",
    );
    assert.ok(getNavigation(locale).some((item) => item.href === href));
    const meta = contactMetadata(locale);
    assert.equal(meta.title, messages["Liên hệ"]);
    assert.equal(meta.alternates.canonical, siteBaseUrl + href);
    for (const language of siteLocales)
      assert.equal(
        meta.alternates.languages[language],
        siteBaseUrl + localizedPageHref("/lien-he", language),
      );
    for (const scenario of [
      "success",
      "invalid_email",
      "required_fields",
      "rate_limited",
      "server_failure",
      "network_failure",
    ]) {
      state = [];
      let resolve;
      globalThis.fetch = async (url, options) => {
        assert.equal(url, "/api/contact");
        assert.equal(options.method, "POST");
        assert.deepEqual(JSON.parse(options.body), formValues);
        await new Promise((done) => {
          resolve = done;
        });
        if (scenario === "network_failure")
          throw new Error("Private network details must not be shown");
        return {
          ok: scenario === "success",
          status: scenario === "rate_limited" ? 429 : 400,
          json: async () => ({
            code: scenario,
            error: "Private API details must not be shown",
          }),
        };
      };
      const form = render(messages);
      const pending = form.props.onSubmit({
        preventDefault() {},
        currentTarget: {},
      });
      const loading = render(messages);
      assert.ok(
        nodes(loading).find((node) => node.type === "button").props.disabled,
      );
      assert.ok(text(loading).includes(messages["Đang gửi..."]));
      resolve();
      await pending;
      const result = render(messages);
      if (scenario === "success")
        assert.ok(
          text(result).includes(messages["Đã gửi yêu cầu thành công!"]),
        );
      else {
        const key =
          scenario === "invalid_email"
            ? "Địa chỉ email không hợp lệ"
            : scenario === "required_fields"
              ? "Vui lòng điền họ tên, số điện thoại và email"
              : scenario === "rate_limited"
                ? "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau ít phút."
                : "Không thể gửi yêu cầu, vui lòng thử lại sau.";
        assert.equal(
          text(nodes(result).find((node) => node.props?.role === "alert")),
          messages[key],
        );
        assert.equal(
          nodes(result).find((node) => node.type === "button").props.disabled,
          false,
        );
      }
      submissionCases++;
    }
  }
} finally {
  globalThis.fetch = originalFetch;
  globalThis.FormData = OriginalFormData;
}
const base = process.argv
  .find((arg) => arg.startsWith("--base-url="))
  ?.slice(11);
let httpPagesChecked = 0,
  sitemapEntriesChecked = 0;
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#x27;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
if (base) {
  for (const locale of siteLocales) {
    const messages = getContactMessages(locale),
      href = localizedPageHref("/lien-he", locale);
    const response = await fetch(base + href);
    assert.equal(response.status, 200, href);
    const html = await response.text();
    for (const key of [
      "Liên hệ với chúng tôi",
      "Gửi yêu cầu tư vấn",
      "Câu hỏi thường gặp",
      "Dịch vụ bạn quan tâm",
      "Vui lòng mô tả chi tiết nhu cầu của bạn...",
      "Đặt lịch tư vấn ngay",
    ]) {
      // The Vietnamese hero intentionally keeps its original span emphasis.
      if (locale === "vi" && key === "Liên hệ với chúng tôi") continue;
      assert.ok(html.includes(escape(messages[key])), `${locale}: ${key}`);
    }
    assert.ok(html.includes(`lang="${locale}"`));
    assert.ok(html.includes(`rel="canonical" href="${siteBaseUrl + href}"`));
    for (const language of siteLocales) {
      assert.ok(
        html.includes(
          `hrefLang="${language}" href="${siteBaseUrl + localizedPageHref("/lien-he", language)}"`,
        ),
      );
    }
    assert.ok(html.includes(`href="${href}"`));
    for (const office of contactOffices)
      assert.ok(
        html.includes(
          escape(
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`,
          ),
        ),
      );
    assert.ok(html.includes('href="tel:0903897555"'));
    assert.ok(html.includes('value="Thiết kế nội thất"'));
    httpPagesChecked++;
  }
  for (const href of ["/vi/lien-he", "/xx/lien-he"])
    assert.equal((await fetch(base + href)).status, 404);
  const sitemapResponse = await fetch(base + "/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  for (const locale of siteLocales) {
    assert.ok(
      sitemap.includes(
        `<loc>${siteBaseUrl + localizedPageHref("/lien-he", locale)}</loc>`,
      ),
    );
    sitemapEntriesChecked++;
  }
}
const report = {
  checkedAt: new Date().toISOString(),
  locales: siteLocales.length,
  dictionaryKeys: sourceKeys.length,
  submissionCases,
  httpPagesChecked,
  sitemapEntriesChecked,
  emailTransport: "mocked_no_email_sent",
  editorialReview: "pending",
  browserReview: "not_requested",
  errors: [],
};
// A source-only check must not overwrite evidence from a completed HTTP run.
if (base) {
  const output = path.join(
    root,
    "docs/i18n-inventory/contact-verification.json",
  );
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, JSON.stringify(report, null, 2) + "\n");
}
console.log(JSON.stringify(report, null, 2));
