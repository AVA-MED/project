import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo3 from "/photos/408.jpg";
import photo4 from "/photos/409.png";
import photo5 from "/photos/410.png";
import photo6 from "/photos/411.jpg";
import photo8 from "/photos/412.webp";
import photo9 from "/photos/414.png";
import photo10 from "/photos/415.jpeg";

const Associate = () => {
  const settings = {
    dots: false,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "ease-in-out",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024, // Adjust for medium screens
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="pt-5 pb-5 bg-white">
      <h1 className="text-center text-5xl pt-8 pb-8 font-serif text-gray-800">
        OUR ASSOCIATES
        <div className="h-1 w-16 mx-auto mt-1"></div>
      </h1>
      <Slider {...settings}>
        <div className="px-4"><img src={photo3} alt="Welcomhotel" className="mx-auto h-32" /></div>
        <div className="px-4"><img src={photo4} alt="Welcomhotel" className="mx-auto h-32" /></div>
        <div className="px-4"><img src={photo5} alt="Welcomhotel" className="mx-auto h-32" /></div>
        <div className="px-4"><img src={photo6} alt="Welcomhotel" className="mx-auto h-32" /></div>
        <div className="px-4"><img src={photo8} alt="Welcomhotel" className="mx-auto h-32" /></div>
        <div className="px-4"><img src={photo9} alt="Welcomhotel" className="mx-auto h-32" /></div>
        <div className="px-4"><img src={photo10} alt="Welcomhotel" className="mx-auto h-32" /></div>
      </Slider>
    </section>
  );
};

export default Associate;
