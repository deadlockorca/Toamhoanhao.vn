// These are review candidates, never masks approved for deletion or image edits.
const normalize = (s) =>
  s.normalize("NFD").replace(/\p{M}/gu, "").replace(/đ/gi, "d").toLowerCase();
const compact = (s) => normalize(s).replace(/[^a-z0-9]/g, "");
export const groupLabels = {
  center_or_mixed: "Dấu giữa ảnh / nhiều vị trí — phức tạp",
  edge_or_corner: "Dấu ở mép / góc — cần kiểm tra nền",
  text_unconfirmed: "Có chữ nhưng chưa xác định watermark",
  no_text_detected: "Chưa phát hiện chữ — cần kiểm tra logo hình",
  floor_plan: "Có bản vẽ / sơ đồ — duyệt riêng",
  unavailable: "Chưa đọc được ảnh",
};
export function classify(observations, usages) {
  const candidates = [];
  for (const item of observations) {
    const text = normalize(item.text),
      key = compact(item.text);
    let evidence;
    if (/ans[l1i]?[li1]fe|anslife/.test(key)) evidence = "anslife";
    else if (/toamho|hoanhao|hoanhac/.test(key)) evidence = "to_am_hoan_hao";
    else if (/\b(?:\+?84|0)[\d .()-]{8,}\d\b/.test(text)) evidence = "phone";
    else if (/[\w.+-]+@[\w.-]+\.[a-z]{2,}/.test(text)) evidence = "email";
    else if (/(?:www\.|[a-z0-9-]+\.(?:com|vn|net|org)\b)/.test(text))
      evidence = "website";
    else if (
      /architectureinterior|hitectureinterior|interiordesign|interiordecor/.test(
        key,
      ) &&
      (item.y < 0.18 || item.y + item.height > 0.82)
    )
      evidence = "contact_or_slogan";
    else if (
      /contact\s*(?:for|work)|thi cong xay dung|thiet ke xay dung|anslife architecture/.test(
        text,
      )
    )
      evidence = "contact_or_slogan";
    if (evidence) {
      const x = Math.max(0, Math.min(1, item.x));
      const y = Math.max(0, Math.min(1, item.y));
      const right = Math.max(x, Math.min(1, item.x + item.width));
      const bottom = Math.max(y, Math.min(1, item.y + item.height));
      if (right > x && bottom > y)
        candidates.push({
          ...item,
          x,
          y,
          width: right - x,
          height: bottom - y,
          evidence,
        });
    }
  }
  const center = candidates.some(
    (box) => box.y + box.height / 2 > 0.2 && box.y + box.height / 2 < 0.8,
  );
  const floorPlan =
    usages.some((use) => use.field === "floorPlanImage") ||
    /mat bang|floor plan|layout|ban ve/.test(
      normalize(usages.map((use) => use.caption ?? "").join(" ")),
    );
  const group = floorPlan
    ? "floor_plan"
    : center
      ? "center_or_mixed"
      : candidates.length
        ? "edge_or_corner"
        : observations.length
          ? "text_unconfirmed"
          : "no_text_detected";
  return {
    group,
    complexity:
      floorPlan || center
        ? "high_candidate"
        : candidates.length
          ? "undetermined_background"
          : "unknown",
    reviewStatus: "pending_visual_review",
    brands: [
      ...new Set(
        candidates
          .map((box) => box.evidence)
          .filter((name) => ["anslife", "to_am_hoan_hao"].includes(name)),
      ),
    ],
    candidates,
    warning:
      "OCR regions are candidates only; preserve real signage, drawing annotations and architectural details.",
  };
}
