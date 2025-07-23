  "use client";

  import { useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { Dialog } from "@headlessui/react";
  import { Download } from "lucide-react";

  const certificates = [
   {  
      id: "Generative AI:Introduction and Applications",
      desc: "IBM certification on Generative AI:Introduction and Applications",
      issuer: "IBM",
      badge: "certificate/icons/generative_AI.jpg",
      issueDate: "July 17, 2025",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/GPYGUWN2LSXA",
      file: "/certificate/generative_AI.jpg",
      images: ["/certificate/generative_AI.jpg"],
  }, 
    {  
      id: "Data Science",
      desc: "IBM certification on What is Data Science?",
      issuer: "IBM",
      badge: "certificate/icons/data_science.jpg",
      issueDate: "July 20, 2025",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/Q8VVXLU3LGUW",
      file: "/certificate/py.jpg",
      images: ["/certificate/data_science.jpg"],
  },
   
      {
      id: "Python for Everybody",
      desc: "University of Michigan certification in Python programming.",
      issuer: "University of Michigan",
      badge: "certificate/icons/michigan.png",
      issueDate: "February 4, 2025",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/YMGR7WC8IMVK",
      file: "/certificate/py.jpg",
      images: ["/certificate/py.jpg"],
    },
    {
      id: "Computer Networking",
      desc: "Google course on networking fundamentals.",
      issuer: "Google",
      badge: "certificate/icons/google.png",
      issueDate: "January 30, 2025",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/21TNPU6CP9OW",
      file: "/certificate/cn.jpg",
      images: ["/certificate/cn.jpg"],
    },
    {
      id: "AI & Reinforcement Learning",
      desc: "Course by Lokmanya University",
      issuer: "Lokmanya University",
      badge: "certificate/icons/lm_college.png",
      issueDate: "May 2024",
      verifyLink: "https://example.com/verify/ai",
      file: "/certificate/ai.jpeg",
      images: ["/certificate/ai.jpeg"],
    },
    {
      id: "Software Engineering",
      desc: "IBM certification covering software development lifecycle and methodologies.",
      issuer: "IBM",
      badge: "/certificate/icons/ibm.png",
      issueDate: "January 31, 2025",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/6W1NNC73PVK8",
      file: "/certificate/se.jpg",
      images: ["/certificate/se.jpg"],
    },
    {
      id: "Software Testing",
      desc: "University of Minnesota course on unit, integration, and system testing.",
      issuer: "University of Minnesota",
      badge: "/certificate/icons/Minnesota.png",
      issueDate: "February 11, 2025",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/K0QOMV000VQJ",
      file: "/certificate/st.jpg",
      images: ["/certificate/st.jpg"],
    },
    {
      id: "Linux & Shell Scripting",
      desc: "IBM certification on Linux terminal and bash scripting basics.",
      issuer: "IBM",
      badge: "/certificate/icons/ibm.png",
      issueDate: "October 31, 2024",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/M19O4FA17UKI",//done
      file: "/certificate/linux.jpg",
      images: ["/certificate/linux.jpg"],
    },
    {
      id: "R Programming for Data Science",
      desc: "IBM course introducing R programming for data analysis.",
      issuer: "IBM",
      badge: "/certificate/icons/ibm.png",
      issueDate: "November 6, 2024",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/BTHJQ2RQR4D4",
      file: "/certificate/r.jpg",
      images: ["/certificate/r.jpg"],
    },
  ];

  const Certificate = ({ darkMode }: { darkMode: boolean }) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [modalImage, setModalImage] = useState<string | null>(null);

    const handleCardClick = (id: string) => {
      setExpandedId((prev) => (prev === id ? null : id));
    };

    const openModal = (img: string) => setModalImage(img);
    const closeModal = () => setModalImage(null);

    return (
      <section
        id="certificates"
        className="py-20 px-6 max-w-6xl mx-auto relative"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-0">
          {certificates.map((cert) => {
            const isOpen = expandedId === cert.id;
              let collapseTimeout: NodeJS.Timeout;
            return (
              <div
                key={cert.id}
                className={`relative p-4 rounded-2xl border cursor-pointer shadow-md transition-all ${
                  darkMode
                    ? "bg-gray-800 text-white border-gray-700"
                    : "bg-white text-black border-gray-200"
                } ${isOpen ? "ring-2 ring-indigo-500 z-20" : ""}`}
                onClick={() => handleCardClick(cert.id)}
                 onMouseEnter={() => clearTimeout(collapseTimeout)}
                 onMouseLeave={() => {
        collapseTimeout = setTimeout(() => {
          if (expandedId === cert.id) {
            setExpandedId(null);
          }
        }, 2000);
      }}
              >
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                  {cert.id}
                </h3>
                <p className="text-sm mb-2">{cert.desc}</p>
                <p className="text-xs italic mb-2 text-gray-500">
                  {cert.issuer}
                </p>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute left-0 top-full mt-3 w-full p-4 rounded-xl shadow-xl border ${
                        darkMode
                          ? "bg-gray-900 text-white border-gray-700"
                          : "bg-white text-black border-gray-200"
                      } z-50`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Badge & Issuer */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={cert.badge}
                            alt={cert.issuer}
                            className="w-6 h-6 rounded-full object-contain"
                          />
                          <span className="text-sm font-medium">
                            {cert.issuer}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">
                          {cert.issueDate}
                        </span>
                      </div>

                      {/* Verify */}
                      {cert.verifyLink && (
                        <a
                          href={cert.verifyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm underline mb-2 inline-block ${
                            darkMode
                              ? "text-indigo-300 hover:text-indigo-100"
                              : "text-indigo-700 hover:text-indigo-500"
                          }`}
                        >
                          Verify Certificate
                        </a>
                      )}

                      {/* Preview Image */}
                      <div className="rounded-xl overflow-hidden mb-4 mt-2">
                        <img
                          src={cert.images[0]}
                          alt={cert.id}
                          className="w-full h-64 object-contain rounded-xl hover:opacity-90 transition"
                          onClick={() => openModal(cert.images[0])}
                        />
                        <p className="text-xs text-center mt-1 text-gray-400">
                          Click to enlarge
                        </p>
                      </div>

                      {/* Download Button */}
                      <a
                        href={cert.file}
                        download
                        className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg w-fit ${
                          darkMode
                            ? "bg-indigo-600 text-white hover:bg-indigo-500"
                            : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                        }`}
                      >
                        <Download className="w-4 h-4" /> Download
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalImage && (
            <Dialog
              open={true}
              onClose={closeModal}
              className="fixed inset-0 z-[100] flex items-center justify-center"
            >
              <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
              <Dialog.Panel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-xl max-w-3xl w-full p-4 shadow-xl relative z-50"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                >
                  &times;
                </button>
                <img
                  src={modalImage}
                  alt="Certificate"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </Dialog.Panel>
            </Dialog>
          )}
        </AnimatePresence>
      </section>
    );
  };

  export default Certificate;
