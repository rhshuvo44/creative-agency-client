import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner/Banner";
import Partner from "./Partner/Partner";
import Services from "./Services/Services";
import Works from "./Works/Works";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <Partner />
      <Services />\
      <Works />
    </>
  );
};

export default Home;
