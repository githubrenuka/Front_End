import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css'




function Navbar2() {
  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Check if the page is scrolled
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : "transparent"}`}>
      <Container fluid  className="d-flex justify-content-between align-items-center">
        <div className="logo">
          <img alt="text" src="images/creative-logo-main.png" />
        </div>
        <div className={`nav-links ${menuActive ? "active" : ""}`}>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/web" className="nav-link">Web Development</NavLink>
         
          <a href="#AI">AI/ML</a>
          <a href="#Mobile">Mobile Development</a>
          <a href="#Cloud">Cloud & Devops</a>
          <a href="#Testing">Testing</a>
        </div>
        <div
          className="menu-toggle"
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-list"></i>
        </div>
      </Container>
    </div>
  );
}

export default Navbar2;
