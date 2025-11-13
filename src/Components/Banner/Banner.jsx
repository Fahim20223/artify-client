import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const [dimensions, setDimensions] = useState([]);

  useEffect(() => {
    fetch(`https://artify-artworks-server.vercel.app/banner`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDimensions(data);
      });
  }, []);

  return (
    <div className="my-16 pt-27">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
      >
        {dimensions.map((dimension, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 md:h-96">
              <img
                src={dimension.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Optional overlay text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
                  {index === 0 && "Explore Trending Art"}
                  {index === 1 && "Discover Amazing Artists"}
                  {index === 2 && "Get Inspired"}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
