// components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ravi Sharma",
    text: "Urvashiba Rana is a highly dedicated developer. Her ability to manage complex problems and provide clean, scalable solutions is outstanding.",
  },
  {
    name: "Neha Verma",
    text: "She always exceeds expectations and communicates ideas clearly. It's a pleasure working with her!",
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const glassCard = "bg-white/30 dark:bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg";

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      className="py-20 px-6 max-w-3xl mx-auto"
      initial="hidden"
      whileInView="show"
      variants={sectionFade}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
      <div className="space-y-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className={`${glassCard} relative`}>
            <FaQuoteLeft className="absolute top-4 left-4 text-indigo-500" />
            <p className="italic text-sm mb-3 pl-8">{t.text}</p>
            <p className="text-sm text-right font-semibold">— {t.name}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
