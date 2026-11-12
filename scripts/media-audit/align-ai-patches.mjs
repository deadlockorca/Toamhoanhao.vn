// Register AI repair patches against unchanged scene edges before compositing.
// Only pixels selected by the cleanup mask are sampled from shifted AI pixels.
export function alignAiPatches(original, generated, mask, width, height) {
  const count = width * height;
  const gradients = (rgba) => {
    const grey = new Uint8Array(count);
    for (let i = 0; i < count; i++)
      grey[i] = (rgba[i * 4] * 77 + rgba[i * 4 + 1] * 150 + rgba[i * 4 + 2] * 29) >> 8;
    const gx = new Int16Array(count), gy = new Int16Array(count);
    for (let y = 1; y < height - 1; y++) for (let x = 1; x < width - 1; x++) {
      const i = y * width + x;
      gx[i] = grey[i + 1] - grey[i - 1];
      gy[i] = grey[i + width] - grey[i - width];
    }
    return { gx, gy };
  };
  const a = gradients(original), b = gradients(generated);
  const seen = new Uint8Array(count), queue = new Int32Array(count);
  const output = Buffer.from(generated), diagnostics = [];
  const limit = Math.max(6, Math.min(24, Math.round(width * 0.025)));
  for (let start = 0; start < count; start++) {
    if (!mask[start] || seen[start]) continue;
    let head = 0, tail = 1, left = width, top = height, right = 0, bottom = 0;
    queue[0] = start; seen[start] = 1;
    while (head < tail) {
      const i = queue[head++], x = i % width, y = Math.floor(i / width);
      left = Math.min(left, x); right = Math.max(right, x);
      top = Math.min(top, y); bottom = Math.max(bottom, y);
      for (const n of [x ? i - 1 : -1, x + 1 < width ? i + 1 : -1, y ? i - width : -1, y + 1 < height ? i + width : -1])
        if (n >= 0 && mask[n] && !seen[n]) { seen[n] = 1; queue[tail++] = n; }
    }
    const points = [];
    for (let y = Math.max(1, top - 16); y <= Math.min(height - 2, bottom + 16); y += 4)
      for (let x = Math.max(1, left - 16); x <= Math.min(width - 2, right + 16); x += 4) {
        const i = y * width + x, energy = a.gx[i] ** 2 + a.gy[i] ** 2;
        if (!mask[i] && energy > 144) points.push({ i, x, y, energy });
      }
    points.sort((x, y) => y.energy - x.energy);
    points.length = Math.min(500, points.length);
    if (points.length < 20) continue;
    const score = (dx, dy) => {
      // A patch touching the image edge must never sample beyond the frame.
      if (left + dx < 0 || top + dy < 0 || right + dx >= width || bottom + dy >= height) return -1;
      let dot = 0, aa = 0, bb = 0;
      for (const p of points) {
        const x = p.x + dx, y = p.y + dy;
        if (x < 1 || y < 1 || x >= width - 1 || y >= height - 1) continue;
        const j = y * width + x;
        dot += a.gx[p.i] * b.gx[j] + a.gy[p.i] * b.gy[j];
        aa += p.energy; bb += b.gx[j] ** 2 + b.gy[j] ** 2;
      }
      return aa && bb ? dot / Math.sqrt(aa * bb) : -1;
    };
    const base = score(0, 0);
    let best = base, dx = 0, dy = 0;
    for (let y = -limit; y <= limit; y++) for (let x = -limit; x <= limit; x++) {
      const s = score(x, y);
      if (s > best + 0.002 || (Math.abs(s - best) < 0.002 && x * x + y * y < dx * dx + dy * dy)) { best = s; dx = x; dy = y; }
    }
    const coarseX = dx, coarseY = dy;
    for (let y = coarseY - 3; y <= coarseY + 3; y++) for (let x = coarseX - 3; x <= coarseX + 3; x++) {
      if (Math.abs(x) > limit || Math.abs(y) > limit) continue;
      const s = score(x, y);
      if (s > best + 0.002 || (Math.abs(s - best) < 0.002 && x * x + y * y < dx * dx + dy * dy)) { best = s; dx = x; dy = y; }
    }
    if (best < 0.45 || best < base + 0.035) continue;
    for (let k = 0; k < tail; k++) {
      const i = queue[k], x = i % width, y = Math.floor(i / width);
      const xx = Math.max(0, Math.min(width - 1, x + dx)), yy = Math.max(0, Math.min(height - 1, y + dy));
      const source = (yy * width + xx) * 4;
      for (let c = 0; c < 4; c++) output[i * 4 + c] = generated[source + c];
    }
    diagnostics.push({ left, top, right, bottom, dx, dy, scoreBefore: base, scoreAfter: best, maskPixels: tail });
  }
  return { pixels: output, diagnostics };
}
