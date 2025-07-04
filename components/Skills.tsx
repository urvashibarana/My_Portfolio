"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFlutter,
  SiPhp,
  SiPython,
  SiMysql,
  SiFigma,
  SiFramer,
  SiOpenai
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Skills = ({ darkMode }: { darkMode: boolean }) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    { 
      name: "HTML", 
      icon: <SiHtml5 className="text-orange-600" />, 
      years: "5 years",
      description: "Built 50+ semantic HTML structures with SEO optimization and accessibility compliance."
    },
    { 
      name: "CSS", 
      icon: <SiCss3 className="text-blue-600" />, 
      years: "5 years",
      description: "Created complex layouts using Flexbox, Grid, and CSS animations with perfect responsiveness."
    },
    { 
      name: "JS", 
      icon: <SiJavascript className="text-yellow-600" />, 
      years: "5 years",
      description: "Developed applications using modern ES6+ features and design patterns."
    },
    { 
      name: "React", 
      icon: <SiReact className="text-blue-500" />, 
      years: "1 years",
      description: "Built 3+ production apps using React hooks, context API, and performance optimization."
    },
    { 
      name: "Node", 
      icon: <SiNodedotjs className="text-green-600" />, 
      years: "1 years",
      description: "Developed REST APIs and microservices handling daily requests."
    },
    { 
      name: "MongoDB", 
      icon: <SiMongodb className="text-green-500" />, 
      years: "1 years",
      description: "Designed database schemas for 2+ applications with optimized queries."
    },
    { 
      name: "Flutter", 
      icon: <SiFlutter className="text-blue-400" />, 
      years: "3 years",
      description: "Created 4 cross-platform mobile apps and 2 published on stores."
    },
    { 
      name: "PHP", 
      icon: <SiPhp className="text-purple-600" />, 
      years: "4 years",
      description: "Developed WordPress plugins and Laravel applications for enterprise clients."
    },
    { 
      name: "Python", 
      icon: <SiPython className="text-blue-500" />, 
      years: "4 years",
      description: "Built web scrapers, data pipelines, and automation scripts saving 20+ hours monthly."
    },
    { 
      name: "Java", 
      icon: <FaJava className="text-red-600" />,
      years: "3 years",
      description: "Developed Android applications and backend services."
    },
    { 
      name: "MySQL", 
      icon: <SiMysql className="text-blue-700" />, 
      years: "4 years",
      description: "Optimized complex queries reducing response times by 70% in 2 applications."
    },
    { 
      name: "Figma", 
      icon: <SiFigma className="text-pink-600" />, 
      years: "4 years",
      description: "Designed 5+ UI/UX prototypes and design systems for web and mobile apps."
    },
    { 
      name: "Framer", 
      icon: <SiFramer className="text-purple-500" />, 
      years: "2 years",
      description: "Created interactive prototypes and no-code websites with advanced animations."
    },
    { 
      name: "ChatGPT", 
      icon: <SiOpenai className="text-green-500" />, 
      years: "2 years",
      description: "Leveraged AI for code generation, content creation, and problem solving."
    },
  ];

  const handleCardClick = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="skills" className="py-5 px-4 sm:px-5 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={`text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 `}>
          My Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="perspective-1000 h-40 sm:h-48 relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                if (flippedIndex === index) setFlippedIndex(null);
              }}
            >
              <motion.div
                className="rounded-xl relative w-full h-full preserve-3d"
                animate={{ 
                  rotateY: flippedIndex === index ? 180 : 0,
                  zIndex: hoveredIndex === index ? 20 : 1,
                  scale: hoveredIndex === index ? 1.1 : 1
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => handleCardClick(index)}
                style={{
                  transformOrigin: "center",
                  position: "relative"
                }}
                whileHover={{
                  boxShadow: darkMode ? "0 0 50px rgba(255, 255, 255, 0.3)" : "0 0 50px rgba(59, 130, 246, 0.5)"
                }}
              >
                {/* Front of Card */}
                <motion.div
                  className={`absolute backface-hidden w-full h-full p-3 sm:p-4 rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer
                    ${darkMode ? " border-white" : " border-gray-500"} border shadow-sm`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-4xl sm:text-5xl">
                    {skill.icon}
                  </div>
                  <span className={`text-base sm:text-lg font-medium`}>
                    {skill.name}
                  </span>
                  <span className={`text-xs sm:text-sm `}>
                    {skill.years}
                  </span>
                </motion.div>

                {/* Back of Card */}
                <motion.div
                  className={`absolute backface-hidden w-full h-full p-3 sm:p-4 rounded-xl flex items-center justify-center cursor-pointer
                    ${darkMode ? "bg-gray-900 border-gray-700" : "bg-blue-50 border-blue-100"} border shadow-sm rotate-y-180`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <p className={`text-xs sm:text-sm text-center px-1 sm:px-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {skill.description}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;