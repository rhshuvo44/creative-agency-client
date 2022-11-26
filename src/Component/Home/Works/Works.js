import React from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Works.css";
import work1 from "../../../images/carousel-1.png";

const works = [
  {
    id: 1,
    image: `${work1}`,
  },
  {
    id: 2,
    image: `${work1}`,
  },
  {
    id: 3,
    image: `${work1}`,
  },
  {
    id: 4,
    image: `${work1}`,
  },
  {
    id: 5,
    image: `${work1}`,
  },
];
const Works = () => {
  return (
    <div className="bg-[#111430]">
      <div className="px-20 py-10">
        <h2 className="text-center text-3xl text-base-100">
          Here are some of <span className=" text-[#7AB259]">our works</span>
        </h2>
        <Swiper
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            600: {
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
          modules={[FreeMode, Pagination]}
          className="work-portfolio"
        >
          {works.map((work) => (
            <SwiperSlide id={work.id}>
              <div className="card card-compact mt-10 bg-base-100 shadow-xl">
                <figure>
                  <img src={work.image} alt="..." />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
