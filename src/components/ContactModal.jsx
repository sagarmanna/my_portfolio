import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaTimes } from "react-icons/fa";

const ContactModal = ({ isOpen, onClose }) => {
  const dialog = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.querySelector("button")?.focus();
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const items = dialog.current?.querySelectorAll('a[href], button');
      if (!items?.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  return createPortal(<AnimatePresence>{isOpen && (
    <motion.div className="contact-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .18 }} onClick={onClose}>
      <motion.div ref={dialog} className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-title" aria-describedby="contact-description" initial={{ opacity: 0, y: reduced ? 0 : 18, scale: reduced ? 1 : .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: reduced ? 0 : 10 }} transition={{ duration: reduced ? 0 : .22 }} onClick={event => event.stopPropagation()}>
        <button className="contact-dismiss" aria-label="Close contact dialog" onClick={onClose}><FaTimes /></button>
        <div className="contact-person"><img src="/download.jpeg" alt="" /><div><strong>Sagar Manna</strong><span>AI Engineer &amp; Full-Stack Developer</span></div></div>
        <p className="contact-kicker">LET'S START A CONVERSATION</p>
        <h2 id="contact-title">Have something<br />in mind?</h2>
        <p id="contact-description">For opportunities, collaborations, or a conversation about what you're building, get in touch.</p>
        <a className="contact-email" href="mailto:sagarmanna954@gmail.com"><span className="contact-link-icon"><FaEnvelope /></span><span><small>EMAIL ME</small><strong>sagarmanna954@gmail.com</strong></span><FaArrowRight className="contact-arrow" /></a>
        <div className="contact-network">
          <a href="https://github.com/sagarmanna" target="_blank" rel="noopener noreferrer"><FaGithub /><span>GitHub<small>Explore my code</small></span><FaArrowRight className="contact-arrow" /></a>
          <a href="https://www.linkedin.com/in/manna-s/" target="_blank" rel="noopener noreferrer"><FaLinkedin /><span>LinkedIn<small>Let's connect</small></span><FaArrowRight className="contact-arrow" /></a>
        </div>
        <div className="contact-dialog-footer"><span>Based in Gujarat, India</span><button onClick={onClose}>Back to portfolio <span aria-hidden="true">↗</span></button></div>
      </motion.div>
    </motion.div>
  )}</AnimatePresence>, document.body);
};
export default ContactModal;
