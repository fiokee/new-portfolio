import React from 'react';
import Typewriter from 'typewriter-effect';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={8}>
            <div className="header-content" data-aos="fade-up">
              <h1>Welcome to My Portfolio</h1>
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Frontend Developer', 'ReactJS Enthusiast', 'Fullstack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
