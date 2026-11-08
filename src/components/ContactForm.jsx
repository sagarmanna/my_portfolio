import { FaArrowRight, FaRegEnvelope, FaReply } from "react-icons/fa";

const ContactForm = () => (
  <form className="message-form" action="https://formsubmit.co/sagarmanna954@gmail.com" method="POST" aria-labelledby="message-form-title">
    <header className="message-form-heading"><span className="message-form-icon" aria-hidden="true"><FaRegEnvelope /></span><div><h3 id="message-form-title">Send a message</h3><p>Let's talk about what you have in mind.</p></div></header>
    <input type="hidden" name="_subject" value="New message from your portfolio" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_next" value={`${window.location.origin}/thanks.html`} />
    <div className="message-form-fields">
      <label htmlFor="message-name">Your name<input id="message-name" name="name" type="text" autoComplete="name" placeholder="Full name" required maxLength={100} /></label>
      <label htmlFor="message-email">Your email<input id="message-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
    </div>
    <label htmlFor="message-body">Message<textarea id="message-body" name="message" rows={3} placeholder="How can I help? Share a few details..." required minLength={10} maxLength={5000} /></label>
    <div className="message-form-bottom"><p><FaReply aria-hidden="true" /> Replies go to your email.</p><button type="submit">Send message <FaArrowRight aria-hidden="true" /></button></div>
  </form>
);

export default ContactForm;
