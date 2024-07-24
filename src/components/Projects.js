import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {FaGithub } from 'react-icons/fa';
import './Projects.css';
import projectImg from '../images/rule2.png'
import imag from '../images/ngo home.png';
import Dictionary from "../images/web dic.png";
import Country from '../images/country.png';
import Ecomm from '../images/ecomm.png';
import Marine from '../images/ephisans.png'

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="text-center" data-aos="fade-up">My Projects</h2>
        <Row>
          <Col md={4} data-aos="zoom-in">
            <Card className="project-card">
              <Card.Img variant="top" src={Dictionary} />
              <Card.Body>
                <Card.Title>Dictionary</Card.Title>
                <Card.Text>
                This project is a dynamic web dictionary built using ReactJS and styled with CSS. It allows 
                users to search for word definitions, synonyms, and usage examples. Users can also listen to the 
                correct pronunciation of words through an integrated audio feature. The user-friendly interface ensures a 
                seamless and engaging experience for anyone looking to expand their vocabulary 
                </Card.Text>
                <Button variant="primary" href="https://web-dictionary-wheat.vercel.app/" target='_blank' className="button">View Project</Button>
                <Button variant="" href="https://github.com/fiokee/web-dictionary" target='_blank' className="button-space"> Github
                <FaGithub size={40} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more projects as needed */}

          <Col md={4} data-aos="zoom-in">
            <Card className="project-card">
              <Card.Img variant="top" src={Marine} />
              <Card.Body>
                <Card.Title>Ephesians-Marine</Card.Title>
                <Card.Text>
                A website that specialize in exporting high-quality marine and agricultural products. From fresh fish and catfish to snails, 
                crayfish, banga, palm-kernel, Palm Oil, ogbono, vegetables, palm fruits, vessels and garri, our diverse range ensures you receive the finest products directly 
                from our sources to your location
                </Card.Text>
                <Button variant="primary" href="https://ephesians-marine.vercel.app/index.html" target='_blank' className="button">View Project</Button>
                <Button variant="" href="https://github.com/fiokee/ephesians-marine" target='_blank' className="button-space"> Github
                <FaGithub size={40} />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="zoom-in">
            <Card className="project-card">
              <Card.Img variant="top" src={Ecomm} />
              <Card.Body>
                <Card.Title>Dog-Bible</Card.Title>
                <Card.Text>
                This project is an e-commerce platform built using ReactJS with Context API for state management 
                and styled with Tailwind CSS. It allows users to browse and purchase various breeds of dogs. 
                The platform provides detailed information on each breed, including characteristics and care requirements. 
                The user-friendly interface ensures a seamless shopping experience for dog enthusiasts
                </Card.Text>
                <Button variant="primary" href="https://dogbible-db.firebaseapp.com/" target='_blank' className="button" >View Project</Button>
                <Button variant="" href="https://github.com/fiokee/dogbible" target='_blank' className="button-space"> Github
                <FaGithub size={40} />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="zoom-in">
            <Card className="project-card">
              <Card.Img variant="top" src={projectImg} />
              <Card.Body>
                <Card.Title>RULEFLEX</Card.Title>
                <Card.Text>
                This project is a traveling website built using HTML, CSS, Bootstrap, and JavaScript. 
                It helps users obtain visas and schedule appointments efficiently. The platform offers a 
                streamlined process for users to access the necessary information and services, ensuring a 
                hassle-free experience for their travel needs. 
                </Card.Text>
                <Button variant="primary" href="https://ruleflex-template-github-io.vercel.app/" target='_blank' className="button">View Project</Button>
                <Button variant="" href="https://github.com/fiokee/ruleflex-template.github.io" target='_blank' className="button-space"> Github
                <FaGithub size={40} />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="zoom-in">
            <Card className="project-card">
              <Card.Img variant="top" src={imag} />
              <Card.Body>
                <Card.Title>CGMF</Card.Title>
                <Card.Text>
                This project is an NGO website designed for charity donations and related activities. 
                Built using modern web technologies, the platform allows users to make donations, learn about 
                ongoing projects, and get involved in various charitable initiatives. The user-friendly interface 
                ensures a seamless and engaging experience for donors and volunteers alike. 
                </Card.Text>
                <Button variant="primary" href="https://ngo-website-dun.vercel.app/index.html" target='_blank' className="button">View Project</Button>
                <Button variant="" href="https://github.com/fiokee/NGO-Website" target='_blank' className="button-space"> Github
                <FaGithub size={40} />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="zoom-in">
            <Card className="project-card">
              <Card.Img variant="top" src={Country} />
              <Card.Body>
                <Card.Title>Rest Country</Card.Title>
                <Card.Text>
                This project is a web app built using ReactJS and styled with CSS. It allows users to search for 
                any country and displays its population and capital city. The intuitive interface provides a quick and 
                easy way to access essential information about countries around the world. 
                </Card.Text>
                <Button variant="primary" href="https://rest-country-app.web.app/" target='_blank' className="button">View Project</Button>
                <Button variant="" href="https://github.com/fiokee/countries-Api.github.io" target='_blank' className="button-space"> Github
                <FaGithub size={40} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
