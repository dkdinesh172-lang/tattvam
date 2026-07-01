import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";
import slide4 from "@/assets/hero-slide-4.jpg";
import slide5 from "@/assets/hero-slide-5.jpg";

const slides = [
  { src: slide1, quote: '"Play is the highest form of research."', concept: "Play-Based Learning" },
  { src: slide2, quote: '"Every child is an artist."', concept: "Creativity" },
  { src: slide3, quote: '"The world is a playground for curious minds."', concept: "Exploration" },
  { src: slide4, quote: '"A kind heart is the foundation of a bright future."', concept: "Emotional Growth" },
  { src: slide5, quote: '"Learning is a treasure that follows its owner everywhere."', concept: "Fun Learning" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden pt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].src}
            alt={slides[current].concept}
            className="w-full h-full object-cover"
            loading={current === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-secondary/90 text-secondary-foreground font-body font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4">
              {slides[current].concept}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-lg">
              Nurturing Young
              <span className="block text-secondary">{slides[current].concept}</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/90 italic mb-8 drop-shadow">
              {slides[current].quote}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#enquiry"
                onClick={(e) => scrollToSection(e, "enquiry")}
                className="bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-display font-semibold text-base sm:text-lg hover:shadow-lg transition-all hover:-translate-y-1 flex items-center gap-2"
              >
                Enroll Now <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-display font-semibold text-base sm:text-lg hover:bg-white/10 transition-all"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-secondary w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
