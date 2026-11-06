import { motion, useReducedMotion } from "framer-motion";

const Reveal = ({ children, className }) => {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 1, y: reduced ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: reduced ? 0 : .55, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
};
export default Reveal;
