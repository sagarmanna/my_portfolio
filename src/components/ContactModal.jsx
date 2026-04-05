import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Modal */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl w-[90%] max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-white">
          Contact Me
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Feel free to connect with me 👇
        </p>

        {/* Email */}
        <a
          href="mailto:sagarmanna954@gmail.com"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <FaEnvelope />
          <span className="dark:text-white">Email</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/sagarmanna"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <FaGithub />
          <span className="dark:text-white">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/manna-s/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <FaLinkedin />
          <span className="dark:text-white">LinkedIn</span>
        </a>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ContactModal;