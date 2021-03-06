import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/letters.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" required="true" />
          <textarea placeholder="message" required="true"></textarea>
          <button type="submit">send</button>
          {message && <span>I will reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
