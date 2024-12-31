import {React} from 'react'


import 'bootstrap-icons/font/bootstrap-icons.css';





const WebBanner = () => {
    

  const bannerStyle = {
    backgroundImage: `url('/images/img17.png')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain', // Maintain original width, reduce height to 50%
    height: '90vh', // Adjust as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  };
  
  


  return (
    <>
    
    <div style={bannerStyle} className='banner'></div>
   


   
     
      



     </>
   
  )
}

export default WebBanner;
