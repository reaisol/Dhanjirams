import { Mail, Gift } from "lucide-react";

export function DhanjiramCta() {
  return (
    <section className="py-12 sm:py-20 bg-[#FDF6E3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-gradient-to-br from-[#F7941D] via-[#e07c1a] to-[#C0392B] p-6 sm:p-10 md:p-16 shadow-2xl">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-[#2C1503]/20 blur-2xl pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="text-white text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-5 max-w-full">
                <Gift size={14} className="shrink-0" /> <span className="truncate">Limited Welcome Offer</span>
              </div>
              <h2 style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.1 }} className="mb-4">
                Get <span className="italic">15% off</span> your first order
              </h2>
              <p className="text-white/85 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
                Drop your email and we'll send you a flat-15% code, plus a free recipe card with every tin.
              </p>
            </div>

            <form className="flex flex-col lg:flex-row gap-2 bg-white p-2 rounded-3xl lg:rounded-full shadow-xl w-full">
              <div className="flex items-center gap-3 flex-1 min-w-0 px-4 sm:px-5">
                <Mail className="text-[#C0392B] shrink-0" size={18} />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 bg-transparent outline-none text-[#2C1503] placeholder:text-[#2C1503]/40 py-3 text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="bg-[#2C1503] hover:bg-[#1a0c02] transition-colors text-[#F7941D] px-6 sm:px-7 py-3 rounded-2xl lg:rounded-full whitespace-nowrap text-sm sm:text-base"
              >
                Claim 15% Off
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
