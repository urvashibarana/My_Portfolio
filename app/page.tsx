"use client"; // Indicates this is a Client Component in Next.js

// Import necessary React hooks and components
import React, { useEffect, useState } from "react";
// Import icons from Lucide React
import {
  Moon,
  SunMedium,
  Menu,
  X,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

// Import custom UI components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Animation libraries
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "react-lottie";
// Lottie animation data
import animationData from "@/public/lotties/coding.json";
// Social media icons
import { FaGithub, FaLinkedin, FaInstagram, FaQuoteLeft } from "react-icons/fa";
// Swiper for carousel/slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Certificate from "@/components/certificate";

export default function Portfolio() {
  // State management
  const [darkMode, setDarkMode] = useState(false); // Toggle dark/light mode
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar state
  const [filter, setFilter] = useState("All"); // Project filter state
  const [expandedId, setExpandedId] = useState(null); // Expanded project card
  const [loading, setLoading] = useState(true); // Loading state

  // Effect for loading animation timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Check for saved theme preference on initial load
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  // Prevent scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [sidebarOpen]);

  // CSS class for glassmorphism effect cards
  const glassCard =
    "bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 p-6 transition duration-300 hover:scale-[1.02] hover:shadow-xl";

  // Animation variants for sections
  const sectionFade = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  // Projects data arr
  // Skills array
  // Testimonials array
  return (
    <main
      className={`${
        /* background color of website */
        darkMode ? "bg-[#12151f] text-white" : "bg-[#f5f5f7] text-black"
      } transition-all duration-500`}
    >
      {/* Header Section */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* Hero Section */}

      <Hero />
      {/* About Section */}
      <About darkMode={darkMode} />

      {/* Skills Section */}
      <Skills darkMode={darkMode} />
      {/* Project Section */}
      <Projects darkMode={darkMode} />

      {/* Testimonials Section */}
      <Certificate darkMode={darkMode} />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
