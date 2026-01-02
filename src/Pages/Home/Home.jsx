import React from "react";
import { useLoaderData } from "react-router";
import ArtCards from "../../Components/ArtCards/ArtCards";
import Banner from "../../Components/Banner/Banner";
import { Typewriter } from "react-simple-typewriter";
import Artists from "../../Components/Artists/Artists";
import MostLiked from "../../Components/MostLiked/MostLiked";
import Features from "../../Components/Features";
import Categories from "../../Components/Categories";
import Testimonials from "../../Components/Testimonials";
import Newsletter from "../../Components/Newsletter";
import FinalCTA from "../../Components/FinalCTA";
import FAQ from "../../Components/Faq";
import HowItWorks from "../../Components/HowItworks";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <h2 className="font-bold text-center text-secondary text-2xl mb-8">
        <span style={{ fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Featured Artworks"]}
            loop={3}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
      <div className="max-w-7xl mx-auto w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data.map((art) => (
            <ArtCards
              showUpdate={false}
              showDelete={false}
              showLikes={false}
              key={art._id}
              art={art}
            ></ArtCards>
          ))}
        </div>
      </div>
      <Artists></Artists>
      <MostLiked></MostLiked>
      {/* === New sections below === */}
      {/* <HowItWorks /> */}
      {/* 5. Why Choose ARTIFY? / Features */}
      <Features />
      {/* 6. Browse by Categories */}
      <Categories />
      {/* 7. Community Statistics
      <Stats /> */}
      {/* 8. What Our Artists & Collectors Say */}
      <Testimonials />
      {/* 9. Stay Updated – Newsletter */}
      <Newsletter />
      {/* 10. Frequently Asked Questions */}
      <FAQ />
      {/* 11. Final Strong CTA */}
      <FinalCTA />
    </div>
  );
};

export default Home;
