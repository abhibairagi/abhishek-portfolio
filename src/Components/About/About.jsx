import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import Abhishek from "../../assets/pdf/Fahad CV.pdf";
export const About = () => {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1Drr9to6N6O5V9R5Ks_BEFIx3sjUPnrN8/view",
      "_blank"
    );
  };

  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Abhishek Bairagi</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer having Proficiency in
          front-end technologies like JavaScript,React,and Vue along with Node
          Js,Golang, Redis, Kafka, Docker, Kubernetes, CI/CD for server-side
          development and MongoDB/PostgreSQL for database management.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/abhibairagi"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:abhibairagi1@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919967930611"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-bairagi-165392171/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <button className="btnResume" onClick={openResume}>
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
