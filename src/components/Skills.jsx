import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
const categories = [
  ["Languages", ["Python", "JavaScript (ES6+)", "TypeScript", "C++", "C"]],
  ["AI & Agentic Systems", ["NLP", "Model Inference", "Multilingual TTS", "Agentic AI", "Multi-Agent Systems", "LangChain", "LangGraph", "LLMOps", "OpenAI API"]],
  ["Frontend", ["React.js", "Next.js", "HTML5 & CSS3", "Tailwind CSS", "React Hooks", "Context API", "Responsive Web Design"]],
  ["Backend", ["FastAPI", "Node.js", "Express.js", "REST APIs", "JWT Authentication", "Redis", "Celery", "Nodemailer", "Multer"]],
  ["Databases", ["PostgreSQL", "MongoDB", "MySQL", "SQLite"]],
  ["Developer Tools", ["Git", "GitHub", "CI/CD", "Postman"]]
];
const Skills = () => {
  const reduced = useReducedMotion();
  return (
  <section id="skills" className="skills-section" aria-labelledby="skills-title">
    <div className="skills-inner"><Reveal><header className="skills-heading"><span>TOOLS OF THE TRADE</span><h2 id="skills-title">My engineering toolkit.</h2><p>The languages, frameworks, and tools I use across AI and application development.</p></header></Reveal>
    <div className="skills-list">{categories.map(([title, skills], index) => (
      <motion.article initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: reduced ? 0 : .45, delay: reduced ? 0 : index % 3 * .07 }} key={title} className="skill-row">
        <div className="skill-category"><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3></div>
        <ul className="skill-items">{skills.map(skill => <li key={skill} >{skill}</li>)}</ul>
      </motion.article>
    ))}</div></div>
  </section>
  );
};
export default Skills;
