import Image from "next/image";
import Link from "next/link";
import { company, navItems } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/8">
      <div className="page-shell py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo/logo2.PNG"
                alt={`${company.name} logo`}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-base font-semibold tracking-[0.06em] text-white">
                {company.name}
              </span>
            </Link>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              {company.slogan}
            </p>
            <p className="text-sm text-slate-300">
              电话 / 微信：{company.phone}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400 md:justify-end">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-4 text-xs text-slate-500">
          © 2026 {company.name}
        </div>
      </div>
    </footer>
  );
}
