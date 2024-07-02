import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';
import projectImg from '../images/project1.png'
import imag from '../images/ngo home.png';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="text-center" data-aos="fade-up">My Projects</h2>
        <Row>
          <Col md={4} data-aos="zoom-in">
            <Card className="project-card">
              <Card.Img variant="top" src={imag} />
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>
                  A brief description of the project. 
                  A brief description of the project. 
                  A brief description of the project. 
                  A brief description of the project. 
                </Card.Text>
                <Button variant="primary" href="#" className="button">View Project</Button>
                <Button variant="primary" href="#" className="button-space">Github</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more projects as needed */}

          <Col md={4} data-aos="zoom-in">
            <Card className="project-card">
              <Card.Img variant="top" src={projectImg} />
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>
                  A brief description of the project. 
                </Card.Text>
                <Button variant="primary" href="#" className="button" >View Project</Button>
                <Button variant="primary" href="#" className="button-space">Github</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="zoom-in">
            <Card className="project-card">
              <Card.Img variant="top" src={projectImg} />
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>
                  A brief description of the project. 
                </Card.Text>
                <Button variant="primary" href="#" className="button">View Project</Button>
                <Button variant="primary" href="#" className="button-space">Github</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="zoom-in">
            <Card className="project-card">
              <Card.Img variant="top" src={projectImg} />
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>
                  A brief description of the project. 
                </Card.Text>
                <Button variant="primary" href="#" className="button">View Project</Button>
                <Button variant="primary" href="#" className="button-space">Github</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="zoom-in">
            <Card className="project-card">
              <Card.Img variant="top" src={projectImg} />
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>
                  A brief description of the project. 
                </Card.Text>
                <Button variant="primary" href="#" className="button">View Project</Button>
                <Button variant="primary" href="#" className="button-space">Github</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="zoom-in">
            <Card className="project-card">
              <Card.Img variant="top" src={projectImg} />
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>
                  A brief description of the project. 
                </Card.Text>
                <Button variant="primary" href="#" className="button">View Project</Button>
                <Button variant="primary" href="#" className="button-space">Github</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
