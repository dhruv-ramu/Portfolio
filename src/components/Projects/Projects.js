import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Salus from "../../Assets/Projects/Salus.png";
import TheGeekly from "../../Assets/Projects/TheGeekly.png";
import CarboTrack from "../../Assets/Projects/CarboTrack.png";
import Sched from "../../Assets/Projects/Sched.png";
import Aprendiz from "../../Assets/Projects/Aprendiz.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="teal">Projects, Certifications & Awards</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarboTrack}
              isBlog={false}
              title="CarboTrack"
              description="CarboTrack is a web application that allows the user to track their carbon footprint based on electricity usage, transportation, and food consumption. My team and I used tensorflow.js to allow for taking pictures of various items to determine their carbon footpring. The result can then be copied to the clipboard and shared through emojis. This was built in 24 hours' time and my team (NextGen) won second prize in SISHACK."
              ghLink="https://github.com/Dhruvsr/CarboTrack"
              demoLink="https://dhruv.is-from.space/CarboTrack_Demo.MP4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sched}
              isBlog={false}
              title="Sched"
              description="Sched is the all-in-one scheduling app. It is a nifty chrome extension and easily accessible website that improves students' productivity. It features a task organizer based on priority and turning on its focus mode will ensure there are no disturbances during the session as it blocks any distracting websites, while storing information on localstorage. My team (NextGen) won the second prize in NeevHacks."
              ghLink="https://github.com/Dhruvsr/Sched"
              demoLink="https://dhruv.is-from.space/1659861963.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Aprendiz}
              isBlog={false}
              title="Aprendiz"
              description="Aprendiz is a Chrome Extension that changes certain words on websites (such as wikipedia.com) to help students learn multiple languages such as Spanish, French,Kannada, German and Dutch. Expand your vocabulary in a particular language while browsing the web, and subconciously picking up a language. The extension is made up of JavaScript and HTML, and its relatively easy-to-use interface makes it effortless to add more language support.
              "
              ghLink="https://github.com/Dhruvsr/Aprendiz"
              demoLink="https://dhruv.is-from.space/2021-10-10-20-08-04.mov"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Salus}
              isComp={true}
              title="Project Salus"
              description="I participated in a climate change-themed science fest organized by Christ Junior College called Project Salus. It involved a series of climate change-themed science challenges which had to be solved using Python within ten minutes. It also involved the creation of a presentation. I won first place for the theme 'Technica Humanitus'. "
              ghLink="https://dhruv.is-from.space/1659865480.png"
              demoLink="https://dhruv.is-from.space/1659865480.png"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TheGeekly}
              isBlog={false}
              title="The Geekly"
              description="I co-founded The Geekly, a magazine exploring the universe through the lens of science. 12 issues have been created till date, featuring original and interesting articles. "
              // ghLink="not needed here"
              demoLink="https://thegeekly.net" 
            />
          </Col> 

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
