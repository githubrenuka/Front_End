import React from "react";
import "../CSS/Skills.css"; // Add CSS for styling
import { Container } from 'react-bootstrap';

const Skills = () => {
  return (
   
    <div className="digital-transformation">
         <Container>
      <h2>What we offer</h2>
      <ul>
        <li>User Interface (UI) / User Experience (UX) Development</li>
        <li>Mobile Application Development (iOS / Android)</li>
        <li>Application Development</li>
        <li>Content Management Systems</li>
        <li>Digital Marketing</li>
      </ul>
      </Container>
    </div>
  
  );
};

export default Skills;
