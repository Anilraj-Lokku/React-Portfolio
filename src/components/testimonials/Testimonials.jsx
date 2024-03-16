import React from "react";
import "./testimonials.css";
import { MdCastForEducation } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Educations & Certifications</h2>

      <div className="container education__container">
        <div className="education__background">
          <h3>Education</h3>
          <div className="education__content">
            <article className="education__detail">
              <MdCastForEducation className="education__detail-icon" />
              <div>
                <h4>B.tech</h4>
                <small className="text-light">
                  Completed B.tech in Raghu Engineering College
                </small>
              </div>
            </article>

            <article className="education__detail">
              <MdCastForEducation className="education__detail-icon" />
              <div>
                <h4>B.tech</h4>
                <small className="text-light">
                  Completed B.tech in Raghu Engineering College
                </small>
              </div>
            </article>

            <article className="education__detail">
              <MdCastForEducation className="education__detail-icon" />
              <div>
                <h4>B.tech</h4>
                <small className="text-light">
                  Completed B.tech in Raghu Engineering College
                </small>
              </div>
            </article>
          </div>
        </div>

        <div className="education__background">
          <h3>Certifications</h3>
          <div className="education__content">
            <article className="education__detail">
              <GrCertificate className="education__detail-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">
                  Gained Certifications Through Infosys Springboard
                </small>
              </div>
            </article>

            <article className="education__detail">
              <GrCertificate className="education__detail-icon" />
              <div>
                <h4>Web Development</h4>
                <small className="text-light">
                  Certifications Done in HTML, CSS, JavaScript
                </small>
              </div>
            </article>

            <article className="education__detail">
              <GrCertificate className="education__detail-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">
                  Completed Java Certification Through Udemy
                </small>
              </div>
            </article>
          </div>
        </div>

        <div className="education__background">
          <h3>Internship</h3>
          <div className="education__content">
            <article className="education__detail">
              <GrCertificate className="education__detail-icon" />
              <div>
                <h4>OasisInfoByte</h4>
                <small className="text-light">
                  Performed some web developement tasks in the Internships
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
