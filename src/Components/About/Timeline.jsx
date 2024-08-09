import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);

  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"Jun 2022 - June 2024"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Nathan & Nathan - Dubai, UAE
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Full Stack Developer
            </h4>
            <p data-aos="fade-right">
              Developed a cutting-edge SaaS solution encompassing ATS, PRO
              Services, and HRMS for our ERP, designed for broad client
              application. Engineered a robust microservices and event-driven
              architecture, ensuring scalability and customization for diverse
              needs. Conducted rigorous stress testing and optimized APIs with
              advanced token-based security to safeguard against breaches.
              Seamlessly integrated with third-party applications such as Google
              SSO, CalendarAPI, and Evalufy, while managing the entire SDLC
              using Jira and Git. Utilized a tech stack including React.js,
              Vue.js, Node.js, Express, Redis, Kafka, Docker, Kubernetes to
              deliver a high-performance, scalable product
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Jan 2022 - June 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Marefa Digital - Dubai, UAE
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Full Stack Developer
            </h4>
            <p data-aos="fade-right">
              Developed an innovative Edtech web platform enabling users to
              learn Arabic through interactive video and audio courses.
              Contributed to both backend and frontend, creating a dynamic
              social platform where users can engage, build communities, and
              share multimedia content. Crafted reusable, responsive React UI
              components, integrated third-party libraries like Chart.js, and
              built high-performance REST APIs. Collaborated with engineers for
              brainstorming, debugging, and code reviews while managing the SDLC
              with Jira and Git
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"May 2021 - Nov 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Cignex Datamatics - Mumbai, India
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Sofware Developer
            </h4>
            <p data-aos="fade-right">
              Designed and developed an efficient Organization Chart with
              seamless API integration, enhancing company hierarchy
              visualization. Optimized a Requests Management Portal, boosting
              speed by 30%, and contributed to both frontend and backend for a
              Sales Matrix solution using Python on AWS. Gained hands-on
              experience in CRM projects and developed a no-code/low-code
              frontend platform for dynamic FAQ page management. Collaborated
              effectively in Agile teams, honing skills in software design,
              architecture, and team communication.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"May 2021 - Nov 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Shop the World - Mumbai, India
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Sofware Developer (Intern)
            </h4>
            <p data-aos="fade-right">
              Built a dynamic e-commerce web application using the MERN stack,
              leveraging React.js for a seamless frontend and Node.js with
              Express for robust backend functionality. Developed RESTful APIs
              to manage product listings, creation, and order processing, with
              MongoDB for efficient data storage and schema design. Ensured
              application reliability and performance through comprehensive unit
              and end-to-end testing using Jest and Supertest.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"2017 - 2021"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Bachelor of Computer Engineering - B.Tech(Graduate)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Mumbai University
            </h4>
            {/* <p data-aos="fade-right">
                        Joined the Military coding school to learn Full Stack Development
                        and DSA. Also get to learn lot more other skills as well.
                        </p> */}
          </VerticalTimelineElement>

          {/* <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"Feb 2020 - Present"}
                        contentStyle={{
                        boxShadow: `var(--shadow)`,
                        border: "3px solid var(--clr-primary)",
                        backgroundColor: `var(--clr-bg)`,
                        textAlign: "center",
                        color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                        borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                        border: ` 3px solid var(--clr-primary)`,
                        backgroundColor: `var(--clr-bg)`,
                        color: `var(--clr-primary)`,
                        }}
                        icon={<WorkIcon />}
                    >
                        <h3
                        className="vertical-timeline-element-title"
                        data-aos="fade-right"
                        >
                        Co-founder
                        </h3>
                        <h4
                        className="vertical-timeline-element-subtitle"
                        data-aos="fade-right"
                        >
                        Agricultural Training institute, Ahmednagar
                        </h4>
                        <p data-aos="fade-right">
                        Started in Feb 2020 with 3 other co-founders and provided training
                        to 20,000+ farmers and 3000+ students till now. Also honored by
                        Agri-Education Award 2021 By Agriculture Today Group.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"Dec 2019 - Aug 2021"}
                        contentStyle={{
                        boxShadow: `var(--shadow)`,
                        border: "3px solid var(--clr-primary)",
                        backgroundColor: `var(--clr-bg)`,
                        textAlign: "center",
                        color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                        borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                        border: ` 3px solid var(--clr-primary)`,
                        backgroundColor: `var(--clr-bg)`,
                        color: `var(--clr-primary)`,
                        }}
                        icon={<WorkIcon />}
                    >
                        <h3
                        className="vertical-timeline-element-title"
                        data-aos="fade-right"
                        >
                        Founder & Director (Part Time)
                        </h3>
                        <h4
                        className="vertical-timeline-element-subtitle"
                        data-aos="fade-right"
                        >
                        Sitocrats Pvt. Ltd., Parbhani (MH)
                        </h4>
                        <p data-aos="fade-right">
                        Started in Dec 2019 and delivered 15+ Projects on wordpress,
                        Angular, Nodejs and Flutter till Aug 2021.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"Jul 2017 - Aug 2021"}
                        contentStyle={{
                        boxShadow: `var(--shadow)`,
                        border: "3px solid var(--clr-primary)",
                        backgroundColor: `var(--clr-bg)`,
                        textAlign: "center",
                        color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                        borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                        border: ` 3px solid var(--clr-primary)`,
                        backgroundColor: `var(--clr-bg)`,
                        color: `var(--clr-primary)`,
                        }}
                        icon={<SchoolIcon />}
                    >
                        <h3
                        className="vertical-timeline-element-title"
                        data-aos="fade-right"
                        >
                        Student [BTech. (Agril. Engineering)]
                        </h3>
                        <h4
                        className="vertical-timeline-element-subtitle"
                        data-aos="fade-right"
                        >
                        CAET, VNMKV University, Parbhani (MH)
                        </h4>
                        <p data-aos="fade-right">
                        Studied Agricultural Engineering which consists of all the
                        subjects accross all engineering and agricultural streams. Passed
                        with 8.32 CGPA
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={"March 2017"}
                        contentStyle={{
                        boxShadow: `var(--shadow)`,
                        border: "3px solid var(--clr-primary)",
                        backgroundColor: `var(--clr-bg)`,
                        textAlign: "center",
                        color: `var(--clr-fg-alt)`,
                        }}
                        contentArrowStyle={{
                        borderRight: "16px solid  var(--clr-primary)",
                        }}
                        iconStyle={{
                        border: ` 3px solid var(--clr-primary)`,
                        backgroundColor: `var(--clr-bg)`,
                        color: `var(--clr-primary)`,
                        }}
                        icon={<SchoolIcon />}
                    >
                        <h3
                        className="vertical-timeline-element-title"
                        data-aos="fade-right"
                        >
                        Student [HSC (Science)]
                        </h3>
                        <h4
                        className="vertical-timeline-element-subtitle"
                        data-aos="fade-right"
                        >
                        Janata Jr. College, Ruichhattishi, Ahmednagar
                        </h4>
                        <p data-aos="fade-right">
                        Studied 12th Science and Passed with 85.69 Percentage.
                        </p>
                    </VerticalTimelineElement> */}

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
