import React from "react";
import partner1 from "../../../images/logos/airbnb.png";
import partner2 from "../../../images/logos/google.png";
import partner3 from "../../../images/logos/netflix.png";
import partner4 from "../../../images/logos/slack.png";
import partner5 from "../../../images/logos/uber.png";
import { Swiper, SwiperSlide } from "swiper/react";
import './Partner.css'


const partners = [
  {
    id: 1,
    image: `${partner1}`,
  },
  {
    id: 2,
    image: `${partner2}`,
  },
  {
    id: 3,
    image: `${partner3}`,
  },
  {
    id: 4,
    image: `${partner4}`,
  },
  {
    id: 5,
    image: `${partner5}`,
  },
];

const Partner = () => {
  return (
    // <div className="px-20 md:flex gap-10 my-10 items-center">
    //   <div className="md:w-1/5">
    //     <img src={img1} alt="..." title="..." />
    //   </div>
    //   <div className="md:w-1/5 mt-5 md:mt-0">
    //     <img src={img2} alt="..." title="..." />
    //   </div>
    //   <div className="md:w-1/5 ">
    //     <img src={img3} alt="..." title="..." />
    //   </div>
    //   <div className="md:w-1/5 ">
    //     <img src={img4} alt="..." title="..." />
    //   </div>
    //   <div className="md:w-1/5">
    //     <img src={img5} alt="..." title="..." />
    //   </div>
    // </div>
    <div className="px-20">
    <Swiper
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="partner-portfolio"
        >
          {partners.map((partner) => (
            <SwiperSlide id={partner.id}>
              <div className="card mt-10">
                <figure>
                  <img src={partner.image} alt="..." />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
  );
};

export default Partner;
