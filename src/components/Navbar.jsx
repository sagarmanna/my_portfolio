import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
const links = ["home", "about", "education", "skills", "experience", "projects", "certifications", "contact"];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const pendingTarget = useRef(null);
  const releaseTimer = useRef(null);
  const selectSection = (event, id) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    pendingTarget.current = id;
    setActive(id);
    setOpen(false);
    clearTimeout(releaseTimer.current);
    releaseTimer.current = setTimeout(() => {
      pendingTarget.current = null;
      window.dispatchEvent(new Event("scroll"));
    }, 1800);
  };
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1101px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      if (pendingTarget.current) {
        setActive(pendingTarget.current);
        return;
      }
      const activationTop = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) + 4;
      let current = "home";
      for (const id of links) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= activationTop) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = "contact";
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const releaseTarget = () => {
      pendingTarget.current = null;
      clearTimeout(releaseTimer.current);
      onScroll();
    };
    const onKey = event => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) releaseTarget();
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("scrollend", releaseTarget);
    window.addEventListener("wheel", releaseTarget, { passive: true });
    window.addEventListener("touchstart", releaseTarget, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(releaseTimer.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scrollend", releaseTarget);
      window.removeEventListener("wheel", releaseTarget);
      window.removeEventListener("touchstart", releaseTarget);
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = event => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <nav className={`site-nav${scrolled ? " nav-scrolled" : ""}`} aria-label="Main navigation"><div className="nav-inner">
    <a href="#home" className="nav-brand" onClick={event => selectSection(event, "home")}><span aria-hidden="true">S</span> Sagar</a>
    <ul id="primary-menu" className={`nav-links ${open ? "is-open" : ""}`}>{links.map(link => <li key={link}><a href={`#${link}`} aria-current={active === link ? "location" : undefined} onClick={event => selectSection(event, link)}>{link}{active === link && <motion.span className="nav-active-indicator" layoutId={reduced ? undefined : "nav-active-indicator"} initial={false} transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 34 }} aria-hidden="true" />}</a></li>)}</ul>
    <a className="nav-resume" href="/S_MANNA_RESUME.pdf" download><FaDownload /> Resume</a>
    <button className="nav-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen(!open)}>{open ? <HiX /> : <HiMenu />}</button>
  </div><motion.div className="nav-reading-progress" style={{ scaleX: scrollYProgress }} /></nav>;
};
export default Navbar;
