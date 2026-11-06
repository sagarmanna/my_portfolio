import Reveal from "./Reveal";
import { motion, useReducedMotion } from "framer-motion";
import { FaGraduationCap, FaBookOpen, FaMapMarkerAlt } from "react-icons/fa";

const education = [
  { years: "2023–2026", school: "Chandigarh Engineering College", degree: "Bachelor of Technology, Computer Science & Engineering", location: "Landran, Punjab", mark: "CEC", skills: ["Computer Science", "C++", "Data Structures & Algorithms"] },
  { years: "2019–2022", school: "Salbani Institute of Technology", degree: "Diploma, Mechanical Engineering", location: "Salbani, West Bengal", mark: "SIT", skills: ["C Programming", "Communication"] },
  { years: "2018–2019", school: "West Bengal Board of Secondary Education (WBBSE)", degree: "Secondary Education, General Studies", location: "West Bengal", mark: "WBBSE", skills: [] },
];
const Education = () => {
  const reduced = useReducedMotion();
  return <section id="education" className="education-section" aria-labelledby="education-heading">
    <div className="education-inner">
      <Reveal><header className="education-heading"><span className="education-heading-icon"><FaGraduationCap aria-hidden="true" /></span><div><h2 id="education-heading">Education</h2><p>My academic journey and continuous learning in technology.</p></div></header></Reveal>
      <ol className="education-timeline">{education.map((item, index) => <motion.li className={`education-entry education-entry-${index}`} key={item.school} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: reduced ? 0 : .45 }}>
        <div className="education-date"><FaGraduationCap aria-hidden="true" /><span>{item.years}</span></div>
        <span className="education-node" aria-hidden="true" />
        <article className="education-record"><div className="education-monogram" aria-hidden="true">{index === 2 ? <FaBookOpen /> : <FaGraduationCap />}<span>{item.mark}</span></div><div className="education-record-copy"><h3>{item.school}</h3><p>{item.degree}</p><span className="education-record-location"><FaMapMarkerAlt aria-hidden="true" />{item.location}</span></div>{item.skills.length > 0 && <ul className="education-skills" aria-label={`${item.school} focus areas`}>{item.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>}</article>
      </motion.li>)}</ol>
    </div>
  </section>;
};
export default Education;
