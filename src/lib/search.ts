export type SearchEntry = {
  slug?: string;
  href: string;
  title: string;
  summary: string;
  thumbnail: string;
  contentType: "project" | "designSample" | "article";
  keywords?: string;
};

// Accept Vietnamese without accents, common spelling variants and m²/m2.
export function normalizeSearch(text: string) {
  return text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/đ/g, "d")
    .replace(/²/g, "2")
    .replace(/penhouse/g, "penthouse")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function searchEntries(entries: SearchEntry[], query: string) {
  const phrase = normalizeSearch(query);
  if (!phrase) return [];
  const words = phrase.split(" ");
  const seen = new Set<string>();
  return entries
    .flatMap((entry) => {
      const identity = entry.slug ?? entry.href;
      if (seen.has(identity)) return [];
      seen.add(identity);
      const title = normalizeSearch(entry.title);
      const keywords = normalizeSearch(entry.keywords ?? "");
      const text = `${title} ${keywords} ${normalizeSearch(entry.summary)}`;
      if (!words.every((word) => text.includes(word))) return [];
      const score =
        (title.includes(phrase) ? 100 : 0) +
        words.reduce(
          (sum, word) =>
            sum + (title.includes(word) ? 10 : keywords.includes(word) ? 3 : 0),
          0,
        );
      return [{ entry, score }];
    })
    .sort((a, b) => b.score - a.score)
    .map(({ entry }) => entry);
}
