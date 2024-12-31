import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../CSS/Features.css"; // Add your custom styles if needed

const Features = () => {
  const features = [
    { icon: "fa-desktop", title: "RESPONSIVE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.." },
    { icon: "fa-search", title: "CUSTOMIZABLE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.." },
    { icon: "fa-file-code", title: "UI ELEMENTS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.." },
    { icon: "fa-code", title: "CLEAN CODE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.." },
    { icon: "fa-book", title: "DOCUMENTED", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.." },
    { icon: "fa-download", title: "FREE UPDATES", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.." },
  ];

  return (
    <div id="features" className="features-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="features-title">Features</h2>
          <p className="features-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="feature-item text-center p-3 ">
                <div className="icon-container mb-3">
                  <i loading="lazy" decoding="async" width="128" height="128"className={`fas ${feature.icon} fa-2x text-primary img  border`}></i>
                </div>
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-description">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Features;
