import React from "react";
import "../CSS/About.css"; // Assuming you'll style it in a separate CSS file


const About = () => {
  const glancestyle ={
      backgroundImage: `url('/images/banner-abstract.jpg')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      justifyContent: 'center',
    }
    return (
        <div className="at-a-glance-section" style={glancestyle} id="about">
          <div className="glance-container">
            {/* Left Side - Image */}
            {/* <div className="glance-image">
              <img src="/images/vision.png" alt="AI Visualization" 
             />
            </div>*/}
            
            {/* Right Side - Content */}
            <div className="glance-content">
              <h2 className=" text-center mb-3 glance-title">  We are Creative Synergies Group</h2>
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
