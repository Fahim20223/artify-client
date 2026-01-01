import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Spruce up your space",
    subtitle: "stylish posters",
    badge: "New Collection",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=1400&h=600&fit=crop",
    title: "Modern Art Gallery",
    subtitle: "contemporary designs",
    badge: "Trending",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1400&h=600&fit=crop",
    title: "Nature Inspired",
    subtitle: "botanical prints",
    badge: "Best Seller",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const goToNext = () => {
    setDirection(1);
    setCurrent((current + 1) % slides.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <div className="w-full py-8 flex items-center justify-center">
      <div className="w-[95%] max-w-7xl mx-auto">
        {/* <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Banner Slider Component
          </h1>
          <p className="text-gray-600 text-lg">
            3 Images with Smooth Framer Motion Transitions
          </p>
        </div> */}

        <div className="relative w-full h-[300px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 250, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="max-w-2xl"
                  >
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="inline-block mb-4"
                    >
                      <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm md:text-base font-bold shadow-lg">
                        {slides[current].badge}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight"
                    >
                      {slides[current].title}
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-6 md:mb-8"
                    >
                      {slides[current].subtitle}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-900 px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                      Shop Now
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden sm:block"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden sm:block"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? "bg-white w-8 md:w-10 h-2 md:h-2.5"
                    : "bg-white/50 w-2 md:w-2.5 h-2 md:h-2.5 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
            <div className="bg-black/50 backdrop-blur-sm text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
              {current + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Thumbnail Preview */}
        <div className="mt-6 md:mt-8 flex justify-center gap-3 md:gap-4">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-20 h-16 md:w-28 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === current
                  ? "ring-4 ring-gray-900 shadow-xl"
                  : "ring-2 ring-gray-300 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={slide.image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {index === current && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gray-900/20"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
