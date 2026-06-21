import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import SchoolHoursSection from "@/components/SchoolHoursSection";
import ContactSection from "@/components/ContactSection";
import SocialFloat from "@/components/SocialFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <GallerySection />
      <ReviewsSection />
      <SchoolHoursSection />
      <ContactSection />
      <Footer />
      <SocialFloat />
    </>
  );
};

export default Index;
