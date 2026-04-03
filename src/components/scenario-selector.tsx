import Link from "next/link";

const scenarios = [
  {
    title: "新店刚开，线上没人知道",
    description: "线下准备好了，但抖音、小红书没起量",
    href: "#case-new-store",
  },
  {
    title: "发了不少视频，但没转化",
    description: "有播放、有点赞，但没人咨询、没人到店",
    href: "#case-conversion",
  },
  {
    title: "想做团购/直播，但不会",
    description: "不知道怎么做直播、团购怎么和内容配合",
    href: "#case-live-commerce",
  },
  {
    title: "员工不会拍、不敢出镜",
    description: "老板在做，团队跟不上，做不起来",
    href: "#case-team-training",
  },
] as const;

export function ScenarioSelector() {
  return (
    <section className="page-shell pb-12 sm:pb-16">
      <div className="rounded-[32px] border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_16px_36px_rgba(0,0,0,0.12)] sm:p-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm uppercase tracking-[0.26em] text-amber-200/75">
            快速判断
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            你现在更接近哪种情况？
          </h2>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            选一个最接近你的，我们直接给你看对应案例和做法。
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {scenarios.map((scenario) => (
            <Link
              key={scenario.title}
              href={scenario.href}
              className="group flex h-full flex-col rounded-[24px] border border-white/8 bg-[#0c1320] px-5 py-5 transition duration-200 hover:-translate-y-1 hover:border-amber-200/28 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]"
            >
              <p className="text-base font-semibold leading-7 text-white transition group-hover:text-amber-50">
                {scenario.title}
              </p>
              <p className="mt-2.5 text-sm leading-7 text-slate-400">
                {scenario.description}
              </p>
              <span className="mt-auto pt-6 text-sm font-medium text-amber-100 transition group-hover:text-white">
                看对应案例
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
