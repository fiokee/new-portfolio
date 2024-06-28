import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="text-center" data-aos="fade-up">Contact Me</h2>
        <Row>
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
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
