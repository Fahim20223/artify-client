import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ArtCards from "../ArtCards/ArtCards";
import { Typewriter } from "react-simple-typewriter";

const ExploreArts = () => {
  const data = useLoaderData();
  const [arts, setArts] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortByLikes, setSortByLikes] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    fetch(
      `https://artify-artworks-server.vercel.app/search?search=${search_text}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArts(data);
      });
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    const category = e.target.value;
    setSelectedCategory(category);
    fetch(
      `https://artify-artworks-server.vercel.app/public-artworks?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArts(data);
      });
  };

  const handleLikesSort = (e) => {
    const sortValue = e.target.value;
    setSortByLikes(sortValue);

    fetch(
      `https://artify-artworks-server.vercel.app/public-artworks?category=${selectedCategory}&sort=${sortValue}`
    )
      .then((res) => res.json())
      .then((data) => setArts(data));
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
      <div className="flex flex-col md:flex-row justify-center  gap-4 mb-10">
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
            <input name="search" type="search" placeholder="Search" />
          </label>
          <button className="btn bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full">
            Search
          </button>
        </form>
        <form onClick={handleCategoryChange}>
          <div>
            <select
              defaultValue={""}
              name="category"
              required
              className="select rounded-full focus:border-0 focus:outline-gray-200 ml-5"
            >
              <option value="">Select category</option>
              <option value="Digital Painting">Digital Painting</option>
              <option value="Abstract">Abstract</option>
              <option value="Fantasy Art">Fantasy Art</option>
              <option value="Portrait">Portrait</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Watercolor">Watercolor</option>
              <option value="Cityscape">Cityscape</option>
              <option value="Minimalism">Minimalism</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </form>

        <div>
          <select
            onChange={handleLikesSort}
            className="select rounded-full focus:border-0 focus:outline-gray-200 ml-5"
          >
            <option value="">Sort by likes</option>
            <option value="likes-desc">HIgh → Low</option>
            <option value="likes-asc">Low → High</option>
          </select>
        </div>

        {/* <div className="flex justify-center items-center py-5">
          <select defaultValue="Pick a color" className="select">
            <option disabled={true}>Pick a color</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div> */}
      </div>

      <div className="max-w-7xl mx-auto w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
          {arts.map((art) => (
            <ArtCards key={art._id} art={art}></ArtCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreArts;
