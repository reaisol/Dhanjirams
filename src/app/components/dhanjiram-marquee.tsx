import { motion } from "motion/react";

const items = [
  "Hyderabadi Bhujia",
  "Moong Dal",
  "Methi Sev",
  "Palak Chips",
  "Aloo Bhujia",
  "Khatta Meetha",
  "Navratan Mix",
  "Masala Peanuts",
  "Chana Jor",
  "Kaju Pista Mix",
];

export function DhanjiramMarquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#F7941D] border-y-4 border-[#2C1503] overflow-hidden py-5 w-full">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span
              className="text-[#2C1503]"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "28px", fontWeight: 700 }}
            >
              {item}
            </span>
            <span className="text-[#2C1503] text-xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
