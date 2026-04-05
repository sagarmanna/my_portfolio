import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-20 bg-gray-50 dark:bg-gray-900"
    >

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-10 dark:text-white"
      >
        Contact
      </motion.h2>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
      >

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          I'm open to opportunities, collaborations, and interesting projects.
          Feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="space-y-4">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500" />
            <a
              href="mailto:sagarmanna954@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              sagarmanna954@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-500" />
            <a
              href="tel:+918509031202"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              +91 8509031202
            </a>
          </div>

        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-8 text-2xl">

          <a
            href="https://github.com/sagarmanna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/manna-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

        </div>

      </motion.div>
    </section>
  );
};

export default Contact;