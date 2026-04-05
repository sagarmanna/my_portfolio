import { useState } from "react";
import ContactModal from "./ContactModal";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white dark:bg-gray-900 rounded-2xl m-6 shadow-lg">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold leading-tight dark:text-white"
          >
            Hi, <br />
            I'm <span className="text-blue-500">Sagar Manna</span>
          </motion.h1>

          {/* Typing */}
          <motion.div variants={item}>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1500,
                "React Developer",
                1500,
                "Full Stack Developer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-xl text-gray-600 dark:text-gray-300 mt-4"
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Contact
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/S_MANNA_RESUME.pdf"
              download
            >
              <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                Download Resume
              </button>
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={item}
            className="flex gap-6 mt-6 text-2xl"
          >
            <a
              href="https://github.com/sagarmanna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-blue-500 hover:scale-110 transition cursor-pointer dark:text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/manna-s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-500 hover:scale-110 transition cursor-pointer dark:text-white" />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="bg-blue-500 w-64 h-64 rounded-full flex items-center justify-center shadow-xl"
          >
            <img
              src="/download.jpeg"
              alt="profile"
              className="w-56 h-56 rounded-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* MODAL */}
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
        
    </>
  );
};

export default Hero;