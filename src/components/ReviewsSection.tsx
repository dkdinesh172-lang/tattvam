import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, ExternalLink } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/TATTVAM+Pre+school+%26+Day+care,+Bengaluru/@12.8600995,77.7670944,17z/data=!4m8!3m7!1s0x3bae7367762875ff:0xf6cfa5b65124d9e!8m2!3d12.8600995!4d77.7670944!9m1!1b1!16s%2Fg%2F11w9lhph1_";

const reviews = [
  {
    name: "Chaithra K",
    text: "Tattvam Preschool & Day care is one of the finest in sarjapura, sompura gate. School is spacious and well designed to engage the little once. The activities and well structured curriculum kindle mind of little once. Teachers are experienced and well trained to make the learning more fun.",
    rating: 5,
    time: "4 months ago",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLlXl5Wgf8IbxkIRpRFE69IlW1PdmJN0hHBomWTosnDCfJOQg=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Sujay Shukla",
    text: "I'm incredibly happy with the positive changes I've seen in my child since joining this preschool and daycare. The environment is nurturing, engaging, and perfectly balanced between learning and fun. Every day, my child comes home excited to share new things they've learned — from songs and stories to counting, colors, and even little acts of kindness.",
    rating: 5,
    time: "9 months ago",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVAugRFdcOJxgMhJ1vZ_sG9kIjbUnlZc9oJk-VRgUKYD2OTWD9VDw=w36-h36-p-rp-mo-ba3-br100",
  },
  {
    name: "Ahalya RS",
    text: "Positive Academic Environment and Strong Extracurricular Programs with Engaged and Caring Teachers. My child is having an incredible experience at this school. The teachers are passionate, dedicated, and go above and beyond to ensure that each student succeeds. The curriculum they follow is really impressive. Nayana Mam and her dedication, caring for the children upbringing is extraordinary.",
    rating: 5,
    time: "a year ago",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJwpaGsCbDAiXmZALcyjqzlJhaE7NWTtEzOv6L_0_LmB5MnFg=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Poornisha Devi",
    text: "As a parent we are very satisfied with the learning methods, all festival celebrations, care and teaching to the kids. And most important thing is my son likes a lot to go Tattvam preschool because he went to another school previously which he didn't like and discontinued within 2 months. But in Tattvam preschool he successfully stayed & completed his prep1 and now doing his prep2.",
    rating: 5,
    time: "8 months ago",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXNb-uGRJfmM1toJShl6mo6uwul4XPHBjMOTb4NNjns58Pk4Hw=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Archana Dubey",
    text: "Best school with reasonable fee structure that gives your child a healthy environment with spacious class room with indoor n outdoor play area. Teacher n caretaker r too good. Especially Naina mam. Thankyou Tattvam!",
    rating: 5,
    time: "6 months ago",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJE_SR2MyT9bjn967CoGeGv8_s2wp6fgcyqVoAargcTT4_ppw=w36-h36-p-rp-mo-br100",
  },
];

const GoogleIcon = () => (
  <svg className="w-5 h-5 opacity-60" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-muted/30 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="font-body font-semibold text-sm text-secondary uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            What Parents <span className="text-gradient">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 fill-accent text-accent" />
            ))}
          </div>
          <p className="font-body text-muted-foreground text-base sm:text-lg mb-1">
            <span className="font-bold text-foreground">5.0</span> Rating on Google
          </p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-primary hover:underline mt-1"
          >
            <GoogleIcon /> View all reviews on Google Maps <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow border border-border relative flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-3">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {r.avatar ? (
                    <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                      {r.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <span className="font-display font-semibold text-sm block">{r.name}</span>
                    <span className="text-xs text-muted-foreground font-body">{r.time}</span>
                  </div>
                </div>
                <GoogleIcon />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-display font-semibold text-sm hover:bg-primary/5 transition-all"
          >
            Leave a Review on Google <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
