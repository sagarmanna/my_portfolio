import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-white dark:bg-gray-900">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-12 dark:text-white"
      >
        About Me
      </motion.h2>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-3xl space-y-6"
      >
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I am a Software Engineer Intern focused on building scalable and
          high-performance web applications using modern JavaScript technologies.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I specialize in developing clean, maintainable, and reusable
          component-based architectures with React and building efficient backend
          services using Node.js and REST APIs.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          My experience includes working on authentication systems, form handling,
          search and filtering logic, and performance optimization in full-stack
          applications.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I enjoy solving real-world problems, improving system efficiency, and
          building production-ready applications with a strong focus on usability
          and scalability.
        </p>
      </motion.div>

    </section>
  );
};

export default About;