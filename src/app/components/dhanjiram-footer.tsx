import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "../../imports/Untitled_-_May_27__2026_at_12.15.37.png";

export function DhanjiramFooter() {
  const cols = [
    { title: "Shop", links: ["Bestsellers", "Bhujia & Sev", "Dal & Mixes", "Gift Packs", "Festive Hampers"] },
    { title: "Company", links: ["Our Heritage", "Bhagyanagar Story", "Press", "Careers", "Wholesale"] },
    { title: "Help", links: ["Contact Us", "Shipping", "Returns", "Track Order", "FAQ"] },
  ];
  return (
    <footer className="bg-[#FDF6E3] text-[#2C1503] pt-14 sm:pt-20 pb-8 border-t border-[#2C1503]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-[#2C1503]/10">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-5">
              <img src={logo} alt="Dhanjiram logo" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-[#2C1503]/65 max-w-sm leading-relaxed mb-6">
              Handcrafted Hyderabadi namkeen, made the old way — small batches, real ingredients, no preservatives ever.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#2C1503]/20 hover:bg-[#F7941D] hover:border-[#F7941D] hover:text-[#2C1503] flex items-center justify-center text-[#2C1503] transition-colors">
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="min-w-0">
              <div className="text-[#F7941D] text-xs tracking-[0.25em] uppercase mb-5">{col.title}</div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[#2C1503]/70 hover:text-[#F7941D] text-sm transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[#2C1503]/50 text-xs text-center md:text-left">
          <div>© 2026 Balaji Foods Pvt Ltd. H.No 7-198/1-2, Vinayaka Nagar, Qutubullapur, Hyderabad · All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-[#F7941D]">Privacy</a>
            <a href="#" className="hover:text-[#F7941D]">Terms</a>
            <a href="#" className="hover:text-[#F7941D]">FSSAI Lic. No. 13617013000894</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
