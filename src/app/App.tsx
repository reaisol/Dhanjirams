import { DhanjiramNav } from "./components/dhanjiram-nav";
import { DhanjiramHero } from "./components/dhanjiram-hero";
import { DhanjiramMarquee } from "./components/dhanjiram-marquee";
import { DhanjiramProducts } from "./components/dhanjiram-products";
import { DhanjiramWhy } from "./components/dhanjiram-why";
import { DhanjiramHeritage } from "./components/dhanjiram-heritage";
import { DhanjiramTestimonials } from "./components/dhanjiram-testimonials";
import { DhanjiramCta } from "./components/dhanjiram-cta";
import { DhanjiramFooter } from "./components/dhanjiram-footer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDF6E3] overflow-x-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <DhanjiramNav />
      <DhanjiramHero />
      <DhanjiramMarquee />
      <DhanjiramProducts />
      <DhanjiramHeritage />
      <DhanjiramTestimonials />
      <DhanjiramWhy />
      <DhanjiramCta />
      <DhanjiramFooter />
      <Analytics />
    </div>
  );
}
