import React from "react";
import "./About.css"
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {
    return (
        <>
            <div className="about center">
                <h1 data-aos="fade-right" className="mobileHead">
                    Hello, I am <span className="about__name">Fahad Abdul Faheem</span>
                </h1>
                <Type />
                <p className="about__desc" data-aos="fade-right">
                    Passionate and creative Full Stack Developer having Proficiency in front-end technologies like Vue.Js, Angular.Js and React.Js along with Node.Js for server-side development and MongoDb/MySQL for database management.
                </p>
                <div className="about__contact center">
                    <a href="https://github.com/fahad065" aria-label="github" target="_blank" rel="noreferrer" className="link link--icon">
                        <GitHubIcon />
                    </a>
                    <a href="mailto:mohammedfahad065@gmail.com" target="_blank" rel="noreferrer" aria-label="mail" className="link link--icon">
                        <EmailIcon />
                    </a>
                    <a href="tel:+971581249989" target="_blank" rel="noreferrer" aria-label="phone" className="link link--icon">
                        <PhoneIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/fahadfaheem" aria-label="linkedin" className="link link--icon" target="_blank" rel="noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href="https://twitter.com/fahadabdulfahe1" aria-label="twitter" className="link link--icon" target="_blank" rel="noreferrer">
                        <TwitterIcon />
                    </a>
                </div>
                <button className="btnResume" onClick={() => { window.open("https://www.canva.com/design/DAGHMoRSex4/k1ofoRNWHOGUf6a55TcODA/view"); }}>Resume</button>
            </div>
            <Introduction />
            <Timeline />
            <section id="#skills">
                <Techstacks />
            </section>
        </>
    )
};