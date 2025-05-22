import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Javid Hasanov</span>, a passionate and detail-oriented
            <span className="purple"> Data Science Master's student</span> at FH Kiel, with a Bachelor's
            degree in Computer Science from ASOIU.
            <br />
            <br />
            I bring hands-on experience in <span className="purple">machine learning</span>,
            <span className="purple"> data visualization</span>, and <span className="purple">web development</span>.
            My projects focus on real-world applications like customer sentiment analysis, diabetes risk prediction,
            and geospatial visualizations.
            <br />
            <br />
            I’m actively seeking opportunities as a <span className="purple">Working Student or Intern</span> in the fields of Data Science, Analytics, or AI.
            My goal is to contribute to data-driven decision-making and continue growing within a collaborative environment.
            <br />
            <br />
            Outside of academics, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing chess, which sharpens my strategic thinking, pattern recognition, and problem-solving skills.
            </li>
            <li className="about-activity">
              <ImPointRight />  Exploring new productivity tools, to optimize how I manage tasks and stay organized.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading on psychology and self-development, which supports continuous growth and self-awareness.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I’m driven by curiosity, grounded in data, and focused on impact."
          </p>
          <footer className="blockquote-footer">Javid Hasanov</footer>
        </blockquote>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
