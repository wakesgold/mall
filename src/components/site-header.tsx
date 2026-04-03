import Image from "next/image";
import Link from "next/link";
import { company, navItems } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(9,13,21,0.86)] backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo2.PNG"
            alt={`${company.name} logo`}
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="flex flex-col">
            <span className="text-base font-semibold tracking-[0.08em] text-white">
              {company.name}
            </span>
            <span className="text-xs text-slate-400">{company.slogan}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
