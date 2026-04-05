import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFastapi,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C++", icon: <SiCplusplus /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "HTML / CSS", icon: <SiJavascript /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "FastAPI", icon: <SiFastapi /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "REST APIs", icon: <FaDatabase /> },
        { name: "CRUD Operations", icon: <FaDatabase /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 px-6 md:px-20 py-20 bg-gray-50 dark:bg-gray-900"
    >

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 dark:text-white">
        Technical Skills
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-4 dark:text-white">
              {category.title}
            </h3>

            <div className="space-y-3">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                >
                  <span className="text-blue-500 text-lg">
                    {skill.icon}
                  </span>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;