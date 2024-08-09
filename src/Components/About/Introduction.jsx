import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/profile.jpg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              {/* <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Abhishek Bairagi </span> and I am
                based in <span className="different"> Mumbai, India.</span>. I
                have more than <span className="different"> 3.5 years </span>{" "}
                years of Experience as a Full Stack Developer . I am proficient
                in a variety of technologies including populer front-end
                frameworks like{" "}
                <span className="different">Vue.Js and React.Js</span>, and
                along side with <span className="different">Node , Golang</span>{" "}
                for server-side development and{" "}
                <span className="different">MongoDB, PostgreSql</span> for
                database management . My Experience extends beyond care
                development to{" "}
                <span className="different">
                  GIT- Version Control, TCP protocols and front-end optimization
                  techniques
                </span>
                . I am also proficient in essential web development languages
                like <span className="different">HTML5, CSS3, JavaScript</span>{" "}
                and modern tools like{" "}
                <span className="different">ES65 and Webpack</span>.
              </h4> */}
              <h4>
                I’m a passionate Full Stack Developer with a robust track record
                of delivering innovative solutions across diverse domains.
                Currently, at{" "}
                <span className="different">Nathan & Nathan in Dubai</span>,
                I’ve spearheaded the development of scalable SaaS products,
                employing{" "}
                <span className="different">
                  microservices & Event-driven architectures{" "}
                </span>
                to cater to varied client needs. My expertise spans across
                integrating complex{" "}
                <span className="different"> third-party services </span>and
                optimizing performance through meticulous{" "}
                <span className="different"> stress testing.</span>
                Previously, at Marefa Digital, I crafted an engaging EdTech
                platform and a dynamic social community, leveraging React and
                Node.js. With a solid foundation from roles at Cignex Datamatics
                and Shop the World, I blend deep technical skills with a
                <span className="different"> collaborative approach </span>to
                drive impactful results
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>

              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Chess Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Trader{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Swimming{" "}
              </h4>
              {/* <h4 className="different">
                                <span className="icons">
                                    <ExitToAppIcon />
                                </span>
                                Content Writer{" "}
                            </h4> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
