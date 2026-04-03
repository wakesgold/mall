import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/types";
import { getCaseImagePath } from "@/lib/case-images";

type CaseCardProps = {
  item: CaseStudy;
  variant?: "default" | "featured";
  displayTitle?: string;
  displayHighlight?: string;
  displayMeta?: string;
  strongResult?: string;
  emphasis?: "primary" | "secondary" | "default";
};

export function CaseCard({
  item,
  variant = "default",
  displayTitle,
  displayHighlight,
  displayMeta,
  strongResult,
  emphasis = "default",
}: CaseCardProps) {
  const isFeatured = variant === "featured";
  const primaryResult =
    displayHighlight ?? item.result.find(Boolean) ?? item.projectBackground;
  const secondaryResults = item.result.filter(Boolean).slice(0, isFeatured ? 1 : 2);
  const visibleProblems = item.problem.filter(Boolean).slice(0, 3);
  const summaryText = isFeatured ? primaryResult : item.projectBackground;
  const coverSrc = isFeatured ? getCaseImagePath(item.coverImage) : null;
  const isPrimary = emphasis === "primary";

  return (
    <article
      className={`group flex h-full flex-col rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 ${
        isFeatured
          ? isPrimary
            ? "border border-amber-200/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] shadow-[0_28px_80px_rgba(0,0,0,0.26)] hover:border-amber-200/40 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.05))]"
            : "border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] shadow-[0_16px_42px_rgba(0,0,0,0.18)] hover:border-amber-200/32 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))]"
          : "border border-white/10 bg-white/5 hover:border-amber-200/40 hover:bg-white/7"
      }`}
    >
      {coverSrc ? (
        <div
          className={`relative mb-6 overflow-hidden rounded-[22px] border border-white/8 bg-[#0c1320] ${
            isPrimary ? "aspect-[16/10]" : "aspect-[4/2.7]"
          }`}
        >
          <Image
            src={coverSrc}
            alt={displayTitle ?? item.name}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,17,27,0.72)] via-transparent to-transparent" />
        </div>
      ) : null}
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="rounded-full border border-amber-300/25 px-3 py-1 text-xs tracking-[0.2em] text-amber-100">
          {item.caseType}
        </span>
        <span className="text-xs text-slate-400">
          {item.industry}
        </span>
      </div>
      <div className="space-y-3">
        <p className={`text-sm ${isPrimary ? "text-slate-300" : "text-slate-400"}`}>
          {displayMeta ?? `负责人：${item.owner}`}
        </p>
        {strongResult ? (
          <p
            className={`font-semibold tracking-tight text-amber-100 ${
              isFeatured
                ? isPrimary
                  ? "text-[1.8rem] leading-none sm:text-[2.25rem]"
                  : "text-[1.35rem] leading-none sm:text-[1.55rem]"
                : "text-lg leading-none"
            }`}
          >
            {strongResult}
          </p>
        ) : null}
        <h3
          className={`font-semibold text-white ${
            isFeatured
              ? isPrimary
                ? "text-[1.7rem] leading-10 sm:text-[2rem]"
                : "text-[1.35rem] leading-8 sm:text-[1.5rem]"
              : "text-[1.35rem] leading-8"
          }`}
        >
          {displayTitle ?? item.name}
        </h3>
        <p
          className={`leading-7 ${
            isFeatured
              ? isPrimary
                ? "text-base text-slate-100 sm:text-[1.02rem]"
                : "text-slate-200"
              : "text-sm text-slate-300"
          }`}
        >
          {summaryText}
        </p>
      </div>
      {secondaryResults.length > 0 ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {secondaryResults.map((result, index) => (
            <div
              key={`${item.slug}-${index}`}
              className="rounded-2xl border border-white/8 bg-[#0c1320] p-4"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-amber-100/80">
                结果 0{index + 1}
              </p>
              <p className="mt-2 text-sm leading-7 text-white">{result}</p>
            </div>
          ))}
        </div>
      ) : null}
      {isFeatured ? (
        <div
          className={`mt-6 rounded-[22px] px-4 py-4 ${
            isPrimary
              ? "border border-amber-200/18 bg-[rgba(217,178,111,0.12)]"
              : "border border-amber-300/12 bg-[rgba(217,178,111,0.08)]"
          }`}
        >
          <p
            className={`leading-7 ${
              isPrimary ? "text-[0.98rem] text-white" : "text-sm text-slate-100"
            }`}
          >
            {primaryResult}
          </p>
        </div>
      ) : visibleProblems.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {visibleProblems.map((problem) => (
            <span
              key={problem}
              className="rounded-full bg-white/6 px-3 py-1 text-xs text-slate-300"
            >
              {problem}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-auto pt-8">
        <Link
          href={`/cases/${item.slug}`}
          className="inline-flex items-center text-sm font-medium text-amber-100 transition hover:text-white"
        >
          查看案例详情
        </Link>
      </div>
    </article>
  );
}
