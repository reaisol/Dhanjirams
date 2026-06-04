import { motion } from "motion/react";

const reviews = [
  {
    name: "Anjali M.",
    quote:
      "The bhujia tastes EXACTLY like the one my Nani used to bring back from Hyderabad. Pure nostalgia in every single bite, and the packaging keeps it fresh for weeks.",
  },
  {
    name: "Rohan S.",
    quote:
      "Ordered a festive hamper for Diwali — the box was gorgeous and the moong dal disappeared in two days flat. Quality you can actually taste, no oily aftertaste at all.",
  },
  {
    name: "Kavita I.",
    quote:
      "Finally a namkeen brand that doesn't taste of preservatives. Crunch is unreal, spice level is perfectly balanced. I've already reordered twice this month.",
  },
];

export function DhanjiramTestimonials() {
  return (
    <section className="relative bg-[#F7941D] pt-16 sm:pt-24 pb-32 sm:pb-40">
      {/* Heading */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-16">
        <h2
          className="text-white"
          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 700 }}
        >
          What Our Customers Say
        </h2>
      </div>

      {/* Cards */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative bg-[#2C1503] text-[#FDF6E3] rounded-[28px] p-8 pb-14 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.4)]"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(50% + 14px) calc(100% - 28px), 50% 100%, calc(50% - 14px) calc(100% - 28px), 0 calc(100% - 28px))",
            }}
          >
            <div
              className="text-center text-[#F7941D] mb-4"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "20px", fontWeight: 700 }}
            >
              {r.name}
            </div>
            <p className="text-center text-[#FDF6E3]/85 text-sm leading-relaxed">{r.quote}</p>
            <div
              className="absolute bottom-10 right-6 text-[#F7941D]/70 leading-none"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "56px", fontWeight: 700 }}
            >
              ”
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative mascot popcorn-like emoji */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute left-8 bottom-28"
        style={{ fontSize: "64px" }}
      >
        🥨
      </motion.div>

      {/* Wavy bottom edge into next section */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: "90px" }}
      >
        <path
          d="M0,60 C240,120 480,0 720,40 C960,80 1200,120 1440,60 L1440,120 L0,120 Z"
          fill="#FDF6E3"
        />
      </svg>
    </section>
  );
}
