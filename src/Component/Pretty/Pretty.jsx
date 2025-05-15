import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "/photos/1.png";
import photo1 from "/photos/2.png";
import photo2 from "/photos/3.png";
import photo3 from "/photos/4.png";
import photo4 from "/photos/5.png";
import photo5 from "/photos/6.png";
import photo6 from "/photos/7.png";
import photo7 from "/photos/8.png";
import photo8 from "/photos/9.png";
import photo9 from "/photos/10.png";
import photo10 from "/photos/12.jpeg";
import photo11 from "/photos/15.png";
import photo13 from "/photos/14.png";
import photo14 from "/photos/16.jpg";
import photo15 from "/photos/17.png";


const Pretty = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "ease-in-out",
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-5 pb-5 bg-white">
      <h1 className="text-center text-4xl sm:text-6xl pt-8 font-serif text-green-800 underline">
        Our Clients
        <div className="h-1 w-14 mx-auto mt-1"></div>
      </h1>
      <h2 className="text-center text-xl sm:text-3xl pt-6 font-serif text-green-800 underline">
        More than 25,000 Satisfied Clients
        <div className="h-1 w-1 mx-auto mt-1"></div>
      </h2>
      <div className="mt-12 sm:mt-12">
        <Slider {...settings}>
          <div className="px-4"><img src={photo} alt="Client 1" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo1} alt="Client 2 - Puma" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo2} alt="Client 3 - Welcomhotel" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo3} alt="Client 4 - Taj Hotel" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo4} alt="Client 5" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo5} alt="Client 6" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo6} alt="Client 7" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo7} alt="Client 8" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo8} alt="Client 9" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo9} alt="Client 10" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo10} alt="Client 11" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo11} alt="Client 12" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo1} alt="Client 13" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo13} alt="Client 14" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo14} alt="Client 15" className="mx-auto h-32" /></div>
          <div className="px-4"><img src={photo15} alt="Client 16" className="mx-auto h-32" /></div>
        </Slider>
      </div>
    </section>
  );
};

export default Pretty;
