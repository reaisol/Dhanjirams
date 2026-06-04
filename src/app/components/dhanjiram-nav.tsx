import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import logo from "../../imports/Untitled_-_May_27__2026_at_12.15.37.png";

export function DhanjiramNav() {
  const links = ["Home", "Shop", "Heritage", "Recipes", "Contact"];
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FDF6E3] border-b border-[#2C1503]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
        <div className="flex items-center min-w-0">
          <img src={logo} alt="Dhanjiram logo" className="h-12 w-auto object-contain" />
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href="#" className="text-[#2C1503] hover:text-[#F7941D] transition-colors text-sm tracking-wide">
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#F7941D] hover:bg-[#C0392B] transition-colors text-[#2C1503] hover:text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full">
            <ShoppingBag size={16} />
            <span className="text-sm hidden sm:inline">Order Now</span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#2C1503] p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden bg-[#FDF6E3] border-t border-[#2C1503]/10 px-4 py-3 flex flex-col">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              onClick={() => setOpen(false)}
              className="text-[#2C1503] hover:text-[#F7941D] hover:bg-[#2C1503]/5 transition-colors text-sm tracking-wide py-3 px-4 rounded-lg"
            >
              {l}
            </a>
          ))}
          <div className="border-t border-[#2C1503]/10 mt-3 pt-3">
            <button className="w-full flex items-center justify-center gap-2 bg-[#F7941D] hover:bg-[#C0392B] transition-colors text-[#2C1503] hover:text-white px-5 py-3 rounded-full text-sm">
              <ShoppingBag size={16} /> Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
