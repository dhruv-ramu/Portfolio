import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiArchlinux,
  SiMarkdown,
  SiInkscape
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArchlinux />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiInkscape />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMarkdown />
      </Col>
    </Row>
  );
}

export default Toolstack;
