import React from "react";
import "./Contact.css"
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export const Contact = () => {
    const [{ themename }] = React.useContext(ThemeContext);

    return (
        <>
            <div className="section">
                <h2 className="section__title" data-aos="fade-right">
                    Get in <span className="different">Touch</span>
                </h2>
                <div className="contactMain">
                    <div className={"contactcontainer " + themename} data-aos="fade-right" >
                        <a href="https://www.linkedin.com/in/fahadfaheem" target="_blank" rel="noreferrer">
                            <FaLinkedin className="linkedin" />
                        </a>
                        <a href="https://github.com/fahad065" target="_blank" rel="noreferrer">
                            <VscGithub className="github" />
                        </a>
                        <a href="https://www.instagram.com/mohammed_fahad065?igsh=a2dwNGoyeXMxZTZ4&utm_source=qr" target="_blank" rel="noreferrer">
                            <BsInstagram className="instagram" />
                        </a>
                        <a href="https://twitter.com/fahadabdulfahe1" target="_blank" rel="noreferrer">
                            <FaTwitter className="twitter" />
                        </a>
                        <a href="mailto:mohammedfahad065@gmail.com" target="_blank" rel="noreferrer">
                            <CgMail className="email" />
                        </a>
                        <a href="tel:+971581249989" target="_blank" rel="noreferrer">
                            <BsFillTelephoneFill className="phone" />
                        </a>
                    </div>
                    <div className="mailNumber" data-aos="fade-right">
                        <div>
                            <span>
                                <CgMail className="email" />
                            </span>
                            <span>
                                <p>mohammedfahad065@gmail.com</p>
                            </span>
                        </div>
                        <div className="iconsCont">
                            <span>
                                <BsFillTelephoneFill className="phone" />
                            </span>
                            <span>
                                <p>+971 58 124 9989</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}