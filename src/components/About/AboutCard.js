import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We are <span className="purple">Neha Sirur</span>
            from <span className="purple"> Hubli,Karnataka, India.</span>
            <br />
           We are currently pursuing Bachelors in Computer Science Engineering from KLE Technological University, Hubli.
            <br />
            We have completed our schooling and pre-university studies from Vidyaniketan college, Hubli.
            <br />
            <br />
            Apart from coding, some other activities that we love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Artistic activities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">N</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
