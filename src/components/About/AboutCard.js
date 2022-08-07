import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings. I am <span className="teal">Dhruv Ramu </span>
            from <span className="teal"> Bangalore, India.</span>
            <br />I am a sophomore high school student at Neev Academy.
            <br />I'm passionate about science and technology and I am the co-founder of <a href="https://thegeekly.net">The Geekly</a>, a magazine exploring the universe through the lens of science.
            <br /> I've participated in various Hackathons such as:
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> SISHACK (Stonehill International School)
            </li>
            <li className="about-activity">
              <ImPointRight /> NeevHacks (@ Neev Academy)
            </li>
            <li className="about-activity">
              <ImPointRight /> TISBHacks
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."{" "}
          </p>
          <footer className="blockquote-footer">Marie Curie</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
