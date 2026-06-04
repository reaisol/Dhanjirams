import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import dhanjiramPack from "../../imports/Dhanjiram1-removebg-preview.png";

export function DhanjiramWhy() {
  return (
    <section className="bg-[#FDF6E3] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-[#2C1503] mb-6"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700 }}
          >
            Why Choose Us
          </h2>
          <p className="text-[#2C1503]/75 leading-relaxed mb-4">
            We take flavour seriously, and we use real Hyderabadi ingredients to make every tin of
            Dhanjiram light, airy, and packed with mouth-watering masala. At the same time, we're all
            about clean eating, and everything that goes into Dhanjiram comes straight from nature.
          </p>
          <p className="text-[#2C1503]/75 leading-relaxed mb-10">
            No GMOs, no trans fat, no cholesterol, no preservatives — ever. So there's no reason not
            to indulge in the crunch you love.
          </p>
          <button className="group inline-flex items-center gap-3 bg-[#2C1503] hover:bg-[#C0392B] transition-colors text-[#FDF6E3] px-8 py-4 rounded-full tracking-[0.2em] uppercase text-xs">
            Shop Now
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-10 rounded-full bg-[#F7941D]/20 blur-3xl" />
          <ImageWithFallback
            src={dhanjiramPack}
            alt="Dhanjiram namkeen pack"
            className="relative w-full max-w-md object-contain drop-shadow-2xl hover:-rotate-3 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
