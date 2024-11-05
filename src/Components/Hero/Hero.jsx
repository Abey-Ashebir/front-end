import React from 'react';
import './Hero.css';
import hand from '../Assets/hand_icon.png';
// import arrow_icon from '../Assets/arrow-icon.jpg';
import hero_icon from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div >
          <div className='hand-icon'>
            <p>New</p>
            <img src={hand} alt="Hand Icon" />
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className='hero-latest-btn'>
          <div>Latest Collection</div>
          {/* <img src={arrow_icon}alt="" /> */}
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_icon} alt="Hero Icon" />
      </div> 
    </div>
  );
};

export default Hero;
