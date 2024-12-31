import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Add your custom styles here

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [employeeCode, setEmployeeCode] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
  };

  return (
    <>
      {/* Navbar */}
      <div className={`navbar ${isScrolled ? "scrolled" : "transparent"}`}>
        <Container fluid className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <img alt="text" src="images/creative-logo-main.png" className="img-fluid" />
          </div>
          <div className={`nav-links ${menuActive ? "active" : ""}`}>
            <a href="/" className="nav-link">
              At a Glance
            </a>
            <a href="#test" className="nav-link">
              Solution Gallery
            </a>
            <a href="#case" className="nav-link">
              Case Studies
            </a>
            <a href="#footer" className="nav-link">
              Contact
            </a>
            <a href="#login" className="nav-link" onClick={handleModalShow}>
              Login
            </a>
          </div>
          <div className="menu-toggle" onClick={toggleMenu} style={{ cursor: "pointer" }}>
            <i className="bi bi-list"></i>
          </div>
        </Container>
      </div>

      {/* Login Modal */}
      <Modal
        show={showModal}
        size="lg"
        onHide={handleModalClose}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Body className="p-4">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6}>
                <div className="login-block p-4">
                  <div className="login-title-block text-center mb-4">
                    <i className="fas fa-lock" style={{ color: "#011327", fontSize: "24px" }}></i>
                    <h2 className="login-txt" style={{ color: "#011327" }}>
                      User Login
                    </h2>
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEmployeeCode" className="mb-3">
                      <Form.Label style={{ color: "#011327" }}>Employee Code</Form.Label>
                      <Form.Control
                        type="text"
                        value={employeeCode}
                        onChange={(e) => setEmployeeCode(e.target.value)}
                        style={{ borderColor: "#011327" }}
                      />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mb-3">
                      <Form.Label style={{ color: "#011327" }}>Password</Form.Label>
                      <InputGroup>
                        <FormControl
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          style={{ borderColor: "#011327" }}
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{ color: "#011327" }}
                        >
                          <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                        </Button>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formRememberMe" className="mb-3">
                      <Form.Check
                        type="checkbox"
                        label="Remember me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        style={{ color: "#011327" }}
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-between mb-3">
                      <a href="#" style={{ color: "#011327" }}>
                        Forgot password?
                      </a>
                      <a href="#" style={{ color: "#011327" }}>
                        Unlock Account
                      </a>
                    </div>

                    <Button type="submit" className="w-100 mb-2" style={{ backgroundColor: "#011327", borderColor: "#011327" }}>
                      Login
                    </Button>
                    <Button className="w-100" style={{ backgroundColor: "#011327", borderColor: "#011327" }}>
                      SSO Login
                    </Button>
                  </Form>
                  <div className="login-footer text-center mt-4">
                    <span style={{ color: "#fff" }}>Download App</span>
                    <div className="down-links mt-2">
                      <a
                        href="https://itunes.apple.com/in/app/zinghr/id967984663?mt=8"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff", marginRight: "10px" }}
                      >
                        <i className="fab fa-apple"></i>
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.zinghr.app&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff" }}
                      >
                        <i className="fab fa-google-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
