"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "react-lottie";
import { Button } from "@/components/ui/button";
import animationData from "@/public/lotties/coding.json";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
      <motion.div initial="hidden" animate="show" variants={sectionFade}>
        <div className="mb-6">
          <Lottie options={{ loop: true, autoplay: true, animationData }} height={300} width={300} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hey, I'm Urvashiba Rana 🚀</h1>
        <p className="text-xl mb-6">
          I'm a{" "}
          <span className="font-semibold text-indigo-500">
            <Typewriter
              words={["Software Developer", "MERN Stack Dev", "Application Dev"]}
              loop
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
        <a href="#projects">
          <Button className="bg-indigo-500 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-600">
            View Projects
          </Button>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
