"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

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

const glassCard =
  "bg-white/30 dark:bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg";

const Contact = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    setLastUpdated(
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
  }, []);

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 max-w-4xl mx-auto"
      initial="hidden"
      whileInView="show"
      variants={sectionFade}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Resume Card */}
        <motion.div
          className={`w-full md:w-1/2 ${glassCard} flex flex-col relative`}
          whileHover={{
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.7)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-indigo-400 transition-all duration-300 pointer-events-none"></div>

          <div className="flex flex-col items-center mb-6">
            <motion.div
              className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-400 mb-2 group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(99, 102, 241, 0.8)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/Urvashiba/Urvashibaprofile.jpeg"
                alt="Profile Picture"
                width={128}
                height={128}
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-indigo-300 transition-all duration-300 pointer-events-none"></div>
            </motion.div>

            <h2 className="text-3xl font-bold text-center">My Resume</h2>
            <p className="text-center mt-1">Full Stack Developer</p>
          </div>

          <div className="flex-grow flex flex-col justify-center">
            <p className="text-center mb-5">
              Download my resume to learn more about my professional journey and
              skills.
            </p>
            <div className="flex flex-col space-y-3">
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white transition-all hover:scale-[1.02]">
                <a
                  href="/Urvashiba/resume-urvashibarana.pdf"
                  download="UrvashibaRana_Resume.pdf"
                  className="w-full"
                >
                  Download PDF
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
            {lastUpdated && <p>Last updated: {lastUpdated}</p>}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className={`w-full md:w-1/2 ${glassCard} relative`}
          whileHover={{
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.7)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-indigo-400 transition-all duration-300 pointer-events-none"></div>

          <h2 className="text-3xl font-bold text-center mb-8">Let's Connect</h2>

          <form
            className="space-y-4"
            method="POST"
            action="https://formspree.io/f/mjkrjpdj"
          >
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-white text-black"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-white text-black"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              required
              className="bg-white text-black"
            />
            <Button
              type="submit"
              className="bg-indigo-500 text-white w-full hover:bg-indigo-600 hover:scale-[1.02] transition-transform"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
