import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 
import '../CSS/TestCard.css'



const TestCard = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      title: 'Web Development',
      imgSrc: '/images/img6.png',
      link: '/web',
    },
    {
      title: 'AI/ML',
      imgSrc: '/images/img4.jpg',
      link: '/ai',
    },
    {
      title: 'Testing',
      imgSrc: '/images/img9.jpg',
      link: '/testing',
    },
    {
      title: 'DevOps',
      imgSrc: '/images/img8.jpg',
      link: '/devops',
    },
    
  ];

  useEffect(() => {
    const images = document.querySelectorAll('.card-img-top');
    images.forEach((img) => {
      img.classList.add('animate-image');
    });
  }, []);

  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <>
    <Container>
      <div className="" id="test" >
        <div className="container mt-3">
          <h1 className="text-center mb-4 banner-title">Our Solution Offerings</h1>
          <h5 className="text-center mb-5 text"> While preconfigured, these solutions often allow for customization to meet specific organizational needs.</h5>
          <Row>
            {cardData.map((card, index) => (
              <Col key={index} md={3} className="mb-4">
                <div className="card" style={{ width: '100%', padding: '30px', border: 'none' }}>
                  <img
                    className="card-img-top rounded-circle animated-image"
                    src={card.imgSrc}
                    alt={`${card.title} image`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleNavigation(card.link)}
                  />
                  <div className="card-body text-center">
                    <h4
                      className="card-title"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleNavigation(card.link)}
                    >
                      {card.title}
                    </h4>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      </Container>
    </>
  );
};

export default TestCard;
