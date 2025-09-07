"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    id: "StayMate PG App",
    tech: "Flutter",
    desc: "Manages PG rooms and rent, built in Flutter & Firebase.",
    link: "https://github.com/stockbuddy07/pg_helper",
    brief: "Helps landlords manage tenants, rent and availability.",
    images: ["/Smart-PG/AdminHomePage.jpg"],
    isTeam: true,
    team: [
      {
        name: "Shubham Sharma",
        avatar: "Team-Shubham/Shubhamprofile.jpg",
        github: "https://github.com/ssharma292003",
        linkedin: "https://www.linkedin.com/in/shubham-sharma-5793122b0/",
        role: "Lead & Backend dev",
      },
      {
        name: "Ayush Gajjar",
        avatar: "Team-Ayush/Ayushprofile.jpg",
        github: "https://github.com/ayush101x",
        linkedin: "https://www.linkedin.com/in/ayushgajjar123",
        role: "Co-Lead & Full Stack",
      },
      {
        name: "Urvashiba Rana",
        avatar: "Team-Urvashi/Urvashiprofile.jpg",
        github: "https://github.com/urvashibarana",
        linkedin: "https://www.linkedin.com/in/urvashibarana04",
        role: "Backend dev",
      },
    ],
  },
  {
    id: "Inventory Tool",
    tech: "React",
    desc: "Track stock and roles in real-time using Firebase.",
    link: "https://github.com/stockbuddy07/Inventory_manager",
    isTeam: true,
    images: ["/images/inventory1.png", "/images/inventory2.png"],
    brief:
      "Allows warehouse tracking, role management, and sync with Firebase in real-time. Designed for performance.",
    team: [
      {
        name: "Shubham Sharma",
        avatar: "Team-Shubham/Shubhamprofile.jpg",
        github: "https://github.com/ssharma292003",
        linkedin: "https://www.linkedin.com/in/shubham-sharma-5793122b0/",
        role: "lead & Backend dev",
      },
      {
        name: "Ayush Gajjar",
        avatar: "Team-Ayush/Ayushprofile.jpg",
        github: "https://github.com/ayush101x",
        linkedin: "https://www.linkedin.com/in/ayushgajjar123",
        role: "Backend dev",
      },
      {
        name: "Urvashiba Rana",
        avatar: "Team-Urvashi/Urvashiprofile.jpg",
        github: "https://github.com/urvashibarana",
        linkedin: "https://www.linkedin.com/in/urvashibarana04",
        role: "Frontend dev",
      },
    ],
  },
  {
    id: "Wonderprint E-Commerce",
    tech: "PHP",
    desc: "WonderPrint – A sleek PHP platform for creating and managing custom products effortlessly",
    link: "https://github.com/urvashibarana/woderprint",
    images: ["/wonderprint/wonderprint1.png"],
    brief:
      "A full-stack e-commerce website with PHP backend, product listings, cart and admin panel.",
  }
  /*{
    id: "Spotify Clone",
    tech: "HTML | CSS | JS",
    desc: "A Spotify  Music Player Clone.",
    link: "https://github.com/ayush101x/Spotify--Clone--Project-2",
    images: ["Spotify-Clone-Proj/Spotify-Clone-Proj.jpg"],
    brief:
      "Frontend Spotify-inspired music UI built using pure HTML, CSS, and JavaScript. Responsive with interactive controls.",
  },*/
];

const sectionFade = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Projects = ({ darkMode }: { darkMode: boolean }) => {
  const [filter, setFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setExpandedId(current => current === id ? null : id);
  };

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="show"
      variants={sectionFade}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {["All", "Team Project", "React", "Flutter", "HTML | CSS | JS", ".net", "PHP"].map(
          (tech) => (
            <motion.div
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-5 py-2 rounded-full text-sm  cursor-pointer transition-all transform hover:scale-110 ${filter === tech
                  ? darkMode
                    ? "bg-white/20 text-white"
                    : "bg-gray-400 text-black"
                  : darkMode
                    ? "bg-white/10 text-white border-white/10 hover:bg-white/20"
                    : "bg-gray-200 text-black border-gray-300 hover:bg-gray-300"
                }`}
              style={{ userSelect: "none" }}
            >
              {tech}
            </motion.div>
          )
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {projects
          .filter((p) =>
            filter === "All"
              ? true
              : filter === "Team Project"
                ? p.isTeam === true
                : p.tech.includes(filter)
          )
          .map((proj) => {
            const isOpen = expandedId === proj.id;
            return (
              <motion.div
                key={proj.id}
                onClick={() => handleCardClick(proj.id)}
                onMouseLeave={() => {
                  if (expandedId === proj.id) setExpandedId(null);
                }}
                className={`flex flex-col rounded-xl p-6 cursor-pointer transition-all duration-300
  ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-200"}
  ${isOpen ? "ring-2 ring-indigo-500" : ""}
  border-2 shadow-lg hover:shadow-xl`}
  
                whileHover={{
                  scale: 1.02,
                  borderColor: "#ffffff",
                  transition: { duration: 0.03 },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                  {proj.id}
                </h3>

                <div
                  className={`flex justify-center items-center gap-2 mb-3 text-sm ${darkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                >
                  <span>{proj.tech}</span>
                  {proj.isTeam && (
                    <span
                      className={`flex items-center gap-1 font-medium ${darkMode ? "text-green-400" : "text-green-700"
                        }`}
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="12" />
                      </svg>
                      Team Project
                    </span>
                  )}
                </div>

                <p
                  className={`text-sm mb-3 px-2 ${darkMode ? "text-gray-300" : "text-black"
                    }`}
                >
                  {proj.desc}
                </p>

                <div className="flex justify-center gap-4 mb-2">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium underline ${darkMode
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-indigo-700 hover:text-indigo-600"
                      }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(proj.id);
                    }}
                    className={`text-sm font-medium underline ${darkMode
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-indigo-700 hover:text-indigo-600"
                      }`}
                  >
                    {isOpen ? "Close" : "Read more"}
                  </button>
                </div>

                <motion.div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[700px] mt-4" : "max-h-0"
                    }`}
                >
                  {proj.images && (
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true }}
                      className="rounded-xl overflow-hidden mb-4"
                    >
                      {proj.images.map((img, i) => (
                       <SwiperSlide key={i}>
  <div className="w-full h-[70vh] flex justify-center items-center bg-gray-100 p-4">
    <img
      src={img}
      className="max-w-full max-h-full object-contain rounded-xl"
      alt="project image"
    />
  </div>
</SwiperSlide>

                      ))}
                    </Swiper>
                  )}

                  {proj.team && (
                    <div className="mt-4">
                      <h4
                        className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-black"
                          }`}
                      >
                        Team Members
                      </h4>
                      <div className="w-full overflow-x-auto py-2">
                        <div className="flex space-x-4 w-max scrolling-x hide-scrollbar md:animate-none">
                          {proj.team.map((member, i) => (
                            <motion.div
                              key={i}
                              className={`p-4 rounded-xl text-center w-36 shadow flex-shrink-0 ${darkMode
                                  ? "bg-gray-700 text-white"
                                  : "bg-white text-black"
                                }`}
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                              />
                              <p
                                className={`text-sm font-medium ${darkMode ? "text-white" : "text-black"
                                  }`}
                              >
                                {member.name}
                              </p>
                              <p
                                className={`text-xs mb-2 ${darkMode ? "text-gray-400" : "text-black"
                                  }`}
                              >
                                {member.role}
                              </p>

                              <div className="flex justify-center gap-2 mt-1">
                                <a
                                  href={member.github}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={`hover:text-white ${darkMode
                                      ? "text-gray-400"
                                      : "text-gray-600 hover:text-black"
                                    }`}
                                >
                                  <FaGithub />
                                </a>
                                <a
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={`hover:text-white ${darkMode
                                      ? "text-gray-400"
                                      : "text-gray-600 hover:text-black"
                                    }`}
                                >
                                  <FaLinkedin />
                                </a>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
      </div>
    </motion.section>
  );
};

export default Projects;
