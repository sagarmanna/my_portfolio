import { useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload, FaEye, FaChevronDown, FaEnvelope, FaMicrochip, FaCode, FaLayerGroup } from "react-icons/fa";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const heroRef = useRef(null);
  const heroVisible = useInView(heroRef, { amount: .05 });
  return (
    <>
      <section ref={heroRef} id="home" className={`hero-stage${heroVisible ? " hero-visible" : ""}`}>
        <div className="hero-layout">
          <motion.div className="hero-copy" initial={{ opacity: 1, y: reduced ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .7 }}>
            <h1 aria-label="Hi, I'm Sagar. I build intelligence into experiences.">
              {["Hi, I'm Sagar.", "I build intelligence", "into experiences."].map((line, index) => (
                <span className="headline-line" key={line} aria-hidden="true"><motion.span className={index ? "headline-gradient" : "headline-intro"} initial={{ y: reduced ? 0 : 12 }} animate={{ y: 0 }} transition={{ duration: reduced ? 0 : .8, delay: reduced ? 0 : index * .16, ease: [.22, 1, .36, 1] }}>{line}</motion.span></span>
              ))}
            </h1>
            <p className="hero-description">I build voice and language systems, reliable Python APIs, and web applications people can use. My work connects AI models with practical products.</p>
            <ul className="hero-tags"><li><FaMicrochip /> AI Engineering</li><li><FaCode /> Full-Stack Development</li><li><FaLayerGroup /> Agentic AI</li></ul>
            <div className="hero-actions">
              <motion.button whileHover={reduced ? {} : { y: -3 }} whileTap={{ scale: .98 }} className="hero-primary" onClick={() => setOpen(true)}>Let's Connect <FaArrowRight /></motion.button>
              <motion.a whileHover={reduced ? {} : { y: -3 }} className="hero-secondary" href="/S_MANNA_RESUME.pdf" target="_blank" rel="noopener noreferrer" aria-label="View resume (opens in a new tab)"><FaEye /> View Resume</motion.a>
              <motion.a whileHover={reduced ? {} : { y: -3 }} className="hero-secondary" href="/S_MANNA_RESUME.pdf" download><FaDownload /> Download Resume</motion.a>
            </div>
            <div className="hero-socials">
              <a aria-label="Sagar Manna on GitHub" href="https://github.com/sagarmanna" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a aria-label="Sagar Manna on LinkedIn" href="https://www.linkedin.com/in/manna-s/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a aria-label="Email Sagar Manna" href="mailto:sagarmanna954@gmail.com"><FaEnvelope /></a>
            </div>
          </motion.div>
          <motion.div className="portrait-scene" initial={{ opacity: 1, scale: reduced ? 1 : .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduced ? 0 : .65, delay: reduced ? 0 : .1 }}>
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-ring"><img src="/download.jpeg" alt="Sagar Manna, AI Engineer" fetchPriority="high" /></div>
            <div className="portrait-caption"><div><h2>Sagar Manna</h2><p>AI Engineer &amp; Full-Stack Developer</p></div><a href="#experience" aria-label="Explore my experience"><FaArrowRight /></a></div>
            <div className="portrait-annotation annotation-top"><FaMicrochip aria-hidden="true" /><span>AI &amp; ML systems</span></div>
            <div className="portrait-annotation annotation-bottom"><FaCode aria-hidden="true" /><span>From model to product</span></div>
          </motion.div>
        </div>
        <div className="hero-transition">
          <div className="hero-transition-glow" aria-hidden="true" />
          <svg className="ambient-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="ambient-wave-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#087cca" /><stop offset=".4" stopColor="#288dff" /><stop offset=".7" stopColor="#aa43f6" /><stop offset="1" stopColor="#4c45cf" /></linearGradient>
              <filter id="ambient-wave-soft"><feGaussianBlur stdDeviation="3" /></filter>
            </defs>
            <g className="ambient-wave-lines">{Array.from({ length: 16 }, (_, i) => <path key={i} d={`M-80 ${100 + i * 1.2} C 120 ${100 - i * 2}, 220 ${-10 + i * 5}, 440 ${48 + i * 3} S 700 ${115 - i * 2}, 860 ${53 + i * 2} S 1100 ${-22 + i * 4}, 1230 ${27 + i * 3} S 1430 ${103 - i}, 1520 ${62 + i * 2}`} stroke="url(#ambient-wave-gradient)" strokeWidth={i === 0 ? 1.6 : .6} opacity={.7 - i * .032} />)}</g>
            <path d="M-80 100 C120 100 220 -10 440 48 S700 115 860 53 S1100 -22 1230 27 S1430 103 1520 62" stroke="url(#ambient-wave-gradient)" strokeWidth="5" opacity=".3" filter="url(#ambient-wave-soft)" />
            <g className="wave-secondary">{Array.from({ length: 9 }, (_, i) => <path key={i} d={`M-80 ${95 + i * 2} C180 ${120 - i * 3} 320 ${18 + i * 4} 580 ${69 + i * 2} S970 ${115 - i * 4} 1160 ${45 + i * 3} S1400 ${24 + i * 3} 1520 ${90 + i}`} stroke="url(#ambient-wave-gradient)" strokeWidth=".5" opacity={.22 - i * .016} />)}</g>
            <path className="wave-travelling-light" pathLength="100" d="M-80 100 C120 100 220 -10 440 48 S700 115 860 53 S1100 -22 1230 27 S1430 103 1520 62" stroke="#8bdcff" strokeWidth="1.5" strokeLinecap="round" />
            <path className="wave-travelling-light wave-light-purple" pathLength="100" d="M-80 104 C120 94 220 5 440 57 S700 109 860 59 S1100 -10 1230 36 S1430 100 1520 68" stroke="#b993ff" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <a href="#about" className="hero-explore"><span className="explore-rule" aria-hidden="true" /><span>Discover my work</span><span className="explore-arrow"><FaChevronDown aria-hidden="true" /></span><span className="explore-rule" aria-hidden="true" /></a>
        </div>
      </section>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};
export default Hero;
