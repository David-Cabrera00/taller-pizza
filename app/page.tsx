import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { MenuPreview } from "@/components/menu-preview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WaysToEnjoy } from "@/components/ways-to-enjoy";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1336px] bg-paper px-5 pb-3 lg:px-8">
        <HeroSection />
        <MenuPreview />
        <AboutSection />
        <WaysToEnjoy />
        <WhyChooseUs />
      </main>
      <div className="mx-auto max-w-[1336px] bg-paper px-5 lg:px-8"><SiteFooter /></div>
    </div>
  );
}
