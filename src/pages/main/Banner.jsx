import React from 'react';
import { BannerStyle } from './ContentStyle';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <BannerStyle>
        <div className="inner">
        <span className="Main-Text"><Link to={'/product'}>Click here to shop if you have items you want to purchase!</Link></span>
        <div className="video-box">
        <video
          src="./images/visual_vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        >
        </video>
        <div className="buy-now"><Link to={'/product'}>Buy Now</Link></div>
        </div>
        </div>
        </BannerStyle>
    );
};

export default Banner;