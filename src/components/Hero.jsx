import { useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload, FaEye, FaChevronDown, FaEnvelope, FaMicrochip, FaCode, FaLayerGroup } from "react-icons/fa";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const heroRef = useRef(null);
  const heroVisible = useInView(heroRef, { amount: .05 });
  const reveal = delay => ({
    initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : .65, delay: reduced ? 0 : delay, ease: [.22, 1, .36, 1] },
  });
  return (
    <>
      <section ref={heroRef} id="home" className={`hero-stage${heroVisible ? " hero-visible" : ""}`}>
        <div className="hero-layout">
          <motion.div className="hero-copy" initial={{ opacity: 1, y: reduced ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .7 }}>
            <h1 aria-label="Hi, I'm Sagar. I build intelligence into experiences.">
              {["Hi, I'm Sagar.", "I build intelligence", "into experiences."].map((line, index) => (
                <span className="headline-line" key={line} aria-hidden="true"><motion.span className={index ? "headline-gradient" : "headline-intro"} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : "105%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .8, delay: reduced ? 0 : index * .16, ease: [.22, 1, .36, 1] }}>{line}</motion.span></span>
              ))}
            </h1>
            <motion.p className="hero-description" {...reveal(.4)}>I build voice and language systems, reliable Python APIs, and web applications people can use. My work connects AI models with practical products.</motion.p>
            <motion.ul className="hero-tags" {...reveal(.52)}><li><FaMicrochip /> AI Engineering</li><li><FaCode /> Full-Stack Development</li><li><FaLayerGroup /> Agentic AI</li></motion.ul>
            <motion.div className="hero-actions" {...reveal(.64)}>
              <motion.button whileHover={reduced ? {} : { y: -3 }} whileTap={{ scale: .98 }} className="hero-primary" onClick={() => setOpen(true)}>Let's Connect <FaArrowRight /></motion.button>
              <motion.a whileHover={reduced ? {} : { y: -3 }} className="hero-secondary" data-sound="on" href="/S_MANNA_RESUME.pdf" target="_blank" rel="noopener noreferrer" aria-label="View resume (opens in a new tab)"><FaEye /> View Resume</motion.a>
              <motion.a whileHover={reduced ? {} : { y: -3 }} className="hero-secondary" data-sound="on" href="/S_MANNA_RESUME.pdf" download><FaDownload /> Download Resume</motion.a>
            </motion.div>
            <motion.div className="hero-socials" {...reveal(.76)}>
              <a aria-label="Sagar Manna on GitHub" href="https://github.com/sagarmanna" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a aria-label="Sagar Manna on LinkedIn" href="https://www.linkedin.com/in/manna-s/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a aria-label="Email Sagar Manna" href="mailto:sagarmanna954@gmail.com"><FaEnvelope /></a>
            </motion.div>
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
          <svg className="ambient-wave" viewBox="0 0 1440 160" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="ribbon-light" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#43879f" stopOpacity="0" /><stop offset=".2" stopColor="#94dfed" stopOpacity=".65" /><stop offset=".48" stopColor="#547dba" stopOpacity=".08" /><stop offset=".78" stopColor="#b8a5e1" stopOpacity=".6" /><stop offset="1" stopColor="#6865a4" stopOpacity="0" /></linearGradient>
              <linearGradient id="ribbon-material" x1="0" y1=".1" x2=".15" y2="1"><stop stopColor="#8bbfd4" stopOpacity=".02" /><stop offset=".28" stopColor="#70b9d5" stopOpacity=".2" /><stop offset=".46" stopColor="#627fba" stopOpacity=".1" /><stop offset=".7" stopColor="#8a7cbf" stopOpacity=".04" /><stop offset="1" stopColor="#070f21" stopOpacity="0" /></linearGradient>
              <radialGradient id="ribbon-reflection"><stop stopColor="#9db9ed" stopOpacity=".12" /><stop offset="1" stopColor="#070f21" stopOpacity="0" /></radialGradient>
              <filter id="ribbon-soft" x="-10%" y="-100%" width="120%" height="300%"><feGaussianBlur stdDeviation="8" /></filter>
              <path id="ribbon-contour" d="M-80 88 C130 96 220 20 400 47 C590 77 665 113 850 74 C1030 36 1120 16 1280 46 C1400 69 1450 78 1520 63" />
            </defs>
            <ellipse cx="310" cy="80" rx="340" ry="55" fill="url(#ribbon-reflection)" />
            <ellipse cx="1130" cy="65" rx="310" ry="55" fill="url(#ribbon-reflection)" />
            <path d="M-80 65 C180 12 370 130 640 88 S1100 15 1520 102" stroke="url(#ribbon-light)" strokeWidth=".7" opacity=".18" />
            <use href="#ribbon-contour" stroke="url(#ribbon-light)" strokeWidth="12" opacity=".45" filter="url(#ribbon-soft)" />
            <path d="M-80 88 C130 96 220 20 400 47 C590 77 665 113 850 74 C1030 36 1120 16 1280 46 C1400 69 1450 78 1520 63 L1520 103 C1370 129 1150 39 1000 77 C780 146 620 112 410 74 C220 40 120 118 -80 112Z" fill="url(#ribbon-material)" />
            <use href="#ribbon-contour" stroke="url(#ribbon-light)" strokeWidth="1.2" />
            <path d="M-80 101 C125 112 225 32 405 61 C590 91 670 125 855 86 C1030 48 1125 30 1280 60 C1400 83 1450 91 1520 77" stroke="url(#ribbon-light)" strokeWidth=".6" opacity=".2" />
          </svg>
          <a href="#about" className="hero-explore"><span className="explore-rule" aria-hidden="true" /><span>Discover my work</span><span className="explore-arrow"><FaChevronDown aria-hidden="true" /></span><span className="explore-rule" aria-hidden="true" /></a>
        </div>
      </section>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};
export default Hero;
