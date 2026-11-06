import Reveal from "./Reveal";
import { motion, useReducedMotion } from "framer-motion";
import { FaBriefcase, FaMicrochip, FaCode, FaCalendarAlt, FaMapMarkerAlt, FaPython, FaReact, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiRedis, SiPostgresql, SiFastapi, SiNextdotjs } from "react-icons/si";

const techIcons = { Python: FaPython, "React.js": FaReact, JavaScript: SiJavascript, "Tailwind CSS": SiTailwindcss, Redis: SiRedis, PostgreSQL: SiPostgresql, FastAPI: SiFastapi, "Next.js": SiNextdotjs, Git: FaGitAlt };
const experiences = [
  { role: "AI Engineer", company: "Vedas Tech", date: "June 2026 - Present", location: "Gujarat, India", points: [
    "Engineer modular AI/ML inference pipelines for voice cloning and multilingual text-to-speech.",
    "Integrate NLP text processing with speech synthesis for multilingual text-to-audio generation.",
    "Build asynchronous processing with Python, FastAPI, Redis, and Celery for non-blocking inference.",
    "Develop reusable audio preprocessing and model-serving components.",
    "Design geospatial search and location-matching algorithms, and optimize REST APIs and database operations."
  ], tech: ["Python", "NLP", "AI/ML", "FastAPI", "Redis", "Celery", "PostgreSQL", "SQLite"] },
  { role: "Frontend Developer Intern", company: "PearlThoughts", date: "February 2026 - April 2026", location: "Remote, India", points: [
    "Refactored a monolithic Email Card into modular, reusable React components.",
    "Migrated legacy class-based UI to functional components and React Hooks.",
    "Reduced code duplication by 30% by extracting shared UI components.",
    "Built responsive layouts with Tailwind CSS and managed component state and data flow."
  ], tech: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Git", "GitHub"] }
];
const Experience = () => {
  const reduced = useReducedMotion();
  return <section id="experience" className="experience-section" aria-labelledby="experience-title">
    <div className="experience-inner">
      <Reveal><header className="experience-heading"><span className="experience-heading-icon"><FaBriefcase aria-hidden="true" /></span><div><h2 id="experience-title">Experience</h2><p>My professional journey and hands-on experience.</p><span className="experience-heading-rule" /></div></header></Reveal>
      <ol className="experience-timeline">{experiences.map((experience, index) => {
        const RoleIcon = index === 0 ? FaMicrochip : FaCode;
        return <motion.li className={`experience-entry experience-entry-${index}`} key={experience.company} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: reduced ? 0 : .5 }}>
          <div className="experience-date"><span><FaCalendarAlt aria-hidden="true" />{experience.date}</span><span><FaMapMarkerAlt aria-hidden="true" />{experience.location}</span></div>
          <span className="experience-node" aria-hidden="true" />
          <article className="experience-card">
            <div className="experience-role-heading"><span className="experience-role-icon"><RoleIcon aria-hidden="true" /></span><div><h3>{experience.role}</h3><p className="experience-company">{experience.company}</p></div>{index === 0 && <span className="experience-current"><i />Current Role</span>}</div>
            <ul className="experience-points">{experience.points.map(point => <li key={point}>{point}</li>)}</ul>
            <div className="experience-stack"><span className="experience-stack-label"><FaCode aria-hidden="true" /> Tech Stack</span><ul>{experience.tech.map(tech => { const Icon = techIcons[tech] || (tech === "SQLite" ? FaDatabase : FaMicrochip); return <li key={tech}><Icon aria-hidden="true" />{tech}</li>; })}</ul></div>
          </article>
        </motion.li>;
      })}</ol>
    </div>
  </section>;
};
export default Experience;
