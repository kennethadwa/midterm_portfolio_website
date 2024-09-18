import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">John Kenneth L. Ortigueras </span>
            from <span className="purple"> Lipa City, Batangas.</span>
            <br />
            I am currently enrolled as an IT student at <span className="purple"> National University Lipa.</span>
            <br />
            I love programming and developing websites.
            <br />
            <br />
            Aside from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't stop when you're tired, stop when you're done!"{" "}
          </p>
          <footer className="blockquote-footer">Kenneth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
