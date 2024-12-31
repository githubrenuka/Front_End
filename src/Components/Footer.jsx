import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import '../CSS/Footer.css'

const Footer = () => {
  
  const footerStyle = {
    backgroundImage: `url('/images/footerimg.jpg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // Maintain original width, reduce height to 50%
    
    justifyContent: 'center',
   
  };
  
  
  return (
   
    <footer id="footer" className="footer-style-1" style={footerStyle}>
      {/* Upper Footer */}
      <div className="upper-footer">
        <Container>
          <Row>
            {/* Logo and About Section */}
            <Col md={6} sm={12}>
              <div className="footer-logo" id="footer">
                <img
                  src="images/creative-logo-main.png"
                  alt="Creative Synergies Group Logo"
                  className="img-fluid footer-logo"
                />
              </div>
              <p className="footer-description">
                CREATIVE is a leading digital innovation solution provider
                synergizing deep domain expertise and next-gen technologies to
                deliver the convergence of digital engineering, embedded
                systems, and software technologies globally.
              </p>
             
            </Col>

            {/* Company Links */}
            <Col md={3} sm={6}>
              <h5 className="footer-title">Company</h5>
              <ul className="footer-links">
                <li>
                  <a href="https://www.global-csg.com/about-us/">About Us</a>
                </li>
                <li>
                  <a href="https://www.global-csg.com/#industries">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="https://www.global-csg.com/solutions/">Solutions</a>
                </li>
                <li>
                  <a href="https://www.global-csg.com/careers/">Careers</a>
                </li>
                <li>
                  <a href="https://www.global-csg.com/about-us/#locations">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="https://www.global-csg.com/corporate-social-responsibility/">
                    CSR
                  </a>
                </li>
                <li>
                  <a href="https://www.global-csg.com/contact-us/">
                    Get In Touch
                  </a>
                </li>
              </ul>
            </Col>

            {/* Services Links */}
            <Col md={3} sm={6}>
              <h5 className="footer-title">Services</h5>
              <ul className="footer-links">
                <li>
                  <a href="https://www.global-csg.com/digital-technologies/">
                    Digital Technologies
                  </a>
                </li>
                <li>
                  <a href="https://www.global-csg.com/intelligent-connected-products/">
                    Intelligent Connected Products
                  </a>
                </li>
                <li>
                  <a href="https://www.global-csg.com/services/digital-product-engineering/">
                    Digital Product Engineering
                  </a>
                </li>
                <li>
                  <a href="https://www.global-csg.com/services/digital-plant-engineering/">
                    Digital Plant Engineering
                  </a>
                </li>
                <li>
                  <a href="https://www.global-csg.com/services/digital-manufacturing-engineering/">
                    Digital Manufacturing Engineering
                  </a>
                </li>
                <li>
                  <a href="https://www.global-csg.com/services/product-support-services/">
                    Product Support Services
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

     
    </footer>
  );
};

export default Footer;
