import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { AiFillLike } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import Loader from "../../Pages/Loader/Loader";

const ArtDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [art, setArt] = useState({});
  console.log(art);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/artworks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setArt(data.result);
        setLoading(false);
      });
  }, [user, id]);

  const handleFavorites = () => {
    const finalArt = {
      image: art.image,
      title: art.title,
      category: art.category,
      artistName: art.name,
      artistPhoto: art.artistPhoto,
      createdAt: new Date(),
      userEmail: user.email,
      medium: art.medium,
      userName: art.name,
      totalArtworks: art.totalArtworks,
      description: art.description,
      likes: art.likes,
    };
    fetch(`http://localhost:3000/favorites/${art._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalArt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully added to favorites");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLike = (id) => {
    fetch(`http://localhost:3000/artworks/${id}/like`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        setArt(data.updatedArt);
        toast.success("Liked!");
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }
  return (
    <div className="min-h-[63vh]">
      <h2 className="font-bold text-center text-secondary text-2xl p-7">
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
      <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
            <div className="shrink-0 w-full md:w-1/2">
              <img
                src={art?.image}
                alt={""}
                className="w-full object-cover rounded-xl shadow-md"
              />
              <div className="flex mt-6 items-center bg-secondary w-1/2 p-4 rounded-xl bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white">
                <img
                  className="w-11 h-11 rounded-full object-cover mr-5"
                  src={art?.artistPhoto}
                  alt=""
                />
                <div>
                  <h2>{art?.artistName}</h2>
                  <p>{art?.totalArtworks} artwork</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary">
                {art?.title}
              </h1>
              <h1 className="text-secondary">Artist : {art?.artistName}</h1>

              <div className="flex gap-3">
                <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                  {art?.category}
                </div>

                <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                  likes: {art?.likes}
                </div>
              </div>
              <h2 className="text-secondary text-base md:text-lg ">
                Medium: {art?.medium}
              </h2>

              <p className="text-secondary  text-base md:text-lg">
                {art?.description}
              </p>

              <div className="flex gap-3 mt-6">
                {/* <Link
                  to={`/update-model/${model._id}`}
                  className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
                >
                  Update Model
                </Link> */}
                <button
                  onClick={() => handleLike(art._id)}
                  className="btn btn-secondary rounded-xl"
                >
                  <AiFillLike />
                </button>
                <button
                  onClick={handleFavorites}
                  className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDetails;
