import React, {useState} from "react";
import "./Projects.css"
import { FaReact, FaVuejs } from "react-icons/fa";
import {
    SiBootstrap,
    SiVuetify,
    SiExpress,
    SiRedis,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiAngular
  } from "react-icons/si";
import NetFlixDashboard from "../../assets/Netflix/netflix_dashboard.png";
import AmazonDashboard from "../../assets/Amazon/Amzon_Dashboard.png";
import Covid19Dashboard from "../../assets/Covid19/covid19_dashboard.png";
import InsuranceDashboard from "../../assets/Insurance/insurance_dashboard.png"
import InsuranceFinance from "../../assets/Insurance/insurance_finance.png"
import InsuranceRequests from "../../assets/Insurance/insurance_requests.png"
import InsuranceCycles from "../../assets/Insurance/insurance_cycles.png"
import InsuranceCategories from "../../assets/Insurance/insurance_categories.png"
import InsuranceProviders from "../../assets/Insurance/insurance_providers.png"

export const Projects = () => {

    let [currentSlide] = useState(0);

    const moveCarousel = (direction) => {
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        items[currentSlide].classList.remove('active');

        currentSlide = (currentSlide + direction + totalItems) % totalItems;

        items[currentSlide].classList.add('active');

        document.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    return (
        <>
            <div className="section">
                <h2 className="section__title different">Projects</h2>
                <div className="allProjects">
                <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div className="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <a href={InsuranceDashboard} target="_blank" rel="noopener noreferrer">
                                                <img src={InsuranceDashboard} alt="Insurance Dashboard" />
                                            </a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href={InsuranceProviders} target="_blank" rel="noopener noreferrer">
                                                <img src={InsuranceProviders} alt="Insurance Providers" />
                                            </a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href={InsuranceCategories} target="_blank" rel="noopener noreferrer">
                                                <img src={InsuranceCategories} alt="Insurance Categories" />
                                            </a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href={InsuranceCycles} target="_blank" rel="noopener noreferrer">
                                                <img src={InsuranceCycles} alt="Insurance Cycles" />
                                            </a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href={InsuranceRequests} target="_blank" rel="noopener noreferrer">
                                                <img src={InsuranceRequests} alt="Insurance Requests" />
                                            </a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href={InsuranceFinance} target="_blank" rel="noopener noreferrer">
                                                <img src={InsuranceFinance} alt="Insurance Finance" />
                                            </a>
                                        </div>
                                    </div>
                                    <a className="carousel-control prev" onClick={() => moveCarousel(-1)} >&#10094;</a>
                                    <a className="carousel-control next" onClick={() => moveCarousel(1)}>&#10095;</a>
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Insurance Portal - MEVN Stack</h2>
                                <p>
                                    Providing comprehensive insurance coverage to all employees, including principal members and their dependents, across various departments. 
                                    Effectively managing diverse insurance requests such as enrollment, cancellation, and upgrade requests. 
                                    Handling invoice calculations for both suppliers and clients. 
                                    Integrating configurable features such as request process flows, notification triggers, and bulk insurance card uploads to streamline operations.<br />
                                    {" "} <span className="different">Note:</span> Due to company policy, I am unable to share the GitHub repository or live URL. However, I have attached sample screenshots that demonstrate the Portal's appearance and functionality for your reference.
                                </p>
                                <div>
                                    <FaVuejs />
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiVuetify />
                                    <SiRedis />
                                </div>
                                {/* <div>
                                    <a href="https://drive-system.herokuapp.com/user/" target="_blank" rel="noreferrer" disable>
                                        <span type="button" className="btns onbt onbt">URL for the API</span>
                                    </a>
                                    <a href="https://github.com/imbickydutta/file-system-backend" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">View Code</span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={NetFlixDashboard} alt="Netflix Dashboard" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Netflix Clone - MERN Stack</h2>
                                <p>This project "Netflix Clone" is created using MERN(ReactJs,ExpressJs,NodeJs,MongoDB) stack technology and currently I am displaying all the movie content using Netflix API. Whenever user clicks on any movie/series thumbnail, I am playing respective trailer.</p>
                                <div>
                                    <FaReact />
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiBootstrap />
                                </div>
                                <div>
                                    <a href="https://netflix-clone-f870e.web.app/" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt onbt">See this Live</span>
                                    </a>
                                    <a href="https://github.com/fahad065/Netflix-Clone-Using-React-JS" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={AmazonDashboard} alt="Amazon Dashboard" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Amazon Clone - MEAN Stack</h2>
                                <p>
                                    This project "Amazon Clone" is created using MEAN(AngularJs,ExpressJs,NodeJs,MongoDB) stack technology and currently I am displaying some of the items and user can "Add to Cart" those items. Payment integration will be live very soon.
                                </p>
                                <div>
                                    <SiAngular />
                                    <SiNodedotjs />
                                    <SiExpress />
                                    <SiMongodb />
                                    <SiBootstrap />
                                </div>
                                <div>
                                    <a href="https://amazon-clone-angular-js.netlify.app/" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">See this Live</span>
                                    </a>
                                    <a href="https://github.com/fahad065/Amazon-Clone-Using-AngularJS" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects_container" data-aos="fade-right">
                        <div className="project">
                            <div className="project_videocontainer">
                                <div>
                                    <img src={Covid19Dashboard} alt="Covid19 Dashboard" />
                                </div>
                            </div>
                            <div className="project_information">
                                <h2>Covid-19 Tracker - AngularJs</h2>
                                <p>
                                    This project "Covid-19 Tracker" is created using Angular Js framework. In this, I am using external global api which will return some of the data like confirmed, active, deaths records as per globally and country wise. 
                                </p>
                                <div>
                                    <SiAngular />
                                    <SiBootstrap />
                                    <SiJavascript />
                                </div>
                                <div>
                                    <a href="https://covid19-tracker-angular-js.netlify.app/" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">See this Live</span>
                                    </a>
                                    <a href="https://github.com/fahad065/Covid-19-Tracker-Using-AngularJS" target="_blank" rel="noreferrer">
                                        <span type="button" className="btns onbt">
                                            View Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}