import { ContactCtaCard } from "@/components/contact-cta-card";
import { company } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="page-shell py-16 sm:py-20">
      <section className="rounded-[36px] border border-white/10 bg-white/[0.04] px-6 py-8 sm:px-8 sm:py-10">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
          联系咨询
        </p>
        <div className="mt-4 max-w-4xl">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            直接沟通你现在的门店情况
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            新店启动、账号冷启动、团购联动、短视频+直播一起做，都可以先聊清楚再决定
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            不是先签单，而是先把你现在的问题和阶段聊清楚
          </p>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)]">
        <ContactCtaCard phone={company.phone} wechat={company.wechat} />

        <section className="rounded-[32px] border border-white/10 bg-white/5 p-7 sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            可以先聊什么
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300">
            不需要先准备完整方案，把你现在门店的实际情况说清楚，我们会更快判断该先做什么、后做什么。
          </p>
          <div className="mt-6 space-y-3">
            {[
              "新店马上要开，不知道怎么做内容",
              "账号发了很久没有效果",
              "想把团购和直播一起做起来",
              "想有人带着团队一起跑",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-white/8 bg-[#0c1320] px-4 py-4 text-sm leading-7 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8 rounded-[32px] border border-white/10 bg-[#0b121d] px-6 py-7 sm:px-8">
        <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
          沟通方式
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "新店启动",
              description: "适合先聊开业时间、门店定位、预热节奏和前期内容怎么铺。",
            },
            {
              title: "账号诊断",
              description: "适合把现在账号做不起来的原因先捋清，再判断是不是内容、节奏或转化链路的问题。",
            },
            {
              title: "联动执行",
              description: "适合已经想做团购、短视频、直播，但还没串成一套动作的门店。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
            >
              <p className="text-lg font-medium text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-8 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
        很多问题不是拍一条视频能解决的，而是整套节奏要顺下来，这个可以帮你一起理清
      </p>
    </div>
  );
}
