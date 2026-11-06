import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
const links = ["home", "about", "education", "skills", "experience", "projects", "certifications", "contact"];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const id of links) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= 150) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = "contact";
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = event => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <nav className={`site-nav${scrolled ? " nav-scrolled" : ""}`} aria-label="Main navigation"><div className="nav-inner">
    <a href="#home" className="nav-brand" onClick={() => setOpen(false)}><span aria-hidden="true">S</span> Sagar</a>
    <ul id="primary-menu" className={`nav-links ${open ? "is-open" : ""}`}>{links.map(link => <li key={link}><a href={`#${link}`} aria-current={active === link ? "location" : undefined} onClick={() => setOpen(false)}>{link}</a></li>)}</ul>
    <a className="nav-resume" href="/S_MANNA_RESUME.pdf" download><FaDownload /> Resume</a>
    <button className="nav-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen(!open)}>{open ? <HiX /> : <HiMenu />}</button>
  </div><motion.div className="nav-reading-progress" style={{ scaleX: scrollYProgress }} /></nav>;
};
export default Navbar;
