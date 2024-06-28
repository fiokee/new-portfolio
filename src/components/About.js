import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import Profilepix from '../assets/profilepix1.png'

function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row>
          <Col md={6} data-aos="fade-right">
            <img src={Profilepix} alt="Your Name" className="img-fluid rounded-circle" />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2>About Me</h2>
            <p>
              I am a passionate web developer with experience in creating dynamic and responsive websites using modern technologies like ReactJS, Bootstrap, and more. I love building applications that are not only functional but also provide a great user experience.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
