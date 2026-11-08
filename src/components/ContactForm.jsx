import { createSubmissionGuard } from "../lib/submissionGuard";
import { useEffect, useRef, useState } from "react";
import { sendContactMessage } from "../lib/sendContactMessage";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaRegEnvelope, FaReply, FaCheck } from "react-icons/fa";

const ContactForm = () => {
  const reduced = useReducedMotion();
  const [status, setStatus] = useState("idle");
  const request = useRef(null);
  const [claimSubmission] = useState(() => createSubmissionGuard());
  useEffect(() => () => request.current?.abort(), []);
  const submit = async event => {
    event.preventDefault();
    if (request.current) return;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    if (!claimSubmission(fields)) {
      setStatus("duplicate");
      return;
    }
    const controller = new AbortController();
    request.current = controller;
    setStatus("sending");
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      await sendContactMessage(fields, { signal: controller.signal });
      if (controller.signal.aborted) return;
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
      request.current = null;
    }
  };
  return (
  <form className="message-form" action="https://formsubmit.co/sagarmanna954@gmail.com" method="POST" onSubmit={submit} onChange={() => { if (status === "success" || status === "error" || status === "duplicate") setStatus("idle"); }} aria-busy={status === "sending"} aria-labelledby="message-form-title">
    <header className="message-form-heading"><span className="message-form-icon" aria-hidden="true"><FaRegEnvelope /></span><div><span className="message-form-eyebrow">DIRECT MESSAGE</span><h3 id="message-form-title">Send a message</h3><p>Let's talk about what you have in mind.</p></div></header>
    <input type="hidden" name="_subject" value="New message from your portfolio" />
    <input type="hidden" name="_template" value="box" />
    <div className="message-form-fields">
      <label htmlFor="message-name">Your name<input id="message-name" name="name" type="text" readOnly={status === "sending"} autoComplete="name" placeholder="Full name" required maxLength={100} /></label>
      <label htmlFor="message-email">Your email<input id="message-email" name="email" type="email" readOnly={status === "sending"} autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
    </div>
    <label htmlFor="message-body">Message<textarea id="message-body" name="message" readOnly={status === "sending"} rows={3} placeholder="How can I help? Share a few details..." required minLength={10} maxLength={5000} /></label>
    <div className="message-form-bottom"><p><FaReply aria-hidden="true" /> Replies go to your email.</p><Motion.button type="submit" disabled={status === "sending"} whileHover={reduced ? undefined : { y: -2 }} whileTap={reduced ? undefined : { scale: .985, y: 2 }} transition={{ type: "spring", stiffness: 450, damping: 28 }}>{status === "sending" ? "Sending..." : "Send message"} <span className="send-button-arrow" aria-hidden="true"><Motion.span key={status} className="send-arrow-motion" animate={!reduced && status === "sending" ? { x: [0, 20, -20, 0], opacity: [1, 0, 0, 1] } : { x: 0, opacity: 1 }} transition={{ duration: .65, times: [0, .45, .5, 1], repeat: status === "sending" && !reduced ? Infinity : 0, repeatDelay: .4 }}>{status === "success" ? <FaCheck /> : <FaArrowRight />}</Motion.span></span></Motion.button></div>
    <div className={`message-form-status message-form-status-${status}`} role="status" aria-live="polite" aria-atomic="true">
      {status === "duplicate" && "This message was just submitted. Please wait one minute before sending the same message again."}
      {status === "sending" && "Sending your message. Please wait..."}
      {status === "success" && <><FaCheck aria-hidden="true" /><span>Your message was sent successfully. Thanks for reaching out!</span></>}
      {status === "error" && <span>We could not confirm your message was sent. It may already have reached the recipient. Please wait one minute before retrying, or <a href="mailto:sagarmanna954@gmail.com">email me directly</a>.</span>}
    </div>
  </form>
);
};

export default ContactForm;
