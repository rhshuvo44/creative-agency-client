import React from "react";
import bannerImg from "../../../images/logos/Frame.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero md:min-h-screen banner px-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="md:w-1/2 rounded-lg"
          alt="..."
          title="..."
        />
        <div className="md:w-2/4 md:pr-20">
          <h1 className="text-5xl font-bold">
            Let’s Grow Your Brand To The Next Level
          </h1>
          <p className="py-6 pr-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          <button className="dark-btn mb-20 md:mb-0">Hire Us</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
