import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          we simplify access to healthcare by providing comprehensive knowledge of all medical departments. Our platform empowers users to make informed decisions and easily schedule appointments with healthcare professionals. Through innovative technology, we bridge the gap between patients and providers, ensuring healthcare is both accessible and convenient. Our mission is to enhance health outcomes with seamless, user-friendly solutions.
          </p>
          <p>we bridge the gap between patients and providers</p>
          <p>
          At Cura Coonect, we enhance health outcomes with seamless, innovative solutions designed for ease of use and accessibility. Our dedication is to transform your healthcare experience, making it as simple and efficient as possible.
          
          </p>
          <p>Leveraging cutting-edge technology ensuring that accessing healthcare is both convenient and straightforward.</p>
          <p>Trusted Experts Committed to Your Well-Being</p>
        </div>
      </div>
    </>
  );
};

export default Biography;