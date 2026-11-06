import Reveal from "./Reveal";
import { FaArrowUp } from "react-icons/fa";
const Footer = () => (
  <footer className="site-footer"><Reveal className="footer-inner"><a href="#home" className="footer-brand">Sagar<span>.</span></a><p>© {new Date().getFullYear()} Sagar Manna. All rights reserved.</p><a href="#home" className="footer-top">Back to top <FaArrowUp aria-hidden="true" /></a></Reveal></footer>
);
export default Footer;
