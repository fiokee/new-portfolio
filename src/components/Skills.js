// src/components/Skills.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaNpm, FaPhp, FaGoogle } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiExpress, SiCloudinary } from 'react-icons/si'; // Import Cloudinary icon
import './Skills.css';

const skills = [
  { icon: <FaHtml5 style={{ color: '#E34F26' }} />, name: 'HTML' },
  { icon: <FaCss3Alt style={{ color: '#1572B6' }} />, name: 'CSS' },
  { icon: <FaJs style={{ color: '#F7DF1E' }} />, name: 'JavaScript' },
  { icon: <FaReact style={{ color: '#61DAFB' }} />, name: 'ReactJS' },
  { icon: <FaNode style={{ color: '#339933' }} />, name: 'NodeJS' },
  { icon: <SiExpress style={{ color: '#000000' }} />, name: 'ExpressJS' },
  { icon: <FaNpm style={{ color: '#CB3837' }} />, name: 'NPM' },
  { icon: <SiMongodb style={{ color: '#47A248' }} />, name: 'MongoDB' },
  { icon: <SiFirebase style={{ color: '#FFCA28' }} />, name: 'Firebase' },
  { icon: <FaGoogle style={{ color: '#4285F4' }} />, name: 'Google Analytics' },
  { icon: <FaPhp style={{ color: '#777BB4' }} />, name: 'PHP' },
  { icon: <SiCloudinary style={{ color: '#3448C5' }} />, name: 'Cloudinary' }, // Add Cloudinary
];

function Skills() {
  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <h2 className="text-center mb-4" data-aos="fade-up">My Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3} className="text-center mb-4" data-aos="zoom-in">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <div className="skill-icon">{skill.icon}</div>
                  <Card.Title className="mt-2 mb-0">{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
