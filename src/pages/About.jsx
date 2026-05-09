import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen"
    >
      <main className="flex flex-col scroll-smooth bg-(--primary-color) text-white">
        {/* navbar */}
        <div className="flex py-8 items-center text-xl ">
          <div className="px-10 md:px-20 "><Link to="/" className="hover:underline">Home</Link><span>/About</span></div>
          <hr className="bg-white w-full" />
        </div>

        <div className=" flex-1 flex py-5 px-15 md:p-15 flex-col-reverse md:flex-row md:items-center justify-between">
          <div className="flex-1 md:px-10 ">
            <h4 className="text-xl md:text-2xl font-medium mb-5 italic">
              MY NAME IS IMRAN, - A JUNIOR DEVELOPER
            </h4>
            <h1 className="text-2xl md:text-3xl font-bold mb-5">
              OVER THE YEAR
            </h1>
            <p className="md:text-lg mb-8">
              With diploma in Computer Science and Bachelor Degree in Intelligence System, I have gain a useful amount of knowledge in developing a program. It has been fun learning it and hoping that I could keep learning about it.
              <br />
              <br />
              I also have done an internship at Julytech Sdn Bhd developing multiple module for their POS system and In this internship I have gain much experience about OOP and getting pretty good at programming in flutter. I have also learnt that communication and teamwork are a key to developed a program.
              <br />
              <br />
              In my spare time, I try to learn as much as I could about programming and have created many personal project of my own.
            </p>
            <h1 className="text-2xl md:text-3xl font-bold mb-5">
              Experience
            </h1>
            <p className="md:text-lg mb-8">
              - Internship at Julytech Sdn Bhd (2023) <br />
              - Degree in Intelligence System at Universiti Teknologi MARA (Present)
            </p>
            <h1 className="text-2xl md:text-3xl font-bold mb-5">
              SKILLS
            </h1>
            <p className="md:text-lg mb-8">
              Web and App Development, UI/UX Design, Data Analysis, Machine Learning, Deep Learning, Data Visualization, Version Control (Git), Problem Solving.
            </p>
          </div>

          <div className="flex flex-1 flex-col  md:items-center mb-auto">
            <img src={profileImg} alt="Profile"
              className="w-48 mb-10 md:mb-0 md:w-80 max-w-sm rounded-xl object-cover" />
          </div>
        </div>
      </main ></motion.div>
  );
}

export default About;