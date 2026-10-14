import Image from "next/image";
import Link from "next/link";
import { Baby, Trophy } from "lucide-react";

export function WaysToEnjoy() {
  return (
    <section id="locations" className="border-t border-black/10 py-7 md:py-9">
      <h2 className="text-2xl font-bold uppercase leading-none md:text-3xl">Ways to enjoy</h2>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="aspect-square overflow-hidden rounded-[24px] bg-white p-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <Image src="/images/logo.png" alt="Crust Pizza Co. pepperoni pizza" width={620} height={620} className="h-full w-full object-contain" />
        </div>
        <div className="grid items-start gap-4 sm:grid-cols-2">
          <article className="rounded-[22px] bg-foreground p-5 text-white lg:aspect-[4/5]">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange">
              <Trophy size={25} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-bold uppercase leading-[0.95]">Award-winning pizza & service</h3>
            <p className="mt-3 text-[10px] leading-tight text-white/70">Something delicious for every occasion, served with genuine care.</p>
            <Link href="#order" className="mt-5 inline-block rounded-full bg-brand-orange px-4 py-2.5 text-[9px] font-bold uppercase text-white">Learn more</Link>
          </article>
          <article className="rounded-[22px] bg-foreground p-5 text-white lg:aspect-[4/5]">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange">
              <Baby size={25} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-bold uppercase leading-[0.95]">Kids eat free Tuesdays!</h3>
            <p className="mt-3 text-[10px] leading-tight text-white/70">Your whole crew deserves a night off from cooking.</p>
            <Link href="#contact" className="mt-5 inline-block rounded-full bg-brand-orange px-4 py-2.5 text-[9px] font-bold uppercase text-white">View our rewards</Link>
          </article>
        </div>
      </div>
    </section>
  );
}
