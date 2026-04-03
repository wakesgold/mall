import Link from "next/link";
import { CaseCard } from "@/components/case-card";
import { ScenarioSelector } from "@/components/scenario-selector";
import { SectionHeading } from "@/components/section-heading";
import {
  advantages,
  company,
  differentiators,
  painPoints,
  processSteps,
  stats,
  testimonials,
} from "@/data/site";
import { caseStudies } from "@/data/cases";

export default function HomePage() {
  const featuredCasePresentation = {
    "case-009": {
      displayTitle: "阿琪格传统涮",
      displayMeta: "餐饮 · 新店启动 / 开业引流",
      strongResult: "试营业到开业 23万+",
      displayHighlight:
        "新店还没正式开业，就先把预热内容和直播锁客跑起来，试营业到开业阶段直接做出线上销售额。",
    },
    "case-001": {
      displayTitle: "乌海稻草人内衣店",
      displayMeta: "服饰 · 员工培训 + 代运营联动",
      strongResult: "两个月线上销量 12.6w+",
      displayHighlight:
        "把店员从不会拍、不会播，带到能稳定参与短视频和直播，门店线上开始真正跑出销量和核销。",
    },
    "case-006": {
      displayTitle: "悦己中意化妆",
      displayMeta: "化妆品 · 连锁门店代运营",
      strongResult: "五个月销售额 29.8w+",
      displayHighlight:
        "从冷启动到门店成交，把直播、员工内容和新店节点接起来，逐步把线上销售渠道做起来。",
    },
    "case-005": {
      displayTitle: "悦己中意针织",
      displayMeta: "服饰 · 连锁矩阵 + 直播转化",
      strongResult: "五个月线上销量 37w+",
      displayHighlight:
        "一边带店长和员工搭矩阵，一边稳定推进门店直播和团购，持续放大连锁门店的线上成交能力。",
    },
  } as const;

  const curatedFeaturedCases = ["case-009", "case-001", "case-006", "case-005"]
    .map((slug) => {
      const item = caseStudies.find((entry) => entry.slug === slug);
      if (!item) return null;
      return {
        item,
        presentation:
          featuredCasePresentation[slug as keyof typeof featuredCasePresentation],
      };
    })
    .filter(
      (
        entry
      ): entry is {
        item: (typeof caseStudies)[number];
        presentation: (typeof featuredCasePresentation)[keyof typeof featuredCasePresentation];
      } => Boolean(entry)
    );

  const [primaryFeaturedCase, ...secondaryFeaturedCases] = curatedFeaturedCases;
  const featuredCaseAnchors: Partial<Record<(typeof caseStudies)[number]["slug"], string>> = {
    "case-009": "case-new-store",
    "case-006": "case-conversion",
    "case-005": "case-live-commerce",
    "case-001": "case-team-training",
  };

  return (
    <div className="pb-18 sm:pb-20">
      <section className="page-shell pt-14 pb-18 sm:pt-16 sm:pb-20 lg:pb-22">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-16">
          <div className="max-w-[31rem] space-y-6 sm:space-y-7">
            <p className="text-sm uppercase tracking-[0.32em] text-amber-200/80">
              乌海本地增长服务
            </p>
            <div className="space-y-7">
              <h1 className="max-w-[8.9em] text-[1.5rem] font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:text-[1.95rem] lg:text-[2.45rem]">
                <span className="block whitespace-nowrap">很多门店做不起来，</span>
                <span className="mt-4 block whitespace-nowrap sm:mt-6">
                  不是内容不行，而是不会成交
                </span>
              </h1>
              <p className="max-w-xl text-[15px] leading-8 text-slate-300 sm:text-[1rem] sm:leading-8">
                {company.heroDescription}
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="cta-primary font-semibold"
              >
                直接聊你现在的门店情况
              </Link>
              <Link
                href="/cases"
                className="cta-secondary font-medium"
              >
                看真实案例
              </Link>
            </div>
            <p className="text-sm leading-7 text-slate-300">
              不确定该先看案例还是先聊，直接联系更快。
              <Link
                href="/contact"
                className="ml-2 font-medium text-amber-100 transition hover:text-white"
              >
                电话 / 微信：{company.phone}
              </Link>
            </p>
            <p className="text-sm leading-7 text-slate-400">
              200+门店实战跑通过，不是试方法，是直接给你可落地的路径
            </p>
          </div>

          <div className="rounded-[30px] border border-amber-200/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-white/8 bg-[#0b1320] p-4"
                >
                  <p className="text-2xl font-semibold text-white sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[22px] border border-white/8 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                你们和普通拍视频公司的区别
              </p>
              <p className="mt-3 text-base leading-8 text-slate-200 sm:text-lg">
                普通拍摄公司更偏交付内容，我们更偏门店实际经营结果。视频只是其中一步，重点是账号、团购、直播、活动和成交怎么接起来。
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScenarioSelector />

      <section className="page-shell pb-12 sm:pb-16">
        <div className="rounded-[32px] border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_16px_36px_rgba(0,0,0,0.12)] sm:p-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm uppercase tracking-[0.26em] text-amber-200/75">
              常见经营难点
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              我们解决什么问题
            </h2>
            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              本地门店在做抖音和线上增长时，最常见的难点基本都集中在这几类。
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {painPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-white/8 bg-[#0c1320] px-5 py-5"
              >
                <h3 className="text-base font-semibold leading-7 text-white sm:text-[1.05rem]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pb-12 sm:pb-18">
        <div className="mb-12 rounded-[32px] border border-amber-200/12 bg-[linear-gradient(135deg,rgba(217,178,111,0.1),rgba(255,255,255,0.03))] px-6 py-7 shadow-[0_18px_42px_rgba(0,0,0,0.16)] sm:px-8 sm:py-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.26em] text-amber-200/75">
              先别继续试
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              如果你现在也是这些情况，可以直接聊你现在的门店情况
            </h2>
            <div className="mt-5 space-y-2 text-sm leading-7 text-slate-300 sm:text-base">
              <p>账号做了很久没效果</p>
              <p>新店马上开但线上没准备</p>
              <p>视频拍了但没有成交</p>
              <p>不用准备方案，我们先帮你判断下一步怎么做</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="cta-primary font-semibold">
              直接聊你现在的门店情况
            </Link>
            <Link href="/cases" className="cta-secondary font-medium">
              看真实案例
            </Link>
          </div>
        </div>

        <div className="grid gap-8 rounded-[32px] border border-amber-200/8 bg-white/[0.035] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-xl space-y-3">
            <p className="text-sm uppercase tracking-[0.26em] text-amber-200/75">
              服务差异
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              我们和普通拍摄 / 代运营团队有什么不同
            </h2>
            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              这不是高低之分，只是做法不同。我们更适合本地商家、新店启动、门店引流和团购联动这类需要把内容和生意接起来的场景。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {differentiators.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-white/8 bg-[#0c1320] px-5 py-5"
              >
                <h3 className="text-base font-semibold leading-7 text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-16">
        <SectionHeading
          eyebrow="服务优势"
          title="公司优势"
          description="不绕概念，直接把我们能帮门店解决的问题和做出的结果讲清楚。"
        />
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
          不是帮你把视频拍好，而是让内容、团购、直播一起带来成交。
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item) => (
            <article
              key={item.title}
              className="rounded-[26px] border border-white/8 bg-white/[0.035] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-[15px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell py-16 sm:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeading
              eyebrow="代表案例"
              title="精选案例"
              description="从新店启动到门店代运营，先看几组更能代表我们实际结果的项目。"
            />
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              这些案例的共同点，不是拍得多好，而是把内容和成交接上了。
            </p>
          </div>
          <Link
            href="/cases"
            className="text-sm font-medium text-amber-100 transition hover:text-white"
          >
            查看全部案例
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.28fr)_minmax(320px,0.72fr)] lg:items-start">
          {primaryFeaturedCase ? (
            <div
              id={featuredCaseAnchors[primaryFeaturedCase.item.slug]}
              className="scroll-mt-28 lg:sticky lg:top-24"
            >
              <CaseCard
                item={primaryFeaturedCase.item}
                variant="featured"
                emphasis="primary"
                displayTitle={primaryFeaturedCase.presentation.displayTitle}
                displayMeta={primaryFeaturedCase.presentation.displayMeta}
                strongResult={primaryFeaturedCase.presentation.strongResult}
                displayHighlight={primaryFeaturedCase.presentation.displayHighlight}
              />
            </div>
          ) : null}
          <div className="grid gap-5">
            {secondaryFeaturedCases.map(({ item, presentation }) => (
              <div
                key={item.slug}
                id={featuredCaseAnchors[item.slug]}
                className="scroll-mt-28"
              >
                <CaseCard
                  item={item}
                  variant="featured"
                  emphasis="secondary"
                  displayTitle={presentation.displayTitle}
                  displayMeta={presentation.displayMeta}
                  strongResult={presentation.strongResult}
                  displayHighlight={presentation.displayHighlight}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 rounded-[28px] border border-amber-200/10 bg-[rgba(217,178,111,0.06)] px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1.5">
              <p className="text-lg font-semibold text-white">
                想先判断你的门店适合怎么起号、怎么做开业预热，可以先拿一版思路。
              </p>
            </div>
            <Link
              href="/contact"
              className="cta-primary font-semibold"
            >
              获取新店开业抖音启动方案
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-16">
        <div className="rounded-[34px] border border-white/8 bg-white/[0.035] p-7 sm:p-9">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.26em] text-amber-200/75">
              合作流程
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              服务流程
            </h2>
            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              真实项目不是拍完就发，而是先看门店现在处在什么阶段、卡在哪一步，再决定先做什么、后做什么，把内容、团购、直播和门店节奏接起来。
            </p>
            <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
              同样是做抖音，新店启动、老店引流、团购联动和团队培训，推进顺序都不会一样。流程的作用不是套模板，而是把路径排清楚。
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex h-full flex-col rounded-[22px] border border-white/8 bg-[#0c1320] px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <p className="text-sm uppercase tracking-[0.18em] text-amber-100/80">
                    0{index + 1}
                  </p>
                  <div className="h-px flex-1 bg-white/8" />
                </div>
                <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-6.5 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-16">
        <SectionHeading
          eyebrow="合作反馈"
          title="合作后的真实反馈"
          description="客户更认可的，不是一条内容，而是门店经营结果的真实变化。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.title}
              className="rounded-[26px] border border-white/8 bg-white/[0.035] p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amber-100/80">
                {item.context}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
              <div className="mt-5 rounded-[22px] border border-white/8 bg-[#0c1320] px-4 py-4">
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  {item.quote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pt-10">
        <div className="rounded-[36px] border border-amber-200/15 bg-[linear-gradient(135deg,rgba(217,178,111,0.12),rgba(255,255,255,0.04))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-10 lg:p-12">
          <div className="max-w-3xl space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              越晚开始梳理门店打法，内容、团购和直播就越容易继续各做各的。
            </h2>
            <p className="text-sm leading-7 text-amber-100/85">
              很多门店的问题，越拖越难解决。
            </p>
            <p className="text-base leading-8 text-slate-200">
              先把门店现阶段的问题和节奏聊清楚，能少走不少试错弯路，也更容易尽快开始见到实际反馈。
            </p>
            <div className="flex flex-col gap-4 pt-2 lg:flex-row lg:flex-wrap lg:items-center">
              <Link
                href="/contact"
                className="cta-primary font-semibold"
              >
                现在梳理门店抖音怎么做
              </Link>
              <Link
                href="/contact"
                className="cta-secondary font-medium"
              >
                看看团购 + 短视频 + 直播怎么接起来
              </Link>
            </div>
            <div className="pt-2 text-sm text-slate-300">
              电话 / 微信：{company.phone} · {company.address}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
