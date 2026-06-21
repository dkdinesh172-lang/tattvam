import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Lightbulb, Heart, Palette } from "lucide-react";
import principalImg from "@/assets/Principal.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden doodle-dots">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-body font-semibold text-sm text-secondary uppercase tracking-wider">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Welcome to <span className="text-gradient">Tattvam Preschool</span>
          </h2>
        </motion.div>

        {/* Welcome message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card rounded-3xl p-6 sm:p-10 shadow-lg border border-border max-w-4xl mx-auto mb-14"
        >
          <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
            We are delighted to welcome you and your child to Tattvam. Our preschool is dedicated to providing a warm, nurturing, and stimulating environment where children can explore, learn, and grow.
          </p>
          <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
            At Tattvam, we emphasize a play-based, child-centered approach that fosters both intellectual and emotional development. Our dedicated teachers and staff work closely with families to create a supportive learning community that nurtures each child's unique potential.
          </p>
          <p className="font-body text-muted-foreground/70 text-sm mt-6 mb-3 italic">
            Warm regards,
          </p>
          <div className="flex items-center gap-4">
            <img
              src={principalImg}
              alt="Nayana Reddy, Principal"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-2 border-primary shadow-md"
            />
            <div>
              <p className="font-display text-foreground font-bold text-sm sm:text-base">Nayana Reddy</p>
              <p className="font-body text-muted-foreground text-xs sm:text-sm">Principal, Tattvam Preschool</p>
            </div>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-6 sm:p-8 shadow-lg border border-border"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">Our Vision</h3>
            <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
              Our vision is to provide a safe learning environment and high quality education that builds a foundation for life long learning. We aim to cultivate curiosity, creativity, and confidence in every child, preparing them for future academic and social success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-3xl p-6 sm:p-8 shadow-lg border border-border"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">Our Mission</h3>
            <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed mb-3">
              Our mission is to provide a comprehensive early childhood education program that meets the individual needs and interests of each child.
            </p>
            <ul className="space-y-2">
              {[
                { icon: Lightbulb, text: "Encourage independent thinking and problem-solving skills." },
                { icon: Heart, text: "Support the social and emotional growth through meaningful interactions." },
                { icon: Palette, text: "Foster creativity and imagination through hands-on learning." },
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start font-body text-muted-foreground text-sm">
                  <item.icon className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;