import React, { useEffect,useState,useRef   } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 
import '../CSS/TestCard.css'
import POCList from './POCList';
import AIList from './AIList';
import TestingList from './TestingList';
import DevOpsList from './DevOpsList';



const TestCard = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      title: 'Web Development',
      imgSrc: '/images/img6.png',
      link: '/POCList',
      component:<POCList />
     
    },
    {
      title: 'AI/ML',
      imgSrc: '/images/img4.jpg',
      link: '/AIList',
      component:<AIList />
    
    },
    {
      title: 'Testing',
      imgSrc: '/images/img9.jpg',
      link: '/testing',
      component:<TestingList/>
    },
    {
      title: 'DevOps',
      imgSrc: '/images/img8.jpg',
      link: '/devops',
      component:<DevOpsList/>
    },
    
  ];


          const [page, setPage] = useState(null);
         // const handleShow = () => setPage(true);
         // const handleClose = () => setPage(false);
         const [fade, setFade] = useState(false);
         const pageRef = useRef(null);
  

  useEffect(() => {
    const images = document.querySelectorAll('.card-img-top');
    images.forEach((img) => {
      img.classList.add('animate-image');
    });
 


  // Add keydown event listener for 'Escape'
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };
 
  document.addEventListener('keydown', handleKeyDown);
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, []);
const handleNavigation = (component) => {
  // Trigger fade-out before switching
  setFade(true);
  setTimeout(() => {
    setPage(component);
    setFade(false); // Trigger fade-in after rendering
    setTimeout(() => {
      if (pageRef.current) {
        pageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300); // Ensure scrolling after DOM update
  }, 300); // Match fade-out duration
};


const handleClose = () => {
  setFade(true);
  setTimeout(() => {
    setPage(null);
    setFade(false);
  }, 300); // Match the duration of the fade-out animation
};
 

  return (
    <>
    <div className='Container Offerings-Section' id="test" >
      <div className=""  >
        <div className="container mt-3">
          <h1 className="text-center mb-3 banner-title">Our Solution Offerings</h1>
          <h5 className="text-center mb-3 text"> While preconfigured, these solutions often allow for customization to meet specific organizational needs.</h5>
          <Row>
            {cardData.map((card, index) => (
              <Col key={index} md={3} className="col">
                <div className="card" style={{ width: '100%', padding: '30px', border: 'none' }} >
                  <img className="card-img-top rounded-circle animated-image"
                    src={card.imgSrc}
                    alt={`${card.title}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleNavigation(card.component)}
                 
                  />
                  <div className="card-body text-center">
                    <h4
                      className="card-title"
                      style={{ cursor: 'pointer' }}
                      //onClick={() => handleNavigation(card.link)}
                      
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
      </div>

      {page && (
          <div   ref={pageRef} className={`page-container ${fade ? 'fade-out' : 'fade-in'}`} >
           <div className="close-icon" onClick={handleClose}>
              ✖
            </div>
             
            {page}
          </div>
        )}
    </>
  );
};

export default TestCard;
