'use client';

import { useState } from "react";

type ContactCtaCardProps = {
  phone: string;
  wechat: string;
};

export function ContactCtaCard({ phone, wechat }: ContactCtaCardProps) {
  const [copyLabel, setCopyLabel] = useState("复制微信");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(wechat);
      setCopyLabel("微信号已复制");

      window.setTimeout(() => {
        setCopyLabel("复制微信");
      }, 2000);
    } catch {
      setCopyLabel("复制失败，请手动添加");

      window.setTimeout(() => {
        setCopyLabel("复制微信");
      }, 2000);
    }
  };

  return (
    <section className="rounded-[32px] border border-amber-300/25 bg-[linear-gradient(180deg,rgba(217,178,111,0.14),rgba(255,255,255,0.04))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-9">
      <p className="text-sm uppercase tracking-[0.28em] text-amber-200/80">
        电话 / 微信
      </p>
      <div className="mt-5 space-y-4">
        <a
          href={`tel:${phone}`}
          className="block rounded-[28px] border border-white/10 bg-[#0c1320]/90 px-6 py-5 transition hover:border-amber-300/35 hover:bg-[#101a29]"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
            直接沟通
          </p>
          <p className="mt-3 text-3xl font-semibold tracking-[0.03em] text-white sm:text-4xl">
            {phone}
          </p>
        </a>
        <p className="text-sm leading-7 text-slate-300">
          直接加微信沟通更方便，门店现在的阶段、账号情况和想做的方向都可以先发过来。
        </p>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a href={`tel:${phone}`} className="cta-primary min-w-[10rem]">
          拨打电话
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="cta-secondary min-w-[10rem] cursor-pointer"
        >
          {copyLabel}
        </button>
      </div>

      <div className="mt-5 rounded-[24px] border border-white/8 bg-[#0a111c] px-5 py-4">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
          微信号
        </p>
        <p className="mt-2 text-lg font-medium text-slate-100">{wechat}</p>
      </div>
    </section>
  );
}
