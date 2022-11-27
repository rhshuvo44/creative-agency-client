import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner/Banner";
import Clients from "./Clients/Clients";
import Contact from "./Contact/Contact";
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
      <Services />
      <Works />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
