import Link from "next/link";
import Image from "next/image";
import { Info, Menu as MenuIcon } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
  { label: "Order Online", href: "#order" },
];

export function SiteHeader() {
  return (
    <header className="h-[82px] border-b border-black/10 bg-paper">
      <div className="relative mx-auto flex h-full max-w-[1336px] items-center justify-between px-4 xl:px-0">
        <nav className="hidden items-center gap-7 text-[13px] font-bold uppercase tracking-[0.06em] md:flex">
          {navigationItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-md px-4 py-3 transition-colors hover:bg-brand-orange hover:text-white ${index === 0 ? "bg-brand-orange text-white" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#home" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/images/logo2.png" alt="Crust Pizza Co." width={74} height={74} className="h-[74px] w-[74px] rounded-full object-contain" priority />
        </Link>

        <nav className="hidden items-center gap-7 text-[13px] font-bold uppercase tracking-[0.06em] md:flex">
          <Link href="#about" className="hover:text-brand-orange">About</Link>
          <Link href="#contact" className="hover:text-brand-orange">Contact</Link>
          <span className="flex items-center gap-4">
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-orange text-white"><Info size={17} strokeWidth={2.5} /></span>
            <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-label="Twitter" role="img">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.15 12.15 0 0 1 3.03 4.8a4.27 4.27 0 0 0 1.32 5.71 4.25 4.25 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2.6 19.1a12.1 12.1 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.18v-.55A8.7 8.7 0 0 0 22.46 6Z" />
            </svg>
            <Link href="#order" className="hover:text-brand-orange">Call now</Link>
          </span>
        </nav>

        <button type="button" className="rounded border border-foreground px-3 py-2 text-xs font-bold uppercase md:hidden">
          <MenuIcon size={18} aria-label="Open menu" />
        </button>
      </div>
    </header>
  );
}
