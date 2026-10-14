import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ChefHat, CookingPot, Flame, HeartHandshake, Sparkles, Users } from "lucide-react";

const values = [
  [ChefHat, "Chicago style"],
  [CookingPot, "Crust made"],
  [Sparkles, "Whole foods"],
  [HeartHandshake, "Loving made"],
  [Users, "Quality people"],
  [Flame, "Fun times"],
] satisfies [LucideIcon, string][];

export function AboutSection() {
  return (
    <section id="about" className="grid gap-8 border-y border-black/10 py-8 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-8 md:py-9">
      <div>
        <h2 className="max-w-md text-4xl font-bold uppercase leading-[0.88] md:text-5xl">Home of the Chicago-style thin crust pizza</h2>
        <p className="mt-4 max-w-lg text-xs leading-relaxed text-muted md:text-sm">Delicious thin crust pizza is more than a meal. It is a reason to gather, share a table, and make memories with the people you love.</p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <Link href="#order" className="rounded-full bg-brand-orange px-5 py-2.5 text-[10px] font-bold uppercase text-white hover:bg-brand-orange-dark">Learn more</Link>
          <Link href="#contact" className="text-[10px] font-bold uppercase">See locations</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[minmax(210px,1fr)_minmax(180px,0.85fr)] md:gap-4">
        <div className="grid grid-cols-3 gap-x-2 gap-y-4">
          {values.map(([Icon, label]) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="flex h-[76px] w-[76px] items-center justify-center rounded-xl bg-brand-orange text-white shadow-sm md:h-[86px] md:w-[86px]">
                <Icon size={31} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <span className="mt-1.5 max-w-[82px] text-[8px] font-bold uppercase leading-[0.95] tracking-tight">{label}</span>
            </div>
          ))}
        </div>

        <div className="relative h-[245px] min-w-0">
          <div className="absolute left-0 top-7 w-[125px] rotate-[-6deg] bg-white p-2 pb-7 shadow-[0_4px_12px_rgba(0,0,0,0.16)] md:w-[145px]">
            <Image src="/images/personna1.png" alt="Crust Pizza Co. team member" width={250} height={220} className="h-[155px] w-full object-cover object-top" />
          </div>
          <div className="absolute right-0 top-1 w-[125px] rotate-[5deg] bg-white p-2 pb-7 shadow-[0_4px_12px_rgba(0,0,0,0.16)] md:w-[145px]">
            <Image src="/images/personamujer2.png" alt="Crust Pizza Co. team member" width={250} height={220} className="h-[155px] w-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}
