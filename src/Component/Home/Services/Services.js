import React from "react";
import image1 from "../../../images/icons/service1.png";
import Service from "./Service";

const services = [
  {
    id: 1,
    title: "web design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis sit quos explicabo quia nemo nobis, delectus quasi aut distinctio.",
    image: `${image1}`,
  },
  {
    id: 2,
    title: "web design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis sit quos explicabo quia nemo nobis, delectus quasi aut distinctio.",
    image: `${image1}`,
  },
  {
    id: 3,
    title: "web design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis sit quos explicabo quia nemo nobis, delectus quasi aut distinctio.",
    image: `${image1}`,
  },
];
const Services = () => {
  return (
    <div className="px-20 my-20">
      <h2 className="text-center text-3xl text-[#2D2D2D]]">
        Provide awesome <span className=" text-[#7AB259]">services</span>
      </h2>
      <div className="my-10 md:flex md:gap-5">
        {services.map((service) => (
          <Service id={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
