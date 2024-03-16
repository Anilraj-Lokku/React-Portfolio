import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Dashboard.png";
import IMG2 from "../../assets/Example1.png";
import IMG3 from "../../assets/AirbnbClone.png";
import IMG4 from "../../assets/screenshot.jpg";
import IMG5 from "../../assets/Wearther.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Responsive Admin Dashboard & Details",
    github: "https://github.com/Anilraj-Lokku",
    demo: "https://project-dashboard-inky.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "React Js Ecommerce Dashboard",
    github: "https://github.com/Anilraj-Lokku/React-Dashboard",
    demo: "https://anil-react-ecommerce-dashboard.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "MERN Airbnb Clone",
    github: "https://github.com/Anilraj-Lokku/MERN-Project",
    demo: "https://anil-booking-app.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Modern Login Page",
    github: "https://github.com/Anilraj-Lokku/Login-Page",
    demo: "https://anil-login-page.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Responsive Admin Dashboard & Details",
    github: "https://github.com/Anilraj-Lokku",
    demo: "https://anilraj-lokku.github.io/Project-Dashboard/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Weather App Using HTML CSS and JavaScript and API",
    github: "https://github.com/Anilraj-Lokku/weather-app",
    demo: "https://anilraj-lokku.github.io/weather-app/",
  },
];

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
