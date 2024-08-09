import React, { useState } from "react";
import "./Projects.css";
import { FaReact, FaVuejs } from "react-icons/fa";
import {
  SiBootstrap,
  SiVuetify,
  SiExpress,
  SiRedis,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiApachekafka,
  SiSocketdotio,
  SiAngular,
  SiDocker,
} from "react-icons/si";
import NetFlixDashboard from "../../assets/Netflix/netflix_dashboard.png";
import AmazonDashboard from "../../assets/Amazon/Amzon_Dashboard.png";
import Covid19Dashboard from "../../assets/Covid19/covid19_dashboard.png";
import STT from "../../assets/event-driven/STT.png";
import TTS from "../../assets/event-driven/TTS.png";
import History from "../../assets/event-driven/history.png";

import WeatherForecastDashboard from "../../assets/Weather Forecast/weather_forecast_dashboard.png";

export const Projects = () => {
  let [currentSlide] = useState(0);

  const moveCarousel = (direction) => {
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    items[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + direction + totalItems) % totalItems;

    items[currentSlide].classList.add("active");

    document.querySelector(".carousel-inner").style.transform = `translateX(-${
      currentSlide * 100
    }%)`;
  };

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
                      <a href={TTS} target="_blank" rel="noopener noreferrer">
                        <img src={TTS} alt="Insurance Dashboard" />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a href={STT} target="_blank" rel="noopener noreferrer">
                        <img src={STT} alt="Insurance Providers" />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a
                        href={History}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={History} alt="Insurance Providers" />
                      </a>
                    </div>
                  </div>
                  <a
                    href={() => false}
                    className="carousel-control prev"
                    onClick={() => moveCarousel(-1)}
                  >
                    &#10094;
                  </a>
                  <a
                    href={() => false}
                    className="carousel-control next"
                    onClick={() => moveCarousel(1)}
                  >
                    &#10095;
                  </a>
                </div>
              </div>
              <div className="project_information">
                <h2>Full-Stack Event Driven Architecture</h2>
                <p>
                  A full-stack event-driven application that integrates OpenAI
                  for speech-to-text (STT) and Google Cloud for text-to-speech
                  (TTS) functionalities. This application processes audio input,
                  converts speech to text using OpenAI's advanced models, and
                  then transforms the text back into speech utilizing Google
                  Cloud's TTS services. The system is designed to handle
                  real-time interactions, providing seamless and efficient
                  speech-based communication.
                  <br />
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiApachekafka />
                  <SiSocketdotio />
                  <SiDocker />
                </div>
                <div>
                  <a
                    href="https://github.com/abhibairagi/Event-Driven-Architecture"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
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
                <p>
                  This project "Netflix Clone" is created using
                  MERN(ReactJs,ExpressJs,NodeJs,MongoDB) stack technology and
                  currently I am displaying all the movie content using Netflix
                  API. Whenever user clicks on any movie/series thumbnail, I am
                  playing respective trailer.
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiBootstrap />
                </div>
                <div>
                  <a
                    href="https://netflix-clone-f870e.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/fahad065/Netflix-Clone-Using-React-JS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={WeatherForecastDashboard}
                    alt="Weather Forecast Dashboard"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather Forecast - ReactJs</h2>
                <p>
                  This project "Weather Forecast" is created using ReactJs
                  technology and currently I am getting response based on
                  country wise from open source OpenWeather API and it will show
                  data for upto next 6 days.
                </p>
                <div>
                  <FaReact />
                  <SiBootstrap />
                </div>
                <div>
                  <a
                    href="https://fahad065-weather-app-react.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/fahad065/weather-forecast-app-reactjs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
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
                  This project "Amazon Clone" is created using
                  MEAN(AngularJs,ExpressJs,NodeJs,MongoDB) stack technology and
                  currently I am displaying some of the items and user can "Add
                  to Cart" those items. Payment integration will be live very
                  soon.
                </p>
                <div>
                  <SiAngular />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiBootstrap />
                </div>
                <div>
                  <a
                    href="https://amazon-clone-angular-js.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/fahad065/Amazon-Clone-Using-AngularJS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
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
                  This project "Covid-19 Tracker" is created using Angular Js
                  framework. In this, I am using external global api which will
                  return some of the data like confirmed, active, deaths records
                  as per globally and country wise.
                </p>
                <div>
                  <SiAngular />
                  <SiBootstrap />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://covid19-tracker-angular-js.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/fahad065/Covid-19-Tracker-Using-AngularJS"
                    target="_blank"
                    rel="noreferrer"
                  >
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
  );
};
