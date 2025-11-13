import React, { useEffect, useState } from "react";

const MostLiked = () => {
  const [liked, setLiked] = useState([]);
  useEffect(() => {
    fetch(`https://artify-artworks-server.vercel.app/most-liked`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLiked(data);
      });
  }, []);
  return (
    <div>
      <div className="py-10 px-4 md:px-10 max-w-10/12 mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8 text-secondary">
          🌟 Community Highlights (Most Liked)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {liked.map((art) => (
            <div
              key={art._id}
              className="bg-white card shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden"
            >
              {/* Artwork Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-white/90 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow">
                  ❤️ {art.likes}
                </span>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                  {art.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {art.description}
                </p>

                {/* Artist */}
                <div className="flex items-center mt-3">
                  <img
                    src={art.artistPhoto}
                    alt={art.artistName}
                    className="w-8 h-8 rounded-full object-cover border border-gray-300 mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {art.artistName}
                  </span>
                </div>

                {/* Category */}
                <div className="mt-3 flex justify-between items-center text-sm text-gray-500">
                  <span>{art.category}</span>
                  <span className="font-semibold text-gray-800">
                    ${art.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostLiked;
