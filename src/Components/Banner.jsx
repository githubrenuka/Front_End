import React ,{useState} from 'react'

import Container from 'react-bootstrap/Container';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Button, Modal, Row, Col } from 'react-bootstrap';
import Animation from './Animation';
import '../CSS/banner.css'
import '../App.css'




 


const Banner = () => {
  
        const bannerStyle = {
            backgroundImage: `url('/images/bgimage3.png')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
           height:'100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
        };
      
      
        const [show, setShow] = useState(false);

        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);
  return (
  
<>
<Container fluid>
    <figure className='position-relative'>
<div style={bannerStyle} className='banner img-fluid'>
 <Container>
      <Row className='banner_name'>
        <Col >
       <h1><b><Animation /></b></h1> 
        </Col>
        <Col></Col>
      </Row>
      <div className="container ">
  

      <Row className="align-items-center py-4">
  <Col sm>
    <div className="play d-inline-flex align-items-center ">
  { /*   <Button variant="primary" className="explore-btn">
        Explore More
      </Button>*/}
      <div className="play-button-container  d-inline-flex align-items-center"   onClick={handleShow}
                style={{ cursor: 'pointer' }}>
        <div className="outer-circle me-2"></div>
        <i
          className="bi bi-play-circle play-icon"
          style={{ fontSize: '3rem', cursor: 'pointer' }}
        ></i>
      </div>
      <div className="mt-3">
        
        <a href="#show" onClick={handleShow} className="play-video-link">
          Play Video
        </a>
      </div>
    </div>
  </Col>
  <Col sm></Col>
  <Col sm></Col>
  <Col sm></Col>
</Row>
</div>

</Container>
</div>
   
  
      
  
     

      {/* Modal for Playing Video */}
      <Modal show={show} id="show" onHide={handleClose} centered className="custom-modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter">
      
      <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>At a Glance</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          <div className="embed-responsive embed-responsive-16by9">
          <iframe
                    width="100%"
                    height="315"
                    src="../videos/PDF Upload.mp4"
              title="Video Player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      </figure>
      </Container>
      </>
  )
}

export default Banner
