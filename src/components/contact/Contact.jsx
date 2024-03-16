import React from "react";
import "./contact.css";
import { IoMdMail } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
 const form = useRef();
 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
   "service_sfjg78i",
   "template_jnw2ct5",
   form.current,
   "XnmBqK-AloVHWX1tN"
  );
  e.target.reset();
 };

 return (
  <section id="contact">
   <h5>Get In Touch</h5>
   <h2>Hire Me </h2>

   <div className="container contact__container">
    <div className="contact__options">
     <article className="contact__option">
      <IoMdMail className="contact__option-icon" />
      <h4>Mail</h4>
      <h5>anilrajlokku1810@gmail.com</h5>
      <a href="mailto:anilrajlokku1810@gmail.com" target="_blank">
       Sent a Message
      </a>
     </article>

     <article className="contact__option">
      <FaInstagramSquare className="contact__option-icon" />
      <h4>Instagram Messenger</h4>
      <h5>Anilraj Lokku</h5>
      <a
       href="https://www.instagram.com/_anil_raj_lokku_/?hl=en"
       target="_blank"
      >
       Sent a Message
      </a>
     </article>

     <article className="contact__option">
      <RiWhatsappFill className="contact__option-icon" />
      <h4>WhatsApp</h4>
      <h5>Click The Link To Message me</h5>
      <a
       href="https://api.whatsapp.com/send?phone=919959860597"
       target="_blank"
      >
       Sent a Message
      </a>
     </article>
    </div>

    <form ref={form} onSubmit={sendEmail}>
     <input type="text" name="name" placeholder="Your Full Name" required />
     <input type="text" name="email" placeholder="Your Email" />
     <textarea
      name="message"
      rows="7"
      placeholder="Your Message"
      required
     ></textarea>
     <button type="Submit" className="btn btn-primary">
      Send Message
     </button>
    </form>
   </div>
  </section>
 );
};

export default Contact;
