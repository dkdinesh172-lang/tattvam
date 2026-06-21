import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import abcBlocksImg from "@/assets/ABC blocks.png";

const ageGroups = ["Select age group", "Prep-0 (2–3 yrs)", "Prep-1 (3–4 yrs)", "Prep-2 (4–5 yrs)", "Prep-3 (5–6 yrs)"];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", phone: "", childName: "", age: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Parent's name is required.";
    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) e.phone = "Enter a valid 10-digit phone number.";
    if (!formData.childName.trim()) e.childName = "Child's name is required.";
    if (!formData.age || formData.age === "Select age group") e.age = "Please select an age group.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `Hello, I would like to learn more about the enrollment process.

Parent's Name: ${formData.name.trim()}
Phone Number: ${formData.phone.trim()}
Child's Name: ${formData.childName.trim()}
Child's Age: ${formData.age}
Message: ${formData.message.trim() || "N/A"}`;

    window.open(`https://wa.me/917204442861?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setFormData({ name: "", phone: "", childName: "", age: "", message: "" });
    setErrors({});
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border ${errors[field] ? "border-destructive" : "border-input"} bg-background font-body text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all`;

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      <img
        src={abcBlocksImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-40 sm:w-56 lg:w-72 opacity-90 z-0"
      />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="font-body font-semibold text-sm text-secondary uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Visit <span className="text-gradient">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Address</h3>
                <p className="font-body text-muted-foreground text-sm">
                  Ittina Haveli Layout, Sompura Gate, Sarjapura Hobli, Anekal Taluk, Bengaluru-562125
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-light-peach rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Phone</h3>
                <a href="tel:+917204442861" className="font-body text-primary font-semibold hover:underline block">+91 7204442861</a>
                <a href="tel:+919353487529" className="font-body text-primary font-semibold hover:underline block">+91 9353487529</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-baby-blue rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Email</h3>
                <a href="mailto:info@tattvampreschool.com" className="font-body text-primary font-semibold hover:underline">info@tattvampreschool.com</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-lavender rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Timings</h3>
                <p className="font-body text-muted-foreground text-sm">Monday – Friday: 9:00 AM – 5:00 PM</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-border mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2!2d77.7670944!3d12.8600995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7367762875ff%3A0xf6cfa5b65124d9e!2sTATTVAM%20Pre%20school%20%26%20Day%20care%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="TATTVAM Location"
              />
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            id="enquiry"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border"
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-6">Send an Enquiry</h3>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="font-body font-semibold text-sm mb-1.5 block">Parent's Name <span className="text-destructive">*</span></label>
                <input type="text" maxLength={100} value={formData.name} onChange={(e) => { setFormData(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: "" })); }} className={inputClass("name")} placeholder="Enter your name" />
                {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
              </div>
              <div>
                <label className="font-body font-semibold text-sm mb-1.5 block">Phone Number <span className="text-destructive">*</span></label>
                <input type="tel" maxLength={10} value={formData.phone} onChange={(e) => { setFormData(p => ({ ...p, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })); setErrors(p => ({ ...p, phone: "" })); }} className={inputClass("phone")} placeholder="Enter 10-digit phone number" />
                {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
              </div>
              <div>
                <label className="font-body font-semibold text-sm mb-1.5 block">Child's Name <span className="text-destructive">*</span></label>
                <input type="text" maxLength={100} value={formData.childName} onChange={(e) => { setFormData(p => ({ ...p, childName: e.target.value })); setErrors(p => ({ ...p, childName: "" })); }} className={inputClass("childName")} placeholder="Enter child's name" />
                {errors.childName && <p className="text-destructive text-xs mt-1 font-body">{errors.childName}</p>}
              </div>
              <div>
                <label className="font-body font-semibold text-sm mb-1.5 block">Child's Age Group <span className="text-destructive">*</span></label>
                <select value={formData.age} onChange={(e) => { setFormData(p => ({ ...p, age: e.target.value })); setErrors(p => ({ ...p, age: "" })); }} className={inputClass("age")}>
                  {ageGroups.map(g => <option key={g} value={g === "Select age group" ? "" : g}>{g}</option>)}
                </select>
                {errors.age && <p className="text-destructive text-xs mt-1 font-body">{errors.age}</p>}
              </div>
              <div>
                <label className="font-body font-semibold text-sm mb-1.5 block">Message</label>
                <textarea rows={3} maxLength={500} value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-input bg-background font-body text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Any questions or requirements..." />
              </div>
              <button type="submit" className="w-full bg-[#25D366] text-white py-3.5 rounded-xl font-display font-semibold text-base sm:text-lg hover:bg-[#20bd5a] hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Submit via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;