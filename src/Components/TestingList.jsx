import React, { useState } from "react";
import { Container, Card, Button, Modal } from "react-bootstrap";
import '../CSS/Navbar.css'
import '../CSS/POCList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const TestingList = () => {
  const [show, setShow] = useState(false);
  const [selectedPOC, setSelectedPOC] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (POC) => {
    setSelectedPOC(POC);
    setShow(true);
  };
  const ListStyle = {
       
  
    
    color: '#000',
    backgroundColor:'rgb(231, 239, 241)',
  
  
};

  const POCsData = [
    {
      id: 1,
      icon: "https://themexriver.com/wp/choicy-wp/wp-content/uploads/2023/12/s1-icon-1.webp",
      title: "Hellmann Demo",
      description: "Hellmann Worldwide Logistics is one of the largest international logistics providers.",
      video: "../videos/Hellmann.m4v",
    },
    {
      id: 2,
      icon: "https://themexriver.com/wp/choicy-wp/wp-content/uploads/2023/12/s1-icon-2.webp",
      title: "POC 2",
      description: "Focused on delivering exceptional design experiences.",
      video: "../videos/PDF Upload.mp4",
    },
    {
      id: 3,
      icon: "https://themexriver.com/wp/choicy-wp/wp-content/uploads/2024/01/s1-icon-5.png",
      title: "POC 3",
      description: "Every pleasure is to be welcomed and every pain avoided.",
      video: "../videos/PDF Upload.mp4",
    },
    {
        id: 4,
        icon: "https://themexriver.com/wp/choicy-wp/wp-content/uploads/2023/12/s1-icon-1.webp",
        title: "POC 1",
        description: "Every pleasure is to be welcomed and every pain avoided.",
        video: "../videos/PDF Upload.mp4",
      },
      {
        id: 5,
        icon: "https://themexriver.com/wp/choicy-wp/wp-content/uploads/2023/12/s1-icon-2.webp",
        title: "POC 2",
        description: "Focused on delivering exceptional design experiences.",
        video: "../videos/PDF Upload.mp4",
      },
      {
        id: 6,
        icon: "https://themexriver.com/wp/choicy-wp/wp-content/uploads/2024/01/s1-icon-5.png",
        title: "POC 3",
        description: "Every pleasure is to be welcomed and every pain avoided.",
        video: "../videos/PDF Upload.mp4",
      },
  ];

  return (
    <section className="py-5"  style={ListStyle} >
      <Container>
        <h2 className="text-center mb-4 banner-title">Transport and Logistic Solutions</h2>
        <h5 className="text-center mb-5 dec">
          Explore our wide range of services designed to meet your needs and help your business thrive.
        </h5>
        <div className="keyboard-grid">
          {POCsData.map((POC) => (
           <div key={POC.id} className="keyboard-card">
           <Card className="text-center h-100">
             <Card.Body>
               <div className="mb-3">
                 <img
                   src={POC.icon}
                   alt={POC.title}
                   style={{ width: "50px", height: "50px" }}
                 />
               </div>
               <Card.Title>{POC.title}</Card.Title>
               <Card.Text>{POC.description}</Card.Text>
               <div className="button-group">
                             <Button className="custom-btn live-btn" onClick={() => handleShow(POC)}>
                               Live Demo
                             </Button>
                             <Button className="custom-btn download-btn" href={POC.video}  download>
                             <FontAwesomeIcon icon={faDownload} /> 
                             </Button></div>
             </Card.Body>
           </Card>
         </div>
         
          ))}
        </div>
      </Container>

      {/* Modal for Video */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="custom-modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter">
      
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>{selectedPOC?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          {selectedPOC && (
            <iframe
              width="100%"
              height="315"
              src={selectedPOC.video}
              title={selectedPOC.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </Modal.Body>
        <Modal.Footer className="modal-footer-custom">
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default TestingList;
