import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Contact() {
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
          <div className="px-20 "><Link to="/" className="hover:underline">Home</Link><span>/Contact</span></div>
          <hr className="bg-white w-full" />
        </div>

        <div className=" flex-1 flex py-5 px-15 md:p-15 flex-col md:flex-row md:items-center justify-center">
          <div className="flex-1 md:px-20  justify-center flex flex-col">
            <p className="md:text-lg mb-4  w-[300px] ">
              Need to create website or design or just want to say
            </p>
            <h1 className="text-7xl md:text-8xl font-bold mb-5">
              HELLO,
            </h1>
            <p className="md:text-lg mb-4">
              Get in touch
            </p><p className="md:text-lg mb-2">
              Email: imranrszd@gmail.com
            </p><p className="md:text-lg">
              Social: <span className="hover:underline"><a href="https://www.linkedin.com/in/imranrszd/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span> - <span className="hover:underline"><a href="https://github.com/imranrszd" target="_blank" rel="noopener noreferrer">Github</a></span> - <span className="hover:underline"><a href="https://threads.net/imranrszd" target="_blank" rel="noopener noreferrer">Threads</a></span>
            </p>
          </div>

          <div className="">

          </div>
        </div>
      </main ></motion.div>
  );

}

export default Contact;