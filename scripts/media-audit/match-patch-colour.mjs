import sharp from "sharp";

// Extend the colour difference at the mask boundary into its interior. This
// removes rectangular exposure seams without copying the old watermark back.
export async function matchPatchColour(original, edited, mask, width, height) {
  const smallWidth = Math.min(240, width);
  const smallHeight = Math.max(2, Math.round((height * smallWidth) / width));
  const resize = (data, channels) =>
    sharp(data, { raw: { width, height, channels } })
      .resize(smallWidth, smallHeight, { fit: "fill" })
      .removeAlpha()
      .raw()
      .toBuffer();
  const [before, after, smallMask] = await Promise.all([
    resize(original, 4),
    resize(edited, 4),
    sharp(mask, { raw: { width, height, channels: 1 } })
      .resize(smallWidth, smallHeight, { fit: "fill", kernel: "nearest" })
      .greyscale()
      .raw()
      .toBuffer(),
  ]);
  const correction = new Float32Array(smallWidth * smallHeight * 3);
  const inside = [];
  for (let i = 0; i < smallWidth * smallHeight; i++) {
    if (smallMask[i]) inside.push(i);
    else
      for (let c = 0; c < 3; c++)
        correction[i * 3 + c] = before[i * 3 + c] - after[i * 3 + c];
  }
  for (let iteration = 0; iteration < 450; iteration++) {
    let largestChange = 0;
    for (const i of inside) {
      const x = i % smallWidth;
      const y = Math.floor(i / smallWidth);
      const neighbors = [];
      if (x) neighbors.push(i - 1);
      if (x < smallWidth - 1) neighbors.push(i + 1);
      if (y) neighbors.push(i - smallWidth);
      if (y < smallHeight - 1) neighbors.push(i + smallWidth);
      for (let c = 0; c < 3; c++) {
        let sum = 0;
        for (const n of neighbors) sum += correction[n * 3 + c];
        const index = i * 3 + c;
        const change = 1.65 * (sum / neighbors.length - correction[index]);
        correction[index] += change;
        largestChange = Math.max(largestChange, Math.abs(change));
      }
    }
    if (largestChange < 0.025) break;
  }
  const result = Buffer.from(edited);
  for (let i = 0; i < width * height; i++) {
    if (!mask[i]) continue;
    const sx = Math.max(
      0,
      Math.min(
        smallWidth - 1,
        (((i % width) + 0.5) * smallWidth) / width - 0.5,
      ),
    );
    const sy = Math.max(
      0,
      Math.min(
        smallHeight - 1,
        ((Math.floor(i / width) + 0.5) * smallHeight) / height - 0.5,
      ),
    );
    const x0 = Math.floor(sx),
      y0 = Math.floor(sy);
    const x1 = Math.min(x0 + 1, smallWidth - 1),
      y1 = Math.min(y0 + 1, smallHeight - 1);
    const dx = sx - x0,
      dy = sy - y0;
    for (let c = 0; c < 3; c++) {
      const value =
        (1 - dy) *
          ((1 - dx) * correction[(y0 * smallWidth + x0) * 3 + c] +
            dx * correction[(y0 * smallWidth + x1) * 3 + c]) +
        dy *
          ((1 - dx) * correction[(y1 * smallWidth + x0) * 3 + c] +
            dx * correction[(y1 * smallWidth + x1) * 3 + c]);
      result[i * 4 + c] = Math.max(
        0,
        Math.min(255, Math.round(edited[i * 4 + c] + value)),
      );
    }
  }
  return result;
}
