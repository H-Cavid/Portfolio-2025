import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                I'm a passionate <b className="purple">Data Science Master's student</b> with a strong background in <b className="purple">Computer Science</b> and hands-on experience in both <b className="purple">Machine Learning</b> and <b className="purple">Web Development</b>.
                <br />
                <br />
                My interests lie in applying AI to real-world problems, especially in areas like <i><b className="purple">Deep Learning, Cloud Computing, and Big Data Technologies.</b></i>
                <br />
                <br />
                I'm confident working with tools like <b className="purple">Python, SQL, Django, React.js</b>, and have built data pipelines, dashboards, and ML applications from scratch.
                <br />
                <br />
                I'm currently seeking opportunities to contribute as a <b className="purple">Junior Data Scientist, Data Analyst, or Full-Stack Developer</b> — where I can turn data into impactful insights. 🌍
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/H-Cavid"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/cavid-h%C9%990s%C9%99nov-0226ca/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
