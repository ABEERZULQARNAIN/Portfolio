import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ABEER KHAN  </span>
            from <span className="purple"> Pakistan.</span>
            <br />
            I am currently employed as a software developer at Gemini Digital.
            <br />
            I graduated with a degree in computer science .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> enjoy traveling,
            </li>
            <li className="about-activity">
              <ImPointRight /> engaging in combat sports
            </li>
            <li className="about-activity">
              <ImPointRight /> playing games, and writing tech blogs
            </li>
          </ul>

          <p style={{ color: "rgb(114 195 186);font-size: 24px;" }}>
            "Your Thought's Shape Your World!!"{" "}
          </p>
          <footer className="blockquote-footer">ABEER KHAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
