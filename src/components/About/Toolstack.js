import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAnaconda,
  SiJupyter,
  SiGithub,
  SiWindows
} from "react-icons/si";

function Toolstack() {
  const groupStyle = {
    marginTop: "30px",
    marginBottom: "10px",
    color: "#9b59b6",
    fontWeight: "bold",
    fontSize: "1.2rem"
  };

  return (
    <>
      <div style={groupStyle}>🧰 Tools I Use</div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" title="Windows OS"><SiWindows /></Col>
        <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code"><SiVisualstudiocode /></Col>
        <Col xs={4} md={2} className="tech-icons" title="Jupyter Notebook"><SiJupyter /></Col>
        <Col xs={4} md={2} className="tech-icons" title="Postman"><SiPostman /></Col>
        <Col xs={4} md={2} className="tech-icons" title="GitHub"><SiGithub /></Col>
      </Row>
    </>
  );
}

export default Toolstack;
