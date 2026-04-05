import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Sagar Manna. All rights reserved.
        </p>

        {/* Right - Social */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/sagarmanna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/manna-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;