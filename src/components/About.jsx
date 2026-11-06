import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { FaMicrochip, FaCode, FaArrowRight, FaLayerGroup } from "react-icons/fa";

const About = () => {
  const reduced = useReducedMotion();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: .1 });
  const reveal = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : .5, ease: [.22, 1, .36, 1] } },
  };
  return (
    <section ref={sectionRef} id="about" className={`about-section${inView ? " is-visible" : ""}`} aria-labelledby="about-title">
      <motion.div className="about-inner about-introduction" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={{ visible: { transition: { staggerChildren: reduced ? 0 : .08 } } }}>
        <motion.div className="about-story" variants={{ visible: { transition: { staggerChildren: reduced ? 0 : .07 } } }}>
          <motion.header className="about-heading" variants={reveal}>
            <span className="about-eyebrow">01 / THE PERSON BEHIND THE CODE</span>
            <h2 id="about-title">Engineering ideas.<br /><span>Creating impact.</span></h2>
          <motion.ul className="about-specialties" variants={reveal} aria-label="Engineering focus">
            <li><FaMicrochip aria-hidden="true" /> AI &amp; ML Systems</li><li><FaLayerGroup aria-hidden="true" /> Scalable Applications</li><li><FaCode aria-hidden="true" /> Full-Stack Development</li>
          </motion.ul>
          <motion.a variants={reveal} className="about-project-link" href="#projects">Explore my projects <FaArrowRight aria-hidden="true" /></motion.a>
          </motion.header>
          <div className="about-prose">
            <motion.h3 variants={reveal}>Hi, I'm Sagar Manna.</motion.h3>
            <motion.p variants={reveal} className="about-lead">I'm an <strong>AI Engineer at Vedas Tech</strong>, passionate about building intelligent, scalable, and real-world AI applications.</motion.p>
            <motion.p variants={reveal}>I work with <strong>AI/ML, NLP, Generative AI, voice cloning, and multilingual TTS</strong>, developing AI inference pipelines and backend services using Python, FastAPI, Redis, and PostgreSQL.</motion.p>
            <motion.p variants={reveal}>With experience in <strong>React.js, Next.js, and Full-Stack Development</strong>, I combine AI technologies with modern software engineering to build efficient, user-friendly solutions.</motion.p>
            <motion.p variants={reveal} className="about-closing">I enjoy solving complex problems, exploring emerging AI technologies, and turning innovative ideas into impactful products.</motion.p>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};
export default About;
