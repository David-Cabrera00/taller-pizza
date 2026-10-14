import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/data/menu-items";

export function MenuPreview() {
  return (
    <section id="menu" className="py-7 md:py-9">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold uppercase leading-none md:text-3xl">Our menu</h2>
        </div>
        <Link href="#order" className="hidden text-xs font-bold uppercase tracking-wide text-brand-orange underline underline-offset-4 sm:block">View full menu</Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {menuItems.map((item) => (
          <article key={item.name} className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
            <Image src={item.image} alt={item.name} width={260} height={125} className="h-28 w-full object-cover" />
            <div className="p-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold uppercase leading-none">{item.name}</h3>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-[9px] font-bold text-white">{item.price}</span>
              </div>
              <p className="mt-1.5 text-[10px] leading-tight text-muted">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-5 text-center sm:hidden">
        <Link href="#order" className="rounded-full bg-brand-orange px-5 py-3 text-xs font-bold uppercase text-white">View our complete menu</Link>
      </div>
    </section>
  );
}
