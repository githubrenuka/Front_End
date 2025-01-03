import React from 'react'


import { Routes,Route } from 'react-router-dom'
import Mainpage from './Pages/Mainpage'
import WebDevelopmentPage from './Pages/WebDevelopmentPage'
import TestCard from './Components/TestCard'
import Footer from './Components/Footer'
import POCList from './Components/POCList'
import Features from './Components/Features'
import Testimonial from './Components/Testimonial'
import About from './Components/About'





const App = () => {
  return (
    <Routes>
  
  
    <Route path='/' element = { <Mainpage />} />
   
    <Route path="*" element={<div>404 - Page Not Found</div>} />
    <Route path='/web' element={<WebDevelopmentPage/>} />
    <Route path='/test' element={<TestCard/>} />
    <Route path='/features' element={<Features/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Footer />} />
    <Route path='/POClist' element={<POCList />} />
    <Route path='/testimonial' element={<Testimonial />} />
    
   


   
    
    </Routes>
  )
}

export default App
