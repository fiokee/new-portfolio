import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
