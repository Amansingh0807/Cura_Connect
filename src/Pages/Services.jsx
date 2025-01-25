import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Services = () => {
  const ServicesArray = [
    {
    
      imageUrl: "/dep3.png",
    },
    {
     
      imageUrl: "/dep4.png",
    },
    {
      
      imageUrl: "/dep5.png",
    },
    {
      
      imageUrl: "/departments/neuro.jpg",
    },
    {
      
        imageUrl: "/departments/neuro.jpg",
      },
  ];

  const TestomonialArray= [
    {
    
      imageUrl: "/dep3.png",
    },
    {
     
      imageUrl: "/dep4.png",
    },
    {
      
      imageUrl: "/dep5.png",
    },
    {
      
      imageUrl: "/departments/neuro.jpg",
    },
    {
      
        imageUrl: "/departments/neuro.jpg",
      },
      {
      
        imageUrl: "/departments/neuro.jpg",
      },
      {
      
        imageUrl: "/departments/neuro.jpg",
      },
  ];



  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
     <div className="service-container">
        <h2>What Would You Like To Do Today?</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {ServicesArray.map((depart, index) => {
            return (
              <div key={index} className="servicescard">
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>

<div className="content-services">
<h2>Our Mission is to make India Healthy again</h2>
<p className="left-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed nostrum corporis deleniti expedita nulla laborum mollitia perspiciatis ad repudiandae ea ipsa, ut nesciunt optio! Atque expedita ratione assumenda repudiandae!

</p>
</div>

      <div className="container-down">
        <h2>Trust of India</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {TestomonialArray.map((depart, index) => {
            return (
              <div key={index} className="servicescard">
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Services;