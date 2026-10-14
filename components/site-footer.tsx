import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-black/10 py-7">
      <div className="grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-end">
        <div>
          <Image src="/images/logo2.png" alt="Crust Pizza Co." width={62} height={62} className="h-[62px] w-[62px] rounded-full object-contain" />
          <p className="mt-4 max-w-xs text-sm text-muted">Good people. Great pizza. Better memories.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase">
          <Link href="#menu" className="hover:text-brand-orange">Menu</Link>
          <Link href="#order" className="hover:text-brand-orange">Catering</Link>
          <Link href="#contact" className="hover:text-brand-orange">Contact</Link>
          <Link href="#contact" className="hover:text-brand-orange">Privacy</Link>
          <Link href="#contact" className="hover:text-brand-orange">Terms</Link>
        </div>
        <Link id="order" href="#menu" className="rounded-full bg-brand-orange px-6 py-3 text-center text-xs font-bold uppercase text-white hover:bg-brand-orange-dark">Place an order</Link>
      </div>
    </footer>
  );
}
