import React from "react";
import "../CSS/About.css"; // Assuming you'll style it in a separate CSS file


const About = () => {
    return (
        <div className="at-a-glance-section">
          <div className="glance-container">
            {/* Left Side - Image */}
            <div className="glance-image">
              <img src="/images/vision.png" alt="AI Visualization" 
             />
            </div>
            
            {/* Right Side - Content */}
            <div className="glance-content">
              <h2>  We are Creative Synergies Group</h2>
              <p>
             
              We Are A Leading Global Digital Innovation Solution Provider. We Synergize Our Deep Domain Expertise With NextGen Technologies To Deliver Convergence Of Digital Engineering, Embedded Systems And Software Technologies For Our Customers
              </p>
              <p>
                From CAE Simulation and AI-powered solutions to Digital
                Transformation and Cloud-based delivery models, Xitadel is
                committed to excellence in every dimension.
              </p>
            </div>
          </div>
        </div>
      );
    };

export default About;