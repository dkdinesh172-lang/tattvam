import { useState, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/tattvam-logo-new2.png";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About Us", href: "about" },
  { label: "Programs", href: "programs" },
  { label: "Gallery", href: "gallery" },
  { label: "Reviews", href: "reviews" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    }, 150);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="flex items-center gap-2">
          <img src={logo} alt="Tattvam Logo" className="h-12 md:h-14 w-auto object-contain" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-body font-semibold text-sm text-foreground hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            onClick={(e) => scrollToSection(e, "enquiry")}
            className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Enquire Now
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a href="tel:+917204442861" className="p-2 text-secondary">
            <Phone className="w-5 h-5" />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={`#${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-body font-semibold text-foreground hover:text-secondary py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#enquiry"
                onClick={(e) => scrollToSection(e, "enquiry")}
                className="bg-secondary text-secondary-foreground px-5 py-3 rounded-full font-semibold text-center hover:opacity-90 transition-opacity"
              >
                Enquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
