import Image from "next/image";

export function WhyChooseUs() {
  return (
    <section className="border-t border-black/10 py-8 md:py-10">
      <div className="grid gap-8 md:grid-cols-[0.88fr_1.12fr] md:items-center">
        <div className="relative min-h-[245px] pr-24 md:min-h-[275px] md:pr-28">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">@yourbrandhandle</p>
          <h2 className="mt-5 max-w-sm text-2xl font-bold uppercase leading-[0.92] md:text-3xl">Let&apos;s work together for our community</h2>
          <p className="mt-3 max-w-xs text-[11px] leading-relaxed text-muted">Our team believes restaurants should serve the people and places that make every neighborhood special.</p>
          <Image src="/images/niños.png" alt="Kids supporting the community" width={300} height={220} className="absolute bottom-0 right-0 h-[145px] w-[175px] object-contain object-bottom" />
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <h2 className="mb-3 text-2xl font-bold uppercase leading-none md:text-3xl">Why choose us</h2>
          <div className="grid grid-cols-3 gap-1 overflow-hidden rounded-lg">
            {["comida1.png", "pasta1.jpg", "pizza1.jpg", "pizza2.jpg", "comiendo.jpg", "pastaqueso.jpg"].map((image, index) => (
              <Image key={image} src={`/images/${image}`} alt={`Community moment ${index + 1}`} width={220} height={180} className="aspect-square w-full object-cover" />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-5 border-t border-black/10 pt-8 md:grid-cols-[0.9fr_1.1fr_0.8fr] md:items-center">
        <div>
          <h2 className="max-w-xs text-2xl font-bold uppercase leading-[0.92] md:text-3xl">Want&apos;s to own your own Crust Pizza Co.?</h2>
          <p className="mt-2 text-[11px] text-muted">Learn how our franchise concept is built to grow.</p>
          <a href="mailto:hello@crustpizzaco.com" className="mt-4 inline-block rounded-full bg-brand-orange px-5 py-2.5 text-[10px] font-bold uppercase text-white">Submit a request</a>
        </div>
        <Image src="/images/local.png" alt="Crust Pizza Co. location" width={500} height={220} className="h-40 w-full rounded-xl object-cover" />
        <div>
          <h2 className="text-2xl font-bold uppercase leading-none md:text-3xl">Submit a request</h2>
          <div className="mt-4 flex gap-2">
            {["Licensing", "Get involved", "Franchise us"].map((label) => (
              <a key={label} href="mailto:hello@crustpizzaco.com" className="flex h-14 flex-1 items-center justify-center rounded-xl bg-brand-orange px-2 text-center text-[8px] font-bold uppercase text-white">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
