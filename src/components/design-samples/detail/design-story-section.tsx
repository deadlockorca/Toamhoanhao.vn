import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

import Image from "next/image";

import type { DesignSample } from "@/data/design-samples";

type DesignStorySectionProps = {
  sample: DesignSample;
};

export function DesignStorySection({ sample }: DesignStorySectionProps) {
  const detail = sample.detail;
  const blocks =
    detail?.features.length
      ? detail.features.map((feature) => ({
          index: feature.index,
          title: feature.title,
          description: feature.description,
          image: feature.image,
        }))
      : (detail?.gallery ?? []).map((item, index) => ({
          index: String(index + 1).padStart(2, "0"),
          title: item.title,
          description: "",
          image: item.image,
        }));

  if (blocks.length === 0) {
    return null;
  }

  const total = String(blocks.length).padStart(2, "0");

  return (
    <section id="gallery" className="bg-[#f7f1e9] px-5 pb-12 sm:px-8">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-xs font-bold uppercase tracking-[0.1em] text-[#7a6d5c]">
          Câu chuyện thiết kế
        </h2>

        <div className="mt-6 space-y-8">
          {blocks.map((block) => {
            const dimensions = getLocalImageDimensions(block.image);
            const ratio = dimensions ? dimensions.width / dimensions.height : 2.33;
            const useSplitLayout = ratio < 1.8;
            const imageStyle = {
              aspectRatio: dimensions
                ? `${dimensions.width} / ${dimensions.height}`
                : "2560 / 1097",
            };
            const paragraphs = splitParagraphs(block.description);
            const hasText = paragraphs.length > 0;
            const heading = (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a47b45]">
                  Hình ảnh {block.index}/{total}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-[#2d281f] sm:text-3xl">
                  {block.title}
                </h3>
              </div>
            );
            const image = (
              <div className="relative bg-[#efe8dc]" style={imageStyle}>
                <Image
                  src={block.image}
                  alt={block.title || sample.title}
                  fill
                  sizes={
                    useSplitLayout
                      ? "(min-width: 1024px) 52vw, calc(100vw - 40px)"
                      : "(min-width: 1180px) 1120px, calc(100vw - 40px)"
                  }
                  className="object-contain"
                />
              </div>
            );

            return (
              <article
                key={`${block.index}-${block.image}`}
                className={
                  !hasText
                    ? "overflow-hidden border border-[#ded4c4] bg-[#fbf7f1]/70"
                    : useSplitLayout
                      ? "overflow-hidden border border-[#ded4c4] bg-[#fbf7f1]/70 px-5 py-6 sm:px-7 lg:px-8"
                      : "overflow-hidden border border-[#ded4c4] bg-[#fbf7f1]/70"
                }
              >
                {!hasText ? (
                  image
                ) : useSplitLayout ? (
                  <>
                    <div className="lg:float-right lg:mb-6 lg:ml-8 lg:w-[58%]">
                      {image}
                    </div>
                    <div className="lg:pr-2">{heading}</div>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-[#5f574a]">
                      {paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="clear-both" />
                  </>
                ) : (
                  <>
                    <div className="grid gap-4 border-b border-[#ded4c4] px-5 py-5 sm:px-7 lg:grid-cols-[260px_1fr] lg:gap-10 lg:px-8">
                      {heading}
                      <div className="max-w-[680px] space-y-4 text-sm leading-7 text-[#5f574a]">
                        {paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                    {image}
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function splitParagraphs(description: string) {
  return description.split("\n\n").filter(Boolean);
}

function getLocalImageDimensions(src: string) {
  if (!src.startsWith("/")) {
    return undefined;
  }

  const publicDir = path.join(process.cwd(), "public");
  const filePath = path.normalize(path.join(publicDir, src));

  if (!filePath.startsWith(publicDir) || !existsSync(filePath)) {
    return undefined;
  }

  const buffer = readFileSync(filePath);

  if (buffer.toString("ascii", 0, 4) !== "RIFF") {
    return undefined;
  }

  let offset = 12;

  while (offset + 8 <= buffer.length) {
    const type = buffer.toString("ascii", offset, offset + 4);
    const size = buffer.readUInt32LE(offset + 4);
    const dataOffset = offset + 8;

    if (type === "VP8X" && dataOffset + 10 <= buffer.length) {
      return {
        width: 1 + buffer.readUIntLE(dataOffset + 4, 3),
        height: 1 + buffer.readUIntLE(dataOffset + 7, 3),
      };
    }

    if (type === "VP8 " && dataOffset + 10 <= buffer.length) {
      return {
        width: buffer.readUInt16LE(dataOffset + 6) & 0x3fff,
        height: buffer.readUInt16LE(dataOffset + 8) & 0x3fff,
      };
    }

    if (type === "VP8L" && dataOffset + 5 <= buffer.length) {
      const b1 = buffer[dataOffset + 1];
      const b2 = buffer[dataOffset + 2];
      const b3 = buffer[dataOffset + 3];
      const b4 = buffer[dataOffset + 4];

      return {
        width: 1 + (((b2 & 0x3f) << 8) | b1),
        height: 1 + (((b4 & 0x0f) << 10) | (b3 << 2) | ((b2 & 0xc0) >> 6)),
      };
    }

    offset += 8 + size + (size % 2);
  }

  return undefined;
}
