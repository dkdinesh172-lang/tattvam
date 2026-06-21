import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import founderImg from "@/assets/team-founder.jpg";
import cofounderImg from "@/assets/team-cofounder.jpg";
import directorImg from "@/assets/team-director.jpg";

const team = [
  {
    name: "Priya Sharma",
    role: "Founder & Director",
    image: founderImg,
    bio: "With over 15 years of experience in early childhood education, Priya founded TATTVAM with a vision to create a nurturing space where every child can discover their unique potential through play-based learning.",
  },
  {
    name: "Rajesh Kumar",
    role: "Co-Founder",
    image: cofounderImg,
    bio: "An education enthusiast and operations expert, Rajesh brings strategic vision and business acumen to TATTVAM, ensuring the school maintains the highest standards of safety, infrastructure, and learning resources.",
  },
  {
    name: "Anita Desai",
    role: "Academic Director",
    image: directorImg,
    bio: "A trained Montessori educator with a Master's in Child Psychology, Anita designs TATTVAM's curriculum to blend traditional values with modern pedagogy, fostering holistic development in every child.",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-body font-semibold text-sm text-secondary uppercase tracking-wider">Our Team</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Team <span className="text-gradient">TATTVAM</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Meet the passionate people behind TATTVAM who are dedicated to shaping young minds with love and care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-1">{member.name}</h3>
                <span className="inline-block gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {member.role}
                </span>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
