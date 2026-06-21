import { Heart, MapPin, Phone, Clock, Mail } from "lucide-react";
import logo from "@/assets/tattvam-logo-new2.png";

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
  }
};

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-10 sm:py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
        <div className="col-span-2 lg:col-span-1">
          <img src={logo} alt="Tattvam Logo" className="h-14 sm:h-16 w-auto mb-3 brightness-0 invert" />
          <p className="text-primary-foreground/70 font-body text-sm">
            Nurturing young minds with love, care, and joyful learning in Sarjapura, Bengaluru.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-base sm:text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
            <li><a href="#home" onClick={(e) => scrollToSection(e, "home")} className="hover:text-secondary transition-colors">Home</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-secondary transition-colors">About Us</a></li>
            <li><a href="#programs" onClick={(e) => scrollToSection(e, "programs")} className="hover:text-secondary transition-colors">Programs</a></li>
            <li><a href="#gallery" onClick={(e) => scrollToSection(e, "gallery")} className="hover:text-secondary transition-colors">Gallery</a></li>
            <li><a href="#reviews" onClick={(e) => scrollToSection(e, "reviews")} className="hover:text-secondary transition-colors">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-base sm:text-lg mb-3">Contact</h4>
          <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
            <li className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
              Ittina Haveli Layout, Sompura Gate, Sarjapura Hobli, Bengaluru-562125
            </li>
            <li className="flex gap-2 items-center">
              <Phone className="w-4 h-4 shrink-0 text-secondary" />
              <div>
                <a href="tel:+917204442861" className="hover:text-secondary transition-colors block">+91 7204442861</a>
                <a href="tel:+919353487529" className="hover:text-secondary transition-colors block">+91 9353487529</a>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="w-4 h-4 shrink-0 text-secondary" />
              <a href="mailto:info@tattvampreschool.com" className="hover:text-secondary transition-colors">info@tattvampreschool.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-base sm:text-lg mb-3">Hours</h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
            <li className="flex gap-2 items-center">
              <Clock className="w-4 h-4 shrink-0 text-secondary" />
              Mon – Fri: 9 AM – 5:00 PM
            </li>
            <li className="pl-6">Sat – Sun: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="font-body text-xs sm:text-sm text-primary-foreground/50">
          © 2026 Tattvam Preschool & Daycare, Bengaluru. Made with <Heart className="w-3 h-3 inline fill-secondary text-secondary" /> for little learners.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
