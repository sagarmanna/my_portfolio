import Reveal from "./Reveal";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCar, FaBrain, FaWallet } from "react-icons/fa";

const projects = [
  {
    category: "Computer Vision",
    icon: FaCar,
    title: "BharashaRide - Driver Alert System",
    desc: "Real-time driver monitoring that detects drowsiness, yawning, and emotions with facial landmarks. A React dashboard connects to FastAPI for live audio alerts and safety warnings.",
    tech: ["React", "FastAPI", "Python", "OpenCV", "Dlib"],
    github: "https://github.com/sagarmanna/BharashaRide",
    live: "https://www.youtube.com/watch?v=MgHXPz6WP-c",
    liveLabel: "Watch demo",
  },
  {
    category: "Agentic AI",
    icon: FaBrain,
    title: "ResearchMind - Multi-Agent Research",
    desc: "Automated research and report generation with web search, data extraction, and writer and critic chains for report refinement and scoring.",
    tech: ["Python", "Streamlit", "LangChain", "LangGraph", "OpenAI API"],
    github: "https://github.com/sagarmanna/MULTI_AGENT_SYSTEM",
    live: "https://multiagentsystem9.streamlit.app/",
  },
  {
    category: "Full-Stack Application",
    icon: FaWallet,
    title: "MoneyTracker - Expense Management",
    desc: "Full-stack expense tracking with secure REST APIs, balance and transaction management, and cloud storage using MongoDB Atlas.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sagarmanna/MoneyTracker",
    live: "#",
  },
  {
    title: "Room Booking Dashboard",
    desc: "Full-featured hotel booking dashboard with advanced filtering, booking flow, and admin analytics.",
    image: "/room.png",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
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
  const reduced = useReducedMotion();
  return <section id="projects" className="projects-section" aria-labelledby="projects-title">
    <div className="projects-inner">
      <Reveal><header className="projects-heading"><span className="projects-eyebrow">SELECTED WORK</span><h2 id="projects-title">Ideas turned into products.</h2><p>AI systems, practical tools, and full-stack applications.</p></header></Reveal>
      <div className="projects-grid">{projects.map((project, index) => {
        const Icon = project.icon;
        const [name, subtitle] = project.title.split(" - ");
        return <motion.article className="project-card" key={project.title} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: reduced ? 0 : .4, delay: reduced ? 0 : index % 3 * .06 }}>
          {project.image ? <div className="project-image"><img src={project.image} alt={`${name} interface`} loading="lazy" /></div> : <div className={`project-art project-art-${index}`} aria-hidden="true"><div className="project-art-grid" /><div className="project-art-icon"><Icon /></div><span>{project.category}</span><div className="project-art-orbit" /></div>}
          <div className="project-content"><h3>{name}</h3>{subtitle && <p className="project-subtitle">{subtitle}</p>}<p className="project-description">{project.desc}</p>
            <ul className="project-tech" aria-label={`${name} technologies`}>{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
            <div className="project-links"><a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${name} source code`}><FaGithub aria-hidden="true" /> Source code</a>{project.live !== "#" && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.liveLabel || "View live project"}: ${name}`}>{project.liveLabel || "Live project"} <FaExternalLinkAlt aria-hidden="true" /></a>}</div>
          </div>
        </motion.article>;
      })}</div>
    </div>
  </section>;
};
export default Projects;
