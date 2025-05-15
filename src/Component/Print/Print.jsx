import React from "react";
import { Swiper as Slider, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importing images
import greenhouseImage from "/photos/horticulture project.JPG";
import aeroponicImage from "/photos/702.png";
import hydroponicImage from "/photos/420.png";
import skillDevelopmentImage from "/photos/SKILL DEVELOPMENT.png";
import researchFacilityImage from "/photos/Advance Research.png";
import agricultureProductsImage from "/photos/RADIOLOGY SOFTWARE ARTICLE IMAGE (3264 x 2448 px) (2).png";
import tissueCultureLabImage from "/photos/TCLAB.png";

const services = [
  {
    id: 1,
    title: "GREEN HOUSE PROJECT",
    image: greenhouseImage,
  },
  {
    id: 2,
    title: "AEROPONIC FACILITY",
    image: aeroponicImage,
  },
  {
    id: 3,
    title: "HYDROPONIC SYSTEM",
    image: hydroponicImage,
  },
  {
    id: 4,
    title: "SKILL DEVELOPMENT",
    image: skillDevelopmentImage,
  },
  {
    id: 5,
    title: "ADVANCE RESEARCH FACILITY",
    image: researchFacilityImage,
  },
  {
    id: 6,
    title: "AGRICULTURE PRODUCTS",
    image: agricultureProductsImage,
  },
  {
    id: 7,
    title: "TISSUE CULTURE LAB SETUP",
    image: tissueCultureLabImage,
  },
];

const Print = () => {
  return (
    <div className="max-w-full mx-auto py-8">
      <h2 className="text-5xl text-emerald-900 font-bold text-center mb-9 underline">Services We Offer</h2>
      <Slider
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-3"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img src={service.image} alt={service.title} className="w-660px h-full object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-semibold">{service.description}</h3>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-emerald-700 bg-opacity-60 text-white p-4">
                <p className="text-3xl">{service.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Print;
