import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="text-center" data-aos="fade-up">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={6} data-aos="fade-right">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message"/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={6} className="text-center">
            <div className="social-icons" data-aos="">
            <a href="https://www.linkedin.com/in/effiong-samuel-6b5a90208/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/fiokee" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
