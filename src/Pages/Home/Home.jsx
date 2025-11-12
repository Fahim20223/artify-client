import React from "react";
import { useLoaderData } from "react-router";
import ArtCards from "../../Components/ArtCards/ArtCards";
import Banner from "../../Components/Banner/Banner";
import { Typewriter } from "react-simple-typewriter";
import Artists from "../../Components/Artists/Artists";
import MostLiked from "../../Components/MostLiked/MostLiked";

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

      <div className="max-w-9/12 mx-auto">
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
    </div>
  );
};

export default Home;
