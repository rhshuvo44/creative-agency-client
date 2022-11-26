import React from "react";
import img1 from "../../images/logos/airbnb.png";
import img2 from "../../images/logos/google.png";
import img3 from "../../images/logos/netflix.png";
import img4 from "../../images/logos/slack.png";
import img5 from "../../images/logos/uber.png";

const Partner = () => {
  return (
    <div className="px-20 md:flex gap-10 my-10 items-center">
      <div className="md:w-1/5">
        <img src={img1} alt="..." title="..." />
      </div>
      <div className="md:w-1/5 mt-5 md:mt-0">
        <img src={img2} alt="..." title="..." />
      </div>
      <div className="md:w-1/5 ">
        <img src={img3} alt="..." title="..." />
      </div>
      <div className="md:w-1/5 ">
        <img src={img4} alt="..." title="..." />
      </div>
      <div className="md:w-1/5">
        <img src={img5} alt="..." title="..." />
      </div>
    </div>
  );
};

export default Partner;
