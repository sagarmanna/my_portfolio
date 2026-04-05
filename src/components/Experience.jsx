import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-white dark:bg-gray-900">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 dark:text-white">
        Experience
      </h2>

      {/* Timeline */}
      <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6 space-y-12">

        {/* PearlThoughts */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="absolute -left-2.5 w-5 h-5 bg-blue-500 rounded-full"></div>

          <h3 className="text-lg font-semibold dark:text-white">
            Frontend Developer Intern
          </h3>
          <p className="text-sm text-gray-500">
            PearlThoughts • Feb 2026 – Mar 2026
          </p>

          <ul className="mt-3 text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc ml-5">
            <li>Refactored UI into reusable and modular React components to improve maintainability.</li>
            <li>Improved UI structure using functional components and React Hooks.</li>
            <li>Reduced duplication by creating shared UI components.</li>
            <li>Built responsive and consistent interfaces using Tailwind CSS.</li>
            <li>Managed component-level state using React Hooks and props.</li>
          </ul>

          <p className="text-xs text-blue-500 mt-2">
            React • Next.js • JavaScript • Tailwind • Git
          </p>
        </motion.div>

        {/* Talentrise */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="absolute -left-2.5 w-5 h-5 bg-blue-500 rounded-full"></div>

          <h3 className="text-lg font-semibold dark:text-white">
            Software Developer Intern (React)
          </h3>
          <p className="text-sm text-gray-500">
            Talentrise Technokrate • Dec 2025 – Feb 2026
          </p>

          <ul className="mt-3 text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc ml-5">
            <li>Developed scalable React modules focused on performance and reusability.</li>
            <li>Implemented form handling, validation, and file uploads using Formik and Yup.</li>
            <li>Built search, filtering, and pagination systems with global state management.</li>
            <li>Managed state using useReducer, Context API, and custom hooks.</li>
            <li>Created responsive UI using Tailwind CSS.</li>
          </ul>

          <p className="text-xs text-blue-500 mt-2">
            React • Context API • Formik • Tailwind
          </p>
        </motion.div>

        {/* Wipro */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="absolute -left-2.5 w-5 h-5 bg-blue-500 rounded-full"></div>

          <h3 className="text-lg font-semibold dark:text-white">
            .NET Full Stack Developer (Trainee)
          </h3>
          <p className="text-sm text-gray-500">
            Wipro • Aug 2025 – Oct 2025
          </p>

          <ul className="mt-3 text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc ml-5">
            <li>Developed web applications using ASP.NET Core and MVC architecture.</li>
            <li>Built responsive UI using HTML, CSS, JavaScript, and Bootstrap.</li>
            <li>Created and consumed REST APIs for backend integration.</li>
            <li>Designed and optimized SQL Server databases.</li>
          </ul>

          <p className="text-xs text-blue-500 mt-2">
            ASP.NET • C# • SQL Server • Bootstrap
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;