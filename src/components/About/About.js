import React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          {/* <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who am <strong className="teal">I?</strong>
            </h1>
            <Aboutcard />
          </Col> */}
          <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "0px" }}
            className="about-img"
          >
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
          </Col>
        </Row>
        <h1 className="project-heading">
          Tools I <strong className="teal">Know </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="teal">I</strong> Can Use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
