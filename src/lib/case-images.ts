import fs from "node:fs";
import path from "node:path";

const CASE_IMAGES_DIR = path.join(process.cwd(), "public", "case-images");

const fileMap = new Map<string, string>();

if (fs.existsSync(CASE_IMAGES_DIR)) {
  for (const entry of fs.readdirSync(CASE_IMAGES_DIR, { withFileTypes: true })) {
    if (!entry.isFile()) {
      continue;
    }
    fileMap.set(entry.name.toLowerCase(), entry.name);
  }
}

function unique(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

function buildCandidates(raw: string) {
  const trimmed = raw.trim();
  const normalizedSpacing = trimmed.replace(/\s+/g, " ");
  const screenshotTimeNormalized = normalizedSpacing.replace(
    /(\d{2})\.(\d{2})\.(\d{2})(\.[A-Za-z0-9]+)$/u,
    "$1_$2_$3$4"
  );

  return unique([
    trimmed,
    normalizedSpacing,
    trimmed.replace(/:/g, "_"),
    normalizedSpacing.replace(/:/g, "_"),
    screenshotTimeNormalized,
    screenshotTimeNormalized.replace(/:/g, "_"),
  ]);
}

export function getCaseImagePath(filename?: string) {
  if (!filename) {
    return null;
  }

  for (const candidate of buildCandidates(filename)) {
    const matched = fileMap.get(candidate.toLowerCase());
    if (matched) {
      return `/case-images/${encodeURIComponent(matched)}`;
    }
  }

  return null;
}

export function getCaseGalleryImages(entries: string[]) {
  return entries
    .flatMap((entry) =>
      entry
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    )
    .map((filename) => ({
      filename,
      src: getCaseImagePath(filename),
    }))
    .filter((item): item is { filename: string; src: string } => Boolean(item.src));
}

type GalleryGroup = {
  key: string;
  title: string;
  items: Array<{ filename: string; src: string }>;
};

function inferGroupTitle(entry: string, index: number) {
  const normalized = entry.toLowerCase();

  if (
    index === 0 ||
    normalized.includes("png") ||
    normalized.includes("截屏") ||
    normalized.includes("screenshot")
  ) {
    return "播放量 / 内容数据";
  }

  if (
    index === 1 ||
    normalized.includes("wechat") ||
    normalized.includes("成交") ||
    normalized.includes("变现")
  ) {
    return "变现 / 成交反馈";
  }

  if (
    index === 2 ||
    normalized.includes("直播") ||
    normalized.includes("培训") ||
    normalized.includes("现场")
  ) {
    return "培训 / 出镜 / 直播现场";
  }

  return `图片资料 ${index + 1}`;
}

export function getCaseGalleryGroups(entries: string[]): GalleryGroup[] {
  return entries
    .map((entry, index) => {
      const items = entry
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((filename) => ({
          filename,
          src: getCaseImagePath(filename),
        }))
        .filter((item): item is { filename: string; src: string } => Boolean(item.src));

      if (items.length === 0) {
        return null;
      }

      return {
        key: `group-${index}`,
        title: inferGroupTitle(entry, index),
        items,
      };
    })
    .filter((group): group is GalleryGroup => Boolean(group));
}
