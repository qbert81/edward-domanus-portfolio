import './styles/App.css';
import React from 'react';
import Home from './Home';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import TriangleRain from './Components/TriangleRain';
import GlowingMouse from './Components/GlowingMouse';


const App = () => (
  
  <div>
    
    <GlowingMouse />
    <TriangleRain />
    <Home />
    
    <Skills />
    <Work />
    <Contact />
    
  </div>
);

export default App;
