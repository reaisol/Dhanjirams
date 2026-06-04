import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "../../imports/1.jpg";
import banner2 from "../../imports/2.jpg";
import banner3 from "../../imports/3.jpg";
import banner4 from "../../imports/4.jpg";

const banners = [
  { src: banner1, alt: "Namkeen – Crunch into Happiness Every Day" },
  { src: banner2, alt: "Sweets – Big Sweets Sale" },
  { src: banner3, alt: "Dry Fruits" },
  { src: banner4, alt: "Special Beverages" },
];

export function DhanjiramHero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((index + banners.length) % banners.length);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 4000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Slide wrapper — sized by the visible image so nothing is clipped */}
      <div className="relative w-full">
        {banners.map((banner, i) => (
          <img
            key={i}
            src={banner.src}
            alt={banner.alt}
            className="w-full h-auto block transition-opacity duration-500"
            style={{
              opacity: i === current ? 1 : 0,
              position: i === current ? "relative" : "absolute",
              top: 0,
              left: 0,
              pointerEvents: i === current ? "auto" : "none",
            }}
          />
        ))}

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 shadow-md transition-all"
          aria-label="Previous banner"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 shadow-md transition-all"
          aria-label="Next banner"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? 20 : 8,
                height: 8,
                background: i === current ? "#F7941D" : "rgba(255,255,255,0.7)",
              }}
              aria-label={`Go to banner ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
