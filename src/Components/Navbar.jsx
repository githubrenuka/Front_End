import React, { useState, useEffect } from "react";
import {  Modal, Tab } from "react-bootstrap";
import { Form, Button, InputGroup, FormControl, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../CSS/Navbar.css'

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [companyCode, setCompanyCode] = useState('');
  const [employeeCode, setEmployeeCode] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loginStyle = {
    backgroundImage: `url('/images/login.avif')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain ', // Ensures full-width without distorting height
   
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  };
  
  return (
    <>
      <div className={`navbar ${isScrolled ? "scrolled" : "transparent"}`}>
        <Container fluid className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <img alt="text" src="images/creative-logo-main.png" />
          </div>
          <div className={`nav-links ${menuActive ? "active" : ""}`}>
            <a href="/" className="nav-link">Home</a>
            {/* Dropdown with Hover */}
            <Dropdown className=" nav-link" href="/test"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              show={dropdownOpen}
            >
           <Dropdown.Toggle id="dropdown-basic" className="nav-link" variant="link">
                Solutions
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/web">Web Development</Dropdown.Item>
                <Dropdown.Item href="/ai">AI/ML</Dropdown.Item>
                <Dropdown.Item href="/testing">Testing</Dropdown.Item>
                <Dropdown.Item href="/devops">DevOps</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
            <a href="#testimonial" className="nav-link">Testimonials</a>
            <a href="#features" className="nav-link">Features</a>

          <a href="#footer" className="nav-link"  >Contact</a>

          
          {  /*<a href="#login" className="nav-link" onClick={handleModalShow}>Login</a>*/}
          </div>
          <div
            className="menu-toggle"
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          >
            <i className={`bi ${menuActive ? "bi-x" : "bi-list"} text-white`} style={{ fontSize: "24px" }}></i>
          </div>
        </Container>
      </div>

      {/* Login Modal */}
      <Modal
        show={showModal}
        size="lg" // Large modal
        onHide={handleModalClose}
        centered
        dialogClassName="custom-modal" style={loginStyle} >
        <Modal.Body className="p-0">
          <Tab.Container defaultActiveKey="login">
            <div className="modal-content-wrapper d-flex">
             

<Container className=" justify-content-center align-items-center min-vh-100">
      <Row className="">
        <Col md={{ span: 6, offset: 3 }}>
          <div className="login-block p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <div className="login-title-block text-center mb-4">
              <i className="fas fa-lock" style={{ color: '#011327', fontSize: '24px' }}></i>
              <h2 className="login-txt" style={{ color: '#011327' }}>User Login</h2>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formCompanyCode" className="mb-3" style={{ display: 'none' }}>
                <Form.Label style={{ color: '#011327' }}>Company Code</Form.Label>
                <Form.Control
                  type="text"
                  value={companyCode}
                  onChange={(e) => setCompanyCode(e.target.value)}
                  style={{ borderColor: '#011327' }}
                />
              </Form.Group>

              <Form.Group controlId="formEmployeeCode" className="mb-3">
                <Form.Label style={{ color: '#011327' }}>Employee Code</Form.Label>
                <Form.Control
                  type="text"
                  value={employeeCode}
                  onChange={(e) => setEmployeeCode(e.target.value)}
                  style={{ borderColor: '#011327' }}
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label style={{ color: '#011327' }}>Password</Form.Label>
                <InputGroup>
                  <FormControl
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ borderColor: '#011327' }}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ color: '#011327' }}
                  >
                    <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                  </Button>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formRememberMe" className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ color: '#011327' }}
                />
              </Form.Group>

              <div className="d-flex justify-content-between mb-3">
                <a href="#" style={{ color: '#011327' }}>Forgot password?</a>
                <a href="#" style={{ color: '#011327' }}>Unlock Account</a>
              </div>

              <Button type="submit" className="w-100 mb-2" style={{ backgroundColor: '#011327', borderColor: '#011327' }}>
                Login
              </Button>
              <Button className="w-100" style={{ backgroundColor: '#011327', borderColor: '#011327' }}>
                SSO Login
              </Button>
            </Form>
            <div className="login-footer text-center mt-4" style={{ backgroundColor: '#011327', padding: '10px', borderRadius: '8px' }}>
              <span style={{ color: '#fff' }}>Download App</span>
              <div className="down-links mt-2">
                <a href="https://itunes.apple.com/in/app/zinghr/id967984663?mt=8" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: '10px' }}>
                  <i className="fab fa-apple"></i>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.zinghr.app&hl=en" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                  <i className="fab fa-google-play"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  

            </div>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar;
