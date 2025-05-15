import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Video1 from "/photos/Green Cinematic Vintage Nature Youtube Video Ad.mp4";

const slides = [
  { id: 1, src: Video1, type: "video", title: "Green House" },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false, // ✅ removed the dash error
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // Increase time to allow video to play
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className="relative overflow-hidden min-h-[600px] flex justify-center items-center bg-white">
      <div className="w-full">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative w-full">
              {slide.type === "video" ? (
                <video
                  className="w-full h-[600px] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-[600px] object-cover"
                />
              )}

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white  bg-opacity-40 p-4 rounded-lg">
                <h1 className="text-4xl sm:text-5xl font-bold">
                  {slide.title}
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
