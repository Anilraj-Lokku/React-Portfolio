import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import dhoni from "../../assets/dhoni 1.avif";
import { MdCastForEducation } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { GrCertificate } from "react-icons/gr";

const About = () => {
 return (
  <section id="about">
   <h5>Get To Know</h5>
   <h2>About Me</h2>

   <div className="container about__container">
    <div className="about__me">
     <div className="about__me-image">
      <img src={ME} alt="About Image" />
     </div>
    </div>

    <div className="about__content">
     <div className="about__cards">
      <article className="about__card">
       <MdCastForEducation className="about__icon" />
       <h5>Education</h5>
       <small>B.tech</small>
      </article>

      <article className="about__card">
       <GrCertificate className="about__icon" />
       <h5>Certifications</h5>
       <small>HTML CSS Javascript and more..</small>
      </article>

      <article className="about__card">
       <GoProjectSymlink className="about__icon" />
       <h5>Personal Projects</h5>
       <small>To increase Skills</small>
      </article>
     </div>

     <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus enim
      rem, quia vitae sequi saepe, similique sunt eveniet explicabo aperiam ad
      odit vel iure? Non aperiam beatae suscipit numquam odit.
     </p>

     <a href="#contact" className="btn btn-primary">
      Let's Talk
     </a>
    </div>
   </div>
  </section>
 );
};

export default About;
