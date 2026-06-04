import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import beveragesImg from "../../imports/ChatGPT_Image_May_27__2026__01_12_36_PM.png";
import giftHampersImg from "../../imports/ChatGPT_Image_May_27__2026__01_14_13_PM.png";
import namkeensImg from "../../imports/ChatGPT_Image_May_27__2026__01_17_45_PM.png";
import sweetsImg from "../../imports/sweets.png";

const categories = [
  {
    name: "Sweets",
    img: sweetsImg,
  },
  {
    name: "Namkeens",
    img: namkeensImg,
  },
  {
    name: "Beverages",
    img: beveragesImg,
  },
  {
    name: "Dry Fruits",
    img: "https://images.unsplash.com/photo-1543158181-1274e5362710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Pickles",
    img: "https://images.unsplash.com/photo-1617854307432-13950e24ba07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Gift Hampers",
    img: giftHampersImg,
  },
];

export function DhanjiramProducts() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="text-[#C0392B] text-xs tracking-[0.3em] uppercase mb-3">— What We Offer —</div>
          <h2
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700 }}
            className="text-[#2C1503]"
          >
            Categories We Serve
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer flex flex-col items-center gap-2"
            >
              <div className="w-full aspect-square overflow-hidden rounded-sm shadow-sm">
                <ImageWithFallback
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p
                className="text-[#2C1503] text-center"
                style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(12px, 1.5vw, 15px)", fontWeight: 600 }}
              >
                {cat.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
