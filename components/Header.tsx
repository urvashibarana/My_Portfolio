"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, SunMedium, X } from "lucide-react";
import React from "react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  setSidebarOpen: (val: boolean) => void;
  sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  setSidebarOpen,
  sidebarOpen,
}) => {
  return (
    <>
      <header
        className={`fixed w-full z-50 ${
          darkMode ? "bg-white/5" : "bg-white/80"
        } backdrop-blur-md shadow-md`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Urvashiba Rana</h1>
          <nav className="space-x-6 font-medium hidden md:block">
            {["about", "skills", "projects", "testimonials", "contact"].map(
              (sec) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {sec.toUpperCase()}
                </a>
              )
            )}
          </nav>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-indigo-500 text-white shadow hover:scale-110 transition"
            >
              {darkMode ? (
                <SunMedium className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              className={`fixed top-0 right-0 h-full w-54 z-50 p-6 flex flex-col shadow-xl ${
                darkMode ? "bg-black text-white" : "bg-white text-black"
              }`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  aria-label="close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-4 font-medium">
                {["about", "skills", "projects", "testimonials", "contact"].map(
                  (sec) => (
                    <a
                      key={sec}
                      href={`#${sec}`}
                      onClick={() => setSidebarOpen(false)}
                      className="hover:text-indigo-500"
                    >
                      {sec.toUpperCase()}
                    </a>
                  )
                )}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
