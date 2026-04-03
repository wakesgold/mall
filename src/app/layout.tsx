import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: `${company.name}｜抖音代运营案例展示`,
  description:
    "纵合传媒案例展示网站，聚焦乌海本地商家抖音代运营、短视频、直播、团购设计与团队介绍。",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/logo/logo.png", type: "image/png" },
    ],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: `${company.name}｜抖音代运营案例展示`,
    description:
      "纵合传媒案例展示网站，聚焦乌海本地商家抖音代运营、短视频、直播、团购设计与团队介绍。",
  },
  twitter: {
    card: "summary",
    title: `${company.name}｜抖音代运营案例展示`,
    description:
      "纵合传媒案例展示网站，聚焦乌海本地商家抖音代运营、短视频、直播、团购设计与团队介绍。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="min-h-screen bg-[#09111b] text-white">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
