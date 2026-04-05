import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">

      <div className="flex justify-between items-center px-6 md:px-20 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold dark:text-white">
          Sagar
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-gray-700 dark:text-gray-300">
          {menuItems.map((item) => (
            <li key={item} className="relative group cursor-pointer">

              <a href={`#${item}`} className="capitalize">
                {item}
              </a>

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>

            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl dark:text-white"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-6"
        >
          <ul className="flex flex-col gap-5 text-gray-700 dark:text-gray-300">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 border-b border-gray-200 dark:border-gray-700 capitalize"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

    </nav>
  );
};

export default Navbar;