import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const slides = [
    "https://t4.ftcdn.net/jpg/04/02/30/49/360_F_402304964_lBkApbVhuhBwHuUPmKfJxi2ieO6cbGkD.jpg",
    "https://cdn.venngage.com/template/thumbnail/small/e4a2ab78-480e-4ec9-91e0-874defd493c7.webp",
    "https://thumbs.dreamstime.com/b/colorful-watercolor-splash-background-paint-strokes-ink-blots-artistic-brush-textures-abstract-horizontal-vector-banner-379332871.jpg",
  ];
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 md:h-96">
              <img
                src={slide}
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
