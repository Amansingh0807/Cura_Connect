import React from "react";

const Hero = ({ title, imageUrl, showParagraph = true, showImage = true, imageHeight = "auto", imageWidth = "100%" }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          { showParagraph &&
          <p>
           we simplify access to healthcare by providing comprehensive knowledge of all medical departments. Our platform empowers users to make informed decisions and easily schedule appointments with healthcare professionals. Through innovative technology, we bridge the gap between patients and providers, ensuring healthcare is both accessible and convenient. Our mission is to enhance health outcomes with seamless, user-friendly solutions.
        
          </p>}
        </div>
        <div className="banner">
          { showImage && <img src={imageUrl} alt="hero" className="animated-image" />}
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;