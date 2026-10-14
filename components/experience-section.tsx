import Image from "next/image";
import Link from "next/link";
import { Baby, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const galleryImages = [
  "comida1.png",
  "pasta1.jpg",
  "pizza1.jpg",
  "pizza2.jpg",
  "comiendo.jpg",
  "pastaqueso.jpg",
];

const requestOptions = ["Licensing", "Get involved", "Franchise us"];

export function ExperienceSection() {
  return (
    <section id="locations" className="border-t border-black/10 py-7 md:py-9">
      <h2 className="text-2xl font-bold uppercase leading-none md:text-3xl">Ways to enjoy</h2>

      <div className="mt-5 grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
        <div>
          <div className="aspect-square overflow-hidden rounded-[24px] bg-white p-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <Image src="/images/logo.png" alt="Crust Pizza Co. pepperoni pizza" width={620} height={620} className="h-full w-full object-contain" />
          </div>

          <div className="relative mt-7 min-h-[190px] pr-32">
            <p className="text-xs font-bold tracking-tight">@yourbrandhandle</p>
            <h3 className="mt-4 max-w-sm text-2xl font-bold uppercase leading-[0.92] md:text-3xl">Let&apos;s work together for our community</h3>
            <p className="mt-3 max-w-xs text-[10px] leading-relaxed text-muted">Our team believes restaurants should serve the people and places that make every neighborhood special.</p>
            <Image src="/images/niños.png" alt="Kids supporting the community" width={300} height={220} className="absolute bottom-0 right-0 h-[145px] w-[175px] object-contain object-bottom" />
          </div>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            <PromoCard icon={Trophy} title="Award-winning pizza & service" description="Something delicious for every occasion, served with genuine care." action="Learn more" href="#order" />
            <PromoCard icon={Baby} title="Kids eat free Tuesdays!" description="Your whole crew deserves a night off from cooking." action="View our rewards" href="#contact" />
          </div>

          <div className="mt-6 rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <h3 className="mb-3 text-2xl font-bold uppercase leading-none md:text-3xl">Why choose us</h3>
            <div className="grid grid-cols-3 gap-1 overflow-hidden rounded-lg">
              {galleryImages.map((image, index) => (
                <Image key={image} src={`/images/${image}`} alt={`Community moment ${index + 1}`} width={220} height={180} className="aspect-square w-full object-cover" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 border-t border-black/10 pt-8 md:grid-cols-[0.86fr_1.14fr_0.8fr] md:items-center">
        <div>
          <h3 className="max-w-xs text-2xl font-bold uppercase leading-[0.92] md:text-3xl">Want&apos;s to own your own Crust Pizza Co.?</h3>
          <p className="mt-2 text-[10px] leading-relaxed text-muted">Learn how our franchise concept is built to grow.</p>
          <a href="mailto:hello@crustpizzaco.com" className="mt-4 inline-block rounded-full bg-brand-orange px-5 py-2.5 text-[10px] font-bold uppercase text-white">Submit a request</a>
        </div>

        <Image src="/images/local.png" alt="Crust Pizza Co. location" width={500} height={220} className="h-36 w-full rounded-xl object-cover md:h-40" />

        <div>
          <h3 className="text-2xl font-bold uppercase leading-none md:text-3xl">Submit a request</h3>
          <div className="mt-4 flex gap-2">
            {requestOptions.map((label) => (
              <a key={label} href="mailto:hello@crustpizzaco.com" className="flex h-14 flex-1 items-center justify-center rounded-xl bg-brand-orange px-2 text-center text-[8px] font-bold uppercase leading-tight text-white">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type PromoCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  href: string;
};

function PromoCard({ icon: Icon, title, description, action, href }: PromoCardProps) {
  return (
    <article className="rounded-[22px] bg-foreground p-5 text-white sm:min-h-[225px]">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange">
        <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-bold uppercase leading-[0.95]">{title}</h3>
      <p className="mt-3 text-[10px] leading-tight text-white/70">{description}</p>
      <Link href={href} className="mt-5 inline-block rounded-full bg-brand-orange px-4 py-2.5 text-[9px] font-bold uppercase text-white">{action}</Link>
    </article>
  );
}
