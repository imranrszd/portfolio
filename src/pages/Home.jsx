import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import '../index.css'

function Home() {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen"
    >
      <main className="relative flex flex-col h-screen scroll-smooth bg-(--primary-color) text-white overflow-hidden">
        {/* <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-floaty"></div>

          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-floaty delay-700"></div>

          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-floaty delay-1000"></div>
        </div> */}
        <div className="flex py-8 items-center text-xl ">
          <a href="#home" className="px-20 hover:underline">Home</a>
          <hr className="bg-white w-full" />
        </div>
        <div className=" flex-1 flex py-10 px-15 md:p-15 flex-col md:flex-row md:items-center justify-between">
          <div className="flex-1 md:px-10 md:py-20 mt-auto">
            <p className=" md:text-lg">Welcome to My Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold ">
              IMRAN's PORTFOLIO
            </h1>
            <p className="md:text-lg mb-8">
              Junior Developer - Tech Enthausiast
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-center items-start gap-10 md:gap-10 md:px-20 mb-20 text-[clamp(2rem,5vw,8rem)]">
            <Link to="/about" className="font-semibold px-4 py-2 rounded-md hover:bg-white hover:text-black hover:-skew-x-6 hover:scale-105 transition-all duration-300 ease-out">
              About
            </Link>
            <Link to="/projects" className="font-semibold px-4 py-2 rounded-md hover:bg-white hover:text-black hover:-skew-x-6 hover:scale-105 transition-all duration-300 ease-out">
              Projects
            </Link>
            <Link to="/contact" className="font-semibold px-4 py-2 rounded-md hover:bg-white hover:text-black hover:-skew-x-6 hover:scale-105 transition-all duration-300 ease-out">
              Contact
            </Link>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default Home;
