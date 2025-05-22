import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiGit, DiReact } from "react-icons/di";
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiGooglecloud,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiC,
  SiCsharp,
  SiAmazonaws,
  SiMicrosoftazure,
} from "react-icons/si";

function Techstack() {
  const groupStyle = {
    marginTop: "30px",
    marginBottom: "10px",
    color: "#9b59b6",
    fontWeight: "bold",
    fontSize: "1.2rem",
  };

  return (
    <>
      {/* Machine Learning & Data Science */}
      <div style={groupStyle}>🧠 Machine Learning & Data Science</div>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons" title="Python">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Pandas">
          <SiPandas />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="NumPy">
          <SiNumpy />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Scikit-learn">
          <SiScikitlearn />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="TensorFlow">
          <SiTensorflow />
        </Col>
      </Row>

      {/* Web Development */}
      <div style={groupStyle}>🌐 Web Development</div>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons" title="React.js">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="JavaScript">
          <SiJavascript />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="HTML5">
          <SiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="CSS3">
          <SiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="FastAPI">
          <SiFastapi />
        </Col>
      </Row>

      {/* Databases */}
      <div style={groupStyle}>🗄️ Databases</div>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons" title="MySQL">
          <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
          <SiPostgresql />
        </Col>
      </Row>

      {/* Cloud & DevOps */}
      <div style={groupStyle}>☁️ Cloud & DevOps</div>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons" title="Google Cloud">
          <SiGooglecloud />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Amazon AWS">
          <SiAmazonaws />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Microsoft Azure">
          <SiMicrosoftazure />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Docker">
          <SiDocker />
        </Col>
      </Row>

      {/* Other Tools */}
      <div style={groupStyle}>🛠️ Other Tools</div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" title="Git">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="C">
          <SiC />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="C#">
          <SiCsharp />
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
