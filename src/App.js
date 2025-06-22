import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './sections/Home';
import About from './sections/about';
import Projects from './sections/project';
import Skills from './sections/Skills';
import Contact from './sections/contact';
import './App.css';

function App() {
  const dividerStyle = {
    border: 'none',
    height: '2px',
    margin: '0',
    background: 'linear-gradient(to right, transparent, #ffffff55, transparent)',
  };

  return (
    <div>
      <Navbar />
      <Home />
      <hr style={dividerStyle} />

      <About />
      <hr style={dividerStyle} />

      <Projects />
      <hr style={dividerStyle} />

      <Skills />
      <hr style={dividerStyle} />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
