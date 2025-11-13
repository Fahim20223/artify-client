import React, { useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Artists = () => {
  //   const { user } = use(AuthContext);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch(`https://artify-artworks-server.vercel.app/best-artists`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArtists(data);
      });
  }, []);

  return (
    <div className="py-12 px-6 mx-auto max-w-8/12">
      <h2 className="text-xl text-secondary md:text-2xl font-bold text-center mb-10">
        🎨 Top Artists of the Week
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {artists.map((artist, idx) => (
          <div
            key={idx}
            className="bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition "
          >
            <img
              src={artist.artistPhoto}
              alt={artist._id}
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h3 className="font-bold text-xl">{artist.artistName}</h3>
            <p className="py-1">{artist.userEmail}</p>
            <p className="text-white text-sm mb-3 ">
              {artist.category} • {artist.totalArtworks} artworks
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
