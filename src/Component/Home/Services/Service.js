import React from "react";
import "./Service.css";
const Service = ({ service }) => {
  const { title, description, image } = service;
  return (
    <div className="card service-card">
      <figure className="px-10 pt-10">
        <img src={image} alt={title} title={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
