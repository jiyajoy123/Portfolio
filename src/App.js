import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link here
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* Navigation Links */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
