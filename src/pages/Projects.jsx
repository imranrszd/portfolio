import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Projects() {
  const [tab, setTab] = useState("development");

  const projects = [
    {
      title: "Parcel Management System",
      tech: "JavaScript, Node.js, Tailwind, PostgreSQL",
      year: 2026,
      type: "development",
    },
    {
      title: "QylexGames",
      tech: "JavaScript, React, Tailwind, PostgreSQL",
      year: 2026,
      type: "development",
    },
    {
      title: "Evergreen Home",
      tech: "Flutter, Dart",
      year: 2026,
      type: "development",
    },
    {
      title: "MedalTask",
      tech: "Flutter, Dart, Firebase",
      year: 2025,
      type: "development",
    },
    {
      title: "NutriScan",
      tech: "HTML, CSS, JavaScript",
      year: 2025,
      type: "development",
    },
  ];

  const filteredProjects = projects.filter(
    (p) => p.type === tab
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen"
      >
        <main className="flex flex-col h-screen scroll-smooth bg-(--primary-color) text-white">
          {/* navbar */}
          <div className="flex py-8 items-center text-xl ">
            <div className="px-20 "><Link to="/" className="hover:underline">Home</Link><span>/Projects</span></div>
            <hr className="bg-white w-full" />
          </div>


          <div className="flex-1 flex pl-15 flex-col py-10">
            {/* <div className="flex items-center gap-4 px-6 mb-6">
              <span
                onClick={() => setTab("development")}
                className={`cursor-pointer ${tab === "development" ? "underline" : "opacity-60 hover:opacity-100"}`}
              >
                Development
              </span>
              -
              <span
                onClick={() => setTab("design")}
                className={`cursor-pointer ${tab === "design" ? "underline" : "opacity-60 hover:opacity-100"}`}
              >
                Design
              </span>
            </div> */}
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="pb-2 p-6 border-b shadow-lg hover:bg-white hover:text-black transition-colors duration-300 select-none cursor-pointer"
              >
                <p className="text-sm md:text-md mb-2">
                  {project.tech} - {project.year}
                </p>
                <h2 className="text-3xl md:text-5xl font-medium">
                  {project.title}
                </h2>
              </div>
            ))}

          </div>
        </main ></motion.div>
    </AnimatePresence>
  );

}

export default Projects;