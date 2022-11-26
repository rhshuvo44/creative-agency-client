import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Partner from "./Partner";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
        <Partner />
        <Services />
      </header>
    </>
  );
};

export default Home;
