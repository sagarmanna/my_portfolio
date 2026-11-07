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
              <motion.a whileHover={reduced ? {} : { y: -3 }} className="hero-secondary" href="/S_MANNA_RESUME.pdf" target="_blank" rel="noopener noreferrer" aria-label="View resume (opens in a new tab)"><FaEye /> View Resume</motion.a>
              <motion.a whileHover={reduced ? {} : { y: -3 }} className="hero-secondary" href="/S_MANNA_RESUME.pdf" download><FaDownload /> Download Resume</motion.a>
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
              <linearGradient id="ribbon-color" x1="0" y1="80" x2="1440" y2="80" gradientUnits="userSpaceOnUse"><stop stopColor="#36677c" stopOpacity="0" /><stop offset=".23" stopColor="#6ab5c7" stopOpacity=".5" /><stop offset=".52" stopColor="#7484b3" stopOpacity=".18" /><stop offset=".78" stopColor="#9a89bf" stopOpacity=".45" /><stop offset="1" stopColor="#554b79" stopOpacity="0" /></linearGradient>
              <linearGradient id="ribbon-shade" x1="0" y1="30" x2="0" y2="155" gradientUnits="userSpaceOnUse"><stop stopColor="#739fc3" stopOpacity=".12" /><stop offset="1" stopColor="#070f21" stopOpacity="0" /></linearGradient>
              <filter id="ribbon-soft" x="-10%" y="-100%" width="120%" height="300%"><feGaussianBlur stdDeviation="12" /></filter>
              <path id="ribbon-contour" d="M-80 105 C130 110 195 40 370 62 C560 86 650 133 835 91 C1020 49 1090 31 1240 62 C1370 89 1435 99 1520 81" />
            </defs>
            <use href="#ribbon-contour" stroke="url(#ribbon-color)" strokeWidth="22" opacity=".4" filter="url(#ribbon-soft)" />
            <path d="M-80 105 C130 110 195 40 370 62 C560 86 650 133 835 91 C1020 49 1090 31 1240 62 C1370 89 1435 99 1520 81 L1520 160 L-80 160Z" fill="url(#ribbon-shade)" />
            <use href="#ribbon-contour" stroke="url(#ribbon-color)" strokeWidth=".9" />
            <use href="#ribbon-contour" transform="translate(0 7)" stroke="url(#ribbon-color)" strokeWidth=".5" opacity=".3" />
            <use href="#ribbon-contour" transform="translate(0 18)" stroke="url(#ribbon-color)" strokeWidth=".5" opacity=".12" />
          </svg>
          <a href="#about" className="hero-explore"><span className="explore-rule" aria-hidden="true" /><span>Discover my work</span><span className="explore-arrow"><FaChevronDown aria-hidden="true" /></span><span className="explore-rule" aria-hidden="true" /></a>
        </div>
      </section>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};
export default Hero;
