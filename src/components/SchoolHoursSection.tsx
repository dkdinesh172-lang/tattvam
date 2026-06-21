import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Sun, ArrowDown, ArrowUp, ShieldCheck } from "lucide-react";

const items = [
  { icon: Clock, title: "Operating Hours", desc: "Monday – Friday: 9:00 AM – 5:00 PM", color: "bg-accent" },
  { icon: Sun, title: "Morning Drop-Off", desc: "9:00 – 9:20 AM (Late arrivals require prior notice)", color: "bg-light-peach" },
  { icon: ArrowDown, title: "Afternoon Pick-Up", desc: "Prep-0 & Prep-1: 12:30 – 12:45 PM\nPrep-2 & Prep-3: 1:30 – 1:45 PM", color: "bg-baby-blue" },
  { icon: ArrowUp, title: "Extended Day Care", desc: "Available 1:00 – 6:00 PM (Additional fees apply)", color: "bg-lavender" },
  { icon: ShieldCheck, title: "Pick-Up Authorization", desc: "Only listed guardians may pick up a child (Guardian card required)", color: "bg-accent" },
];

const SchoolHoursSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-muted/30 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-body font-semibold text-sm text-secondary uppercase tracking-wider">School Hours</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Drop-Off & <span className="text-gradient">Pick-Up Policy</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-0">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start relative"
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shrink-0 shadow-md z-10`}>
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                {i < items.length - 1 && <div className="w-0.5 h-full bg-border min-h-[40px]" />}
              </div>
              <div className="pb-8">
                <h3 className="font-display font-bold text-lg mb-1">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm whitespace-pre-line">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolHoursSection;
