import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, BookOpen, Beaker, Puzzle, Users, Palette, Brain, Leaf } from "lucide-react";
import animateImg from "@/assets/animate.jpg";
import kidsBlocksImg from "@/assets/kids and blocks.png";

import daycareImg from "@/assets/Daycare.jpg";
import transportationImg from "@/assets/Transportation.jpg";
import playAreasImg from "@/assets/PlayAreas.jpg";
import classroomsImg from "@/assets/Classrooms.jpg";

const facilities = [
  {
    title: "Daycare",
    emoji: "🛏️",
    tagline: "Comfort & Care",
	desc: "Our Daycare provides a safe, caring, and comfortable environment for children after school hours. We focus on supporting each child’s emotional well-being and helping them relax in a homely setting.",
    colorFront: "bg-red-50 border-red-200",
    colorIcon: "bg-red-400",
    colorAccent: "text-red-500",
	image: daycareImg,
  },
  {
    title: "Transportation",
    emoji: "🚌",
    tagline: "Safe & Reliable",
	desc:"We provide safe and reliable transportation for children, ensuring a comfortable journey to and from school. Our vehicles are well-maintained and driven by experienced drivers, with trained attendants to care for children during transit.",
    colorFront: "bg-yellow-50 border-yellow-200",
    colorIcon: "bg-yellow-400",
    colorAccent: "text-yellow-600",
	image: transportationImg,
  },
  {
    title: "Play Areas",
    emoji: "🤸",
    tagline: "Explore & Discover",
	desc:"We offer well-designed outdoor and indoor play areas that provide children with a safe and enjoyable space to play and explore. Both spaces are maintained with a strong focus on safety, ensuring children can learn and have fun freely.",
    colorFront: "bg-green-50 border-green-200",
    colorIcon: "bg-green-400",
    colorAccent: "text-green-600",
	image: playAreasImg,
  },
  {
    title: "Classrooms",
    emoji: "🎨",
    tagline: "Learn & Grow",
	desc:"Our classrooms are thoughtfully designed to create a warm, safe, and engaging learning environment for children. Bright, spacious, and well-ventilated, each classroom is equipped with age-appropriate Montessori materials that support early learning and exploration.",
    colorFront: "bg-sky-50 border-sky-200",
    colorIcon: "bg-sky-400",
    colorAccent: "text-sky-600",
	image: classroomsImg,
  },
];

const programs = [
  {
    title: "Prep-0 (Playgroup)",
    age: "2 – 3 years",
    color: "bg-accent",
    icon: Puzzle,
    daily: [
      "Children begin their learning journey through fun, engaging, and play-based activities.",
      "The focus is on developing social skills, building confidence, and encouraging curiosity.",
      "Children learn to interact with others, express themselves, and follow simple routines in a safe and nurturing environment.",
    ],
  },
  {
    title: "Prep-1 (Nursery)",
    age: "3 – 4 years",
    color: "bg-light-peach",
    icon: BookOpen,
    daily: [
      "The focus is on developing communication skills, early literacy and numeracy, and social confidence.",
      "Children are introduced to letters, sounds, numbers, and simple concepts through fun, activity-based learning.",
      "They engage in storytelling, creative arts, music, and structured play that encourages thinking and expression.",
    ],
  },
  {
    title: "Prep-2 (LKG)",
    age: "4 – 5 years",
    color: "bg-baby-blue",
    icon: Beaker,
    daily: [
      "The focus is on strengthening early literacy and numeracy skills.Children learn to recognize and write letters, understand phonics, and form simple words.",
      "They are introduced to numbers, counting, and basic mathematical concepts.Prep-2 also helps children improve concentration, follow instructions, and build confidence, preparing them for more advanced learning in the next stage.",
    ],
  },
  {
    title: "Prep-3 (UKG)",
    age: "5 – 6 years",
    color: "bg-lavender",
    icon: GraduationCap,
    daily: [
      "Children prepare for a smooth transition to primary school through more structured and goal-oriented learning.",
      "He focus is on advancing literacy and numeracy skills, including reading simple sentences, writing words and short sentences, and understanding basic mathematics.Children develop better comprehension, problem-solving abilities, and communication skills through interactive activities, storytelling, and hands-on learning.",
    ],
  },
];

const philosophy = [
  { icon: Leaf, title: "Montessori & Creative", desc: "Independence and discovery through guided exploration." },
  { icon: Puzzle, title: "Play-Based Learning", desc: "Active engagement, joyful learning, and critical thinking." },
  { icon: Users, title: "Social-Emotional", desc: "Empathy, cooperation, self-regulation in inclusive settings." },
  { icon: Palette, title: "Hands-On Exploration", desc: "Sensory-rich arts, music, science, and nature activities." },
  { icon: BookOpen, title: "Early Literacy & Numeracy", desc: "Foundation skills for reading, writing, and math." },
  { icon: Brain, title: "Family Partnership", desc: "Parents as partners in every child's learning journey." },

];

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [flipped, setFlipped] = useState<number | null>(null);
  const [flippedFacility, setFlippedFacility] = useState<number | null>(null);

  return (
    <section id="programs" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      <img
        src={animateImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-4 left-4 sm:top-6 sm:left-6 w-48 sm:w-64 lg:w-80 opacity-90 z-0"
      />
	    <img
    src={kidsBlocksImg}
    alt=""
    aria-hidden="true"
    className="pointer-events-none select-none absolute top-4 right-4 sm:top-6 sm:right-6 w-48 sm:w-64 lg:w-80 opacity-90 z-0"
  />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-body font-semibold text-sm text-secondary uppercase tracking-wider">Our Programs</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Class Categories & <span className="text-gradient">Age Groups</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Tap a card to see the daily structure and learning outcomes.
          </p>
        </motion.div>

        {/* Program flip cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flip-card ${flipped === i ? "flipped" : ""}`}
              style={{ minHeight: 400 }}
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className={`flip-card-front ${p.color} p-6 flex flex-col items-center justify-center text-center shadow-lg border border-border`}>
                  <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center mb-4 shadow">
                    <p.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-1">{p.title}</h3>
                  <span className="font-body text-sm font-semibold text-secondary mb-3">{p.age}</span>
                  <p className="font-body text-foreground/80 text-sm">{p.desc}</p>
                  <span className="mt-4 text-xs font-body text-muted-foreground">Tap to see daily structure →</span>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card p-5 flex flex-col shadow-lg border border-border">
                  <h4 className="font-display text-lg font-bold mb-1 text-primary">{p.title}</h4>
                  <span className="font-body text-xs font-semibold text-secondary mb-3">Daily Structure</span>
                  <ul className="space-y-2 flex-1">
                    {p.daily.map((d, j) => (
                      <li key={j} className="flex gap-2 items-start text-sm font-body text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <span className="text-xs font-body text-muted-foreground mt-3">← Tap to flip back</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Educational Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Our Educational <span className="text-gradient">Philosophy</span>
          </h3>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Children learn best through play, exploration, and guided discovery.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {philosophy.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
              className="bg-card rounded-2xl p-5 shadow-md hover:shadow-lg border border-border group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-3">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-display text-base font-bold mb-1">{p.title}</h4>
              <p className="font-body text-muted-foreground text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20 mb-10"
        >
          <span className="font-body font-semibold text-sm text-secondary uppercase tracking-wider">Our Facilities</span>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-3 mb-2">
            Spaces Built For <span className="text-gradient">Little Explorers</span>
          </h3>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Tap a card to discover what makes each space safe, comfortable, and fun.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
              className={`flip-card ${flippedFacility === i ? "flipped" : ""}`}
              style={{ minHeight: 380 }}
              onClick={() => setFlippedFacility(flippedFacility === i ? null : i)}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className={`flip-card-front ${f.colorFront} p-6 flex flex-col items-center justify-center text-center shadow-lg border`}>
                  <div className={`w-16 h-16 rounded-full ${f.colorIcon} flex items-center justify-center mb-4 shadow text-3xl`}>
                    <span role="img" aria-label={f.title}>{f.emoji}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-1">{f.title}</h3>
                  <span className={`font-body text-sm font-semibold mb-3 ${f.colorAccent}`}>{f.tagline}</span>
				  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
					{f.desc}
				  </p>
                  <span className="mt-4 text-xs font-body text-muted-foreground">Tap to learn more →</span>
                </div>
                {/* Back */}
				<div className={`flip-card-back bg-card p-4 shadow-lg border ${f.colorFront}`}>

					<h4 className={`font-display text-lg font-bold mb-3 text-center ${f.colorAccent}`}>
						{f.title}
					</h4>
					
					<img
						src={f.image}
						alt={f.title}
						className="w-full h-60 object-cover rounded-xl"
					/>

				</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;