import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React + Tailwind.",
      tech: "React, Tailwind",
      year: 2024,
    },
    {
      title: "Parcel Management System",
      desc: "Rack allocation system with AI + Genetic Algorithm.",
      tech: "Laravel, AI",
      year: 2023,
    },
    {
      title: "Gaming Topup Website",
      desc: "Topup platform with payment integration.",
      tech: "React, Firebase",
      year: 2022,
    },
    {
      title: "Gaming Topup Website",
      desc: "Topup platform with payment integration.",
      tech: "React, Firebase",
      year: 2022,
    },
    {
      title: "Gaming Topup Website",
      desc: "Topup platform with payment integration.",
      tech: "React, Firebase",
      year: 2022,
    },
  ];

  return (
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
          {projects.map((project, index) => (
            <div key={index} className="pb-2 p-6 border-b shadow-lg hover:bg-white hover:text-black transition-colors duration-300">
              <p className="text-md mb-2">{project.tech} - {project.year}</p>
              <h2 className="text-5xl font-medium">{project.title}</h2>
            </div>
          ))}

        </div>
      </main ></motion.div>
  );

}

export default Projects;