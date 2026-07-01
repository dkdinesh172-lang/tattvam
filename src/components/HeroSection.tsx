import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Heart, BookOpen } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const el = document.getElementById(id);

    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />

      {/* Decorative Glow */}

      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Content */}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}

         <span className="inline-block bg-secondary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md mb-10">
			Welcome to Our Preschool & Daycare
		</span>
		  

          {/* Heading */}

          <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Where Little Dreamers
            <span className="block text-secondary">
              Begin Their Journey
            </span>
          </h1>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#enquiry"
              onClick={(e) => scrollToSection(e, "enquiry")}
              className="bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              Book a Visit
              <ArrowRight size={20} />
            </a>

            <a
              href="#programs"
              onClick={(e) => scrollToSection(e, "programs")}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all"
            >
              Explore Programs
            </a>
          </div>

          {/* Trust Bar */}

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-white">

            <div className="flex items-center gap-2">
              <ShieldCheck className="text-secondary" size={24} />
              <span className="font-medium">
                Safe & Secure
              </span>
            </div>

            <div className="hidden md:block h-6 w-px bg-white/30" />

            <div className="flex items-center gap-2">
              <Heart className="text-secondary" size={24} />
              <span className="font-medium">
                Caring Teachers
              </span>
            </div>

            <div className="hidden md:block h-6 w-px bg-white/30" />

            <div className="flex items-center gap-2">
              <BookOpen className="text-secondary" size={24} />
              <span className="font-medium">
                Play-Based Learning
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;