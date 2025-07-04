"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const About = ({ darkMode = true }: { darkMode?: boolean }) => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto text-center"
      initial="hidden"
      whileInView="show"
      variants={sectionFade}
      viewport={{ once: true }}
    >
      {/* Profile Image */}
      <motion.div
        className="mb-10 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="relative rounded-full p-1"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.7)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* <img
            src="/Urvashiba/Urvashibaprofile.jpeg"
            alt="Profile"
            className="w-60 h-60 sm:w-72 sm:h-72 rounded-full border-4 border-indigo-500 object-cover"
          /> */}
  <img
  src="/Urvashiba/Urvashibaprofile.jpeg"
  alt="Profile"
  className="w-60 h-60 sm:w-72 sm:h-72 rounded-full border-4 border-indigo-500 object-cover object-top"
/>


          <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-indigo-300 transition-all duration-300 pointer-events-none"></div>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <div className="flex justify-center space-x-20 mb-3">
        <a href="https://github.com/urvashibarana" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-indigo-600 transition text-indigo-500" />
        </a>
        <a href="https://www.linkedin.com/in/urvashibarana04" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-indigo-600 transition text-indigo-500" />
        </a>
        <a href="https://www.instagram.com/ranaba_04" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-indigo-600 transition text-indigo-500" />
        </a>
      </div>

      {/* About Card */}
      <div
        className={`flex flex-col rounded-xl p-6 cursor-pointer transition-all duration-300
          ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-200"}
          border-2 shadow-lg hover:shadow-xl`}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-4 text-sm md:text-base">
          I'm <strong>Urvashiba Rana</strong>, a full-stack developer passionate about the{" "}
          <span className="text-accent font-semibold">MERN stack</span> and{" "}
          <span className="text-accent font-semibold">Flutter</span>. I build scalable and intuitive software, currently pursuing MCA at LJ University.
        </p>
        <p className="text-sm italic opacity-80">
          "Code with purpose. Build with passion."
        </p>
      </div>
    </motion.section>
  );
};

export default About;
