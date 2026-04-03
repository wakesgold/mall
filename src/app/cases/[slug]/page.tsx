import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/cases";
import { getCaseGalleryGroups, getCaseImagePath } from "@/lib/case-images";

type CaseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  const background = item.background ?? item.projectBackground;
  const problems = item.problem.filter(Boolean);
  const executionSteps = item.executionSteps.filter(Boolean);
  const results = item.result.filter(Boolean);
  const capabilityChange = item.capabilityChange?.filter(Boolean) ?? [];
  const gallery = item.gallery.filter(Boolean);
  const douyinUrl = item.douyinUrl ?? item.homepageLink ?? "";
  const heroResult = results[0] ?? background;
  const secondaryResults = results.slice(1);
  const coverSrc = getCaseImagePath(item.coverImage);
  const galleryGroups = getCaseGalleryGroups(gallery);

  return (
    <div className="page-shell py-14 sm:py-18">
      <Link href="/cases" className="text-sm text-slate-400 transition hover:text-white">
        返回案例列表
      </Link>

      <section className="mt-7 rounded-[36px] border border-amber-200/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-amber-300/25 px-3 py-1 text-xs tracking-[0.2em] text-amber-100">
            {item.caseType}
          </span>
          <span className="text-sm text-slate-400">
            {item.industry} · 负责人：{item.owner}
          </span>
        </div>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              {item.name}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
              {heroResult}
            </p>
          </div>
          <div className="rounded-[28px] border border-white/8 bg-[#0c1320] p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              项目背景
            </p>
            <p className="mt-3 text-lg leading-8 text-white">{background}</p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
        {problems.length > 0 ? (
          <article className="rounded-[30px] border border-white/8 bg-white/[0.04] p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-100/80">
              客户当时面临的问题
            </p>
            <div className="mt-5 space-y-3">
              {problems.map((problem, index) => (
                <div
                  key={`${item.slug}-problem-${index}`}
                  className="rounded-[22px] border border-white/8 bg-[#0c1320] px-5 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-amber-100/75">
                    问题 0{index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">{problem}</p>
                </div>
              ))}
            </div>
          </article>
        ) : null}

        {item.whyThisApproach ? (
          <article className="rounded-[30px] border border-amber-200/10 bg-[rgba(217,178,111,0.06)] p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-100/90">
              我们为什么这样做
            </p>
            <p className="mt-4 text-base leading-8 text-slate-100">
              {item.whyThisApproach}
            </p>
          </article>
        ) : null}
      </section>

      {executionSteps.length > 0 ? (
        <section className="mt-12 rounded-[32px] border border-white/8 bg-white/[0.04] p-7 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-amber-100/80">
                执行过程
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                这件事具体是怎么推进的
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            {executionSteps.map((step, index) => (
              <article
                key={`${item.slug}-step-${index}`}
                className="rounded-[24px] border border-white/8 bg-[#0c1320] p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-amber-100/80">
                  Step 0{index + 1}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{step}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {results.length > 0 ? (
        <section className="mt-12 rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.14)] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-amber-100/80">
                最终结果
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                最后客户能感受到的变化
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[28px] border border-amber-200/14 bg-[linear-gradient(135deg,rgba(217,178,111,0.12),rgba(255,255,255,0.04))] p-6 sm:p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-100/80">
                重点结果
              </p>
              <p className="mt-3 text-xl leading-9 text-white sm:text-2xl">
                {results[0]}
              </p>
            </div>
            {secondaryResults.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {secondaryResults.map((result, index) => (
                  <div
                    key={`${item.slug}-result-${index + 1}`}
                    className="rounded-[24px] border border-white/8 bg-[#0c1320] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-amber-100/80">
                      结果 0{index + 2}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white">{result}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {capabilityChange.length > 0 ? (
        <section className="mt-12 rounded-[32px] border border-white/8 bg-white/[0.04] p-7 sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-amber-100/80">
            能力变化
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            合作后团队发生了什么变化
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilityChange.map((change, index) => (
              <article
                key={`${item.slug}-capability-${index}`}
                className="rounded-[24px] border border-white/8 bg-[#0c1320] p-5"
              >
                <p className="text-sm leading-7 text-slate-200">{change}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {coverSrc || galleryGroups.length > 0 ? (
        <section className="mt-12 rounded-[32px] border border-white/8 bg-white/[0.04] p-7 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-amber-100/80">
                项目资料
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                相关截图与现场记录
              </h2>
            </div>
          </div>

          {coverSrc ? (
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                封面图
              </p>
              <article className="overflow-hidden rounded-[28px] border border-white/8 bg-[#0c1320]">
                <div className="relative aspect-[16/8] border-b border-white/8">
                  <Image
                    src={coverSrc}
                    alt={`${item.name} 封面图`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <div className="p-5">
                  <p className="break-words text-sm leading-7 text-slate-400">
                    {item.coverImage}
                  </p>
                </div>
              </article>
            </div>
          ) : null}

          <div className="mt-8 space-y-8">
            {galleryGroups.map((group) => (
              <div key={group.key}>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                  {group.title}
                </p>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((galleryItem, index) => (
                    <article
                      key={`${group.key}-${index}`}
                      className="overflow-hidden rounded-[26px] border border-white/8 bg-[#0c1320]"
                    >
                      <div className="relative aspect-[4/3] border-b border-white/8">
                        <Image
                          src={galleryItem.src}
                          alt={`${item.name} ${group.title} 图片 ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1280px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-5">
                        <p className="break-words text-sm leading-7 text-slate-400">
                          {galleryItem.filename}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-12 rounded-[34px] border border-amber-200/15 bg-[linear-gradient(135deg,rgba(217,178,111,0.12),rgba(255,255,255,0.03))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.16)] sm:p-10">
          <div className="max-w-3xl space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              如果你门店现在也卡在类似问题，可以直接聊你们当前阶段。
            </h2>
          <p className="text-base leading-8 text-slate-200">
            新店要启动、账号一直起不来、团购挂上去没人持续做、员工不会拍不会直播，都可以先沟通具体情况。
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-200/45 bg-[linear-gradient(180deg,#e7c788_0%,#d8b16b_100%)] px-6 py-3.5 text-sm font-semibold text-[#101826] shadow-[0_16px_36px_rgba(217,178,111,0.2)] transition hover:border-amber-100/70 hover:bg-[linear-gradient(180deg,#edd4a0_0%,#dfbb7b_100%)] hover:text-[#0f172a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1420] active:border-amber-200 active:bg-[linear-gradient(180deg,#dcc082_0%,#cfa45e_100%)] active:text-[#0f172a]"
            >
              预约门店抖音诊断
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-amber-200/60 hover:bg-white/5"
            >
              获取适合你门店的运营方案
            </Link>
            {douyinUrl ? (
              <a
                href={douyinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-amber-200/60 hover:bg-white/5"
              >
                查看对应抖音主页
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
