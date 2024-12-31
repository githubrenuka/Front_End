import React from 'react'

import Navbar from '../Components/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Banner from '../Components/Banner';
import TestCard from '../Components/TestCard';
import Footer from '../Components/Footer';

import Features from '../Components/Features';
import Testimonial from '../Components/Testimonial';
import About from '../Components/About';





const Mainpage = () => {
    return (
      <>
        <Navbar />
        <Banner />
        <About />
        
       <TestCard />
       <Features />

        <Testimonial />

      
        <Footer />
      
      
        
        
      </>
    );
  };

  export default Mainpage;