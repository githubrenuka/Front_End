import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/Testimonial.css";

const developers = [
  {
    name: "Syam",
    designation: "Data Analyst",
    photo: "",
  },
  {
    name: "Jithendra",
    designation: "Backend Developer",
    photo: "",
  },
  {
    name: "Eswar",
    designation: "UI/UX Designer",
    photo: "",
  },
  {
    name: "Ravi",
    designation: "Full Stack Developer",
    photo: "",
  },
  {
    name: "Bhanu",
    designation: "DevOps Engineer",
    photo: "",
  },
];

const Testimonial = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, arrows: false, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="testimonial-container fluid">
      {/*<div className="testimonial-header">
        <h2 className="developer-title">WHAT OUR CLIENTS ARE SAYING</h2>
        <div className="quote-icon">❝</div>
      </div>*/}
      <div className="developer-slider">
        <h3 className="developer-subtitle">Meet Our Team</h3>
        <Slider {...sliderSettings}>
          {developers.map((developer, index) => (
            <div key={index} className="developer-card">
              <img
                src={developer.photo}
                alt=""
                className="developer-photo"
              />
              <h4 className="developer-name">{developer.name}</h4>
              <p className="developer-designation">{developer.designation}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
