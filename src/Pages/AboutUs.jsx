import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us"}
        imageUrl={"/medical.png"}
      />
      <Biography imageUrl={"/intro.png"} />
    </>
  );
};

export default AboutUs;