import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import customer1 from "../../../images/customer-1.png";
import customer2 from "../../../images/customer-2.png";
import customer3 from "../../../images/customer-3.png";
import "./Clients.css";

const clients = [
  {
    id: 1,
    image: `${customer1}`,
    name: "Ripon",
    designation: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
  {
    id: 2,
    image: `${customer2}`,
    name: "Ripon",
    designation: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
  {
    id: 3,
    image: `${customer3}`,
    name: "Ripon",
    designation: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
  {
    id: 4,
    image: `${customer1}`,
    name: "Ripon",
    designation: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
  {
    id: 5,
    image: `${customer2}`,
    name: "Ripon",
    designation: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
  },
];
const Clients = () => {
  return (
      <div className="p-20">
        <h2 className="text-center text-3xl text[#171B4E] mb-10">
          Clients <span className=" text-[#7AB259]">Feedback</span>
        </h2>
        <Swiper
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="client-portfolio"
        >
          {clients.map((client) => (
            <SwiperSlide id={client.id}>
              <div className="card border border-[#BFBFBF]">
                <figure className="px-5 pt-2">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={client.image} alt="..." />
                    </div>
                  </div>
                  <div className="px-5">
                    <h2 className="card-title">{client.name}</h2>
                    <h2 className="">{client.designation}</h2>
                  </div>
                </figure>

                <div className="card-body">
                  <p>{client.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default Clients;
