import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome To Cura Connect"
        }
        imageUrl={"/medical.png"}
       
      imageHeight="100px"
  imageWidth="100%"
      />
      <Biography imageUrl={"/Doc.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;