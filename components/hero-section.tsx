import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="relative mt-5 overflow-hidden rounded-[22px] bg-foreground md:mt-6">
      <Image src="/images/pizzaGrande.jpg" alt="Freshly baked pizza on a wooden table" width={1120} height={420} priority className="h-[300px] w-full object-cover md:h-[390px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/5 to-transparent" />
      <div className="absolute inset-y-0 left-0 flex max-w-[470px] flex-col justify-center px-5 text-white md:px-8">
        <div className="w-fit max-w-[360px] bg-[#20201e]/90 px-5 py-4 md:max-w-[410px] md:px-6 md:py-5">
          <h1 className="text-4xl font-bold uppercase leading-[0.88] tracking-tight md:text-6xl">For delicious, made-from-scratch pizzas</h1>
          <p className="mt-3 text-[11px] leading-tight text-white/80 md:text-xs">Made with care, quality ingredients, and a whole lot of flavor.</p>
        </div>
        <Link href="#order" className="mt-3 w-fit rounded-full bg-brand-orange px-5 py-2.5 text-[11px] font-bold uppercase text-white transition-colors hover:bg-brand-orange-dark">Order online</Link>
      </div>
    </section>
  );
}
