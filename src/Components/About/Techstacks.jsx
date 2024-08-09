import React from "react";
import "./Techstacks.css";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaVuejs,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiExpress,
  SiRedis,
  SiApachekafka,
  SiDocker,
  SiSocketdotio,
  SiKubernetes,
  SiNextdotjs,
  SiGooglecloud,
} from "react-icons/si";
import { DiCss3, DiMongodb, DiPostgresql, DiGo } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <FaHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <FaCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>Next</h5>
          </div>
          <div>
            <FaVuejs />
            <h5>Vue</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <DiGo />
            <h5>Golang</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <DiPostgresql />
            <h5>PostgreSql</h5>
          </div>
          <div>
            <FaAws />
            <h5>AWS</h5>
          </div>

          <div>
            <SiRedis />
            <h5>Redis</h5>
          </div>
          <div>
            <SiSocketdotio />
            <h5>Web Socket</h5>
          </div>
          <div>
            <SiApachekafka />
            <h5>Kafka</h5>
          </div>
          <div>
            <SiDocker />
            <h5>Docker</h5>
          </div>
          <div>
            <SiKubernetes />
            <h5>Kubernetes</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
