import Reveal from "./Reveal";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaExternalLinkAlt, FaDownload, FaExpand, FaTimes } from "react-icons/fa";

const certifications = [
  {
    title: "AWS Academy Graduate - Cloud Operations",
    issuer: "AWS Academy",
    detail: "Training Badge | 40 hours | November 19, 2024",
    file: "/certificates/aws-cloud-operations.pdf",
    verify: "https://www.credly.com/go/O7BNvKvt",
    preview: "/certificates/aws-cloud-operations.png",
  },
  {
    title: "DotNet Full Stack",
    issuer: "Wipro TalentNext",
    detail: "Certificate ID: TNext_SE_25_N_250280070",
    file: "/certificates/wipro-dotnet-full-stack.pdf",
    preview: "/certificates/wipro-dotnet-full-stack.png",
  },
];

const Certifications = () => {
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState(null);
  const viewer = useRef(null);
  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    viewer.current.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);
  return (
    <section id="certifications" className="px-6 md:px-20 py-20">
      <Reveal><h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed">Training and credentials in cloud operations and full-stack development.</p></Reveal>
      <div className="certification-grid">
        {certifications.map(({ title, issuer, detail, file, verify, preview }, index) => (
          <motion.article className="certification-card" key={title} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: reduced ? 0 : .4, delay: reduced ? 0 : index * .1 }}>
            <button className="certificate-preview" onClick={() => setSelected({ title, file, preview })} aria-label={`Enlarge ${title} certificate`}>
              <img src={preview} alt={`${issuer} certificate awarded to Sagar Manna`} loading="lazy" />
              <span className="certificate-preview-label">Inspect certificate <FaExpand aria-hidden="true" /></span>
            </button>
            <div className="certificate-content">
            <span className="certification-issuer">{issuer}</span>
            <h3>{title}</h3>
            <p className="certification-detail">{detail}</p>
            <div className="certification-actions">
              <a href={file} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} certificate (opens in a new tab)`}>View Certificate <FaExternalLinkAlt aria-hidden="true" /></a>
              <a href={file} download aria-label={`Download ${title} certificate`}><FaDownload aria-hidden="true" /> Download</a>
              {verify && <a href={verify} target="_blank" rel="noopener noreferrer">Verify badge <FaExternalLinkAlt aria-hidden="true" /></a>}
            </div>
            </div>
          </motion.article>
        ))}
      </div>
      {selected && <dialog ref={viewer} className="certificate-viewer" aria-label={selected.title} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) viewer.current.close(); }}>
        <div className="certificate-viewer-toolbar"><h3>{selected.title}</h3><a href={selected.file} target="_blank" rel="noopener noreferrer">Open PDF <FaExternalLinkAlt /></a><button onClick={() => viewer.current.close()} aria-label="Close certificate preview"><FaTimes /></button></div>
        <div className="certificate-viewer-document"><img src={selected.preview} alt={selected.title} /></div>
      </dialog>}
    </section>
  );
};
export default Certifications;
