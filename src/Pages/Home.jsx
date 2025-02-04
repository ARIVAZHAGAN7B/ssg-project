import React from 'react';
import BackgroundImage from "../assets/background.webp";  // Corrected import

const Home = () => {
  return (
    <>
      <div style={{ 
        backgroundImage: `url(${BackgroundImage})`, 
        height: '100vh',  
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        width:"99%",
        margin:"6px",
        borderRadius:"5px"
      }}>
      </div>
    </>
  );
}

export default Home;
