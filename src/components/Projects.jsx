import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Room Booking Dashboard",
    desc: "Full-featured hotel booking dashboard with advanced filtering, booking flow, and admin analytics.",
    image: "/room.png",
    tech: ["Next.js", "React", "Tailwind", "Framer Motion"],
    github: "https://github.com/sagarmanna/Room-Booking",
    live: "https://room-booking-bice.vercel.app/",
  },
  {
    title: "Forecast Monitoring App",
    desc: "Visualizes actual vs forecast wind power generation using interactive charts and filters.",
    image: "/forecast.png",
    tech: ["React", "Recharts", "Node.js"],
    github: "https://github.com/sagarmanna/forecast-monitoring-app",
    live: "#",
  },
  {
    title: "JSON Visualizer",
    desc: "Interactive tool to visualize JSON structures as dynamic graphs.",
    image: "/json.png",
    tech: ["React", "TypeScript", "ReactFlow"],
    github: "https://github.com/sagarmanna/JSON-TREE-VISUALIZER",
    live: "https://json-tree-visualizer-mu.vercel.app",
  },
];

const Projects = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50 dark:bg-gray-900">
      
      <h2 className="text-4xl font-bold mb-12 dark:text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition"
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">

              <h3 className="text-lg font-semibold dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {project.desc}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-600 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-5">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500"
                >
                  <FaGithub />
                  Code
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-500 hover:underline"
                  >
                    Live
                    <FaExternalLinkAlt />
                  </a>
                )}

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;