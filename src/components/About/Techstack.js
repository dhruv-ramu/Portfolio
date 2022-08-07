import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiTerminal,
  DiPython,
  DiGit,
  DiCss3,
} from "react-icons/di";
import {
  SiFirebase,
  SiHtml5,
  SiDiscord,
  SiTensorflow,
  SiNpm,
  SiYarn,
  SiArduino,
  SiRaspberrypi
} from "react-icons/si";
import {
  GrHostMaintenance
} from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRaspberrypi />
      </Col>
    </Row>
  );
}

export default Techstack;
