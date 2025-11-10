import React from "react";
import { useLoaderData } from "react-router";
import ArtCards from "../ArtCards/ArtCards";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const ExploreArts = () => {
  const data = useLoaderData();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-20">
      <h2 className="font-bold text-center text-secondary text-2xl mb-8">
        <span style={{ fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["All Artworks"]}
            loop={3}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
      <form onSubmit={handleSearch} className="flex justify-center gap-2">
        <label className="input rounded-full mb-10">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" placeholder="Search" />
        </label>
        <button className="btn btn-secondary rounded-full">Search</button>
      </form>

      <div className="max-w-9/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
          {data.map((art) => (
            <ArtCards key={art._id} art={art}></ArtCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreArts;
