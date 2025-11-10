import React from "react";
import { useLoaderData } from "react-router";
import ArtCards from "../../Components/ArtCards/ArtCards";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2 className="font-bold text-center text-secondary text-2xl py-8">
        Featured Artworks
      </h2>
      <div className="max-w-9/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data.map((art) => (
            <ArtCards showLikes={false} key={art._id} art={art}></ArtCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
