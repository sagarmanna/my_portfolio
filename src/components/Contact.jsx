import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
const Contact = () => {
  const reduced = useReducedMotion();
  return <section id="contact" className="contact-section" aria-labelledby="contact-heading">
    <motion.div className="contact-section-inner" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: reduced ? 0 : .5 }}>
      <div className="contact-intro"><span className="contact-section-label">GET IN TOUCH</span><h2 id="contact-heading">Great things start<br />with a <span>conversation.</span></h2><p>Have an opportunity, a project idea, or a technical challenge? I'd love to hear what you're working on.</p><a className="contact-write" href="mailto:sagarmanna954@gmail.com">Let's talk <FaArrowRight aria-hidden="true" /></a></div>
      <div className="contact-methods">
        <a className="contact-method" href="mailto:sagarmanna954@gmail.com"><span className="contact-method-icon"><FaEnvelope aria-hidden="true" /></span><span className="contact-method-text"><small>EMAIL</small><strong>sagarmanna954@gmail.com</strong><span>For opportunities and collaborations</span></span><FaArrowRight className="contact-method-arrow" aria-hidden="true" /></a>
        <a className="contact-method" href="tel:+918509031202"><span className="contact-method-icon"><FaPhone aria-hidden="true" /></span><span className="contact-method-text"><small>PHONE</small><strong>+91 8509031202</strong><span>Connect directly</span></span><FaArrowRight className="contact-method-arrow" aria-hidden="true" /></a>
        <div className="contact-social-links"><a href="https://github.com/sagarmanna" target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /><span>GitHub<small>Explore my code</small></span><FaArrowRight aria-hidden="true" /></a><a href="https://www.linkedin.com/in/manna-s/" target="_blank" rel="noopener noreferrer"><FaLinkedin aria-hidden="true" /><span>LinkedIn<small>Let's connect</small></span><FaArrowRight aria-hidden="true" /></a></div>
      </div>
    </motion.div>
  </section>;
};
export default Contact;
