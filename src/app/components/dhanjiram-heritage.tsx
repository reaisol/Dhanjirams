import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import founderImg from "../../imports/founder.png";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function DhanjiramHeritage() {
  return (
    <section className="bg-[#FAF3E0] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-square max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] mx-auto w-full mb-6 sm:mb-10 lg:mb-0"
        >
          <div className="absolute inset-0 bg-[#F7941D] rounded-[40px] shadow-2xl flex items-center justify-center overflow-hidden">
            <img
              src={founderImg}
              alt="Shri Dhanjiram ji, Founder"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-[#2C1503] rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-[#FDF6E3]">
            <div className="text-[#F7941D] text-[9px] sm:text-[10px] tracking-[0.25em] uppercase">Established</div>
            <div className="text-[#F7941D]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, lineHeight: 1 }}>
              <span className="text-[32px] sm:text-[40px] lg:text-[44px]">1990</span>
            </div>
            <div className="text-[#FDF6E3]/70 text-[9px] sm:text-[10px] tracking-widest uppercase mt-1">Hyderabad</div>
          </div>
        </motion.div>

        {/* Copy */}
        <div>
          <div className="text-[#C0392B] text-xs tracking-[0.3em] uppercase mb-4">— Our Heritage —</div>
          <h2 className="text-[#2C1503] mb-6" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 700 }}>
            A Dhanjiram's Story, <span className="italic text-[#C0392B]">Lovingly Told</span>
          </h2>
          <p className="text-[#2C1503]/75 leading-relaxed mb-4">
            In 1990, in a narrow lane of old Bhagyanagar, Hyderabad, <strong>Shri Dhanjiram ji</strong> set up a tiny brass kadhai
            and began frying namkeen with chickpea flour, moth dal, and a closely guarded blend of Deccan spices.
            Word travelled. Lines grew. Recipes never changed.
          </p>
          <p className="text-[#2C1503]/75 leading-relaxed mb-10">
            Thirty Six  years later, we still cook in small batches, still source from the same Telangana farms,
            and still hand-pack every tin with the same care. Some things, you don't modernise.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-6 border-t border-[#2C1503]/10 pt-6 sm:pt-8">
            <div>
              <div className="text-[#C0392B] text-[26px] sm:text-[38px] lg:text-[44px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, lineHeight: 1 }}>
                <Counter to={36} suffix="+" />
              </div>
              <div className="text-[#2C1503]/60 text-[9px] sm:text-xs tracking-normal sm:tracking-widest uppercase mt-1 sm:mt-2 leading-tight">Years of Legacy</div>
            </div>
            <div>
              <div className="text-[#C0392B] text-[26px] sm:text-[38px] lg:text-[44px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, lineHeight: 1 }}>
                <Counter to={25} suffix="+" />
              </div>
              <div className="text-[#2C1503]/60 text-[9px] sm:text-xs tracking-normal sm:tracking-widest uppercase mt-1 sm:mt-2 leading-tight">Varieties</div>
            </div>
            <div>
              <div className="text-[#C0392B] text-[26px] sm:text-[38px] lg:text-[44px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, lineHeight: 1 }}>
                <Counter to={1000000} />+
              </div>
              <div className="text-[#2C1503]/60 text-[9px] sm:text-xs tracking-normal sm:tracking-widest uppercase mt-1 sm:mt-2 leading-tight">Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
