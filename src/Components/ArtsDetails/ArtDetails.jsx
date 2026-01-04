import React, { use, useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { AiFillLike, AiFillHeart } from "react-icons/ai";
import { FaPalette, FaUser, FaCalendar, FaTag } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import Loader from "../../Pages/Loader/Loader";

const ArtDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [art, setArt] = useState({});
  const [relatedArtworks, setRelatedArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const dark =
        htmlElement.classList.contains("dark") ||
        htmlElement.getAttribute("data-theme") === "dark";
      setIsDark(dark);
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch(`https://artify-artworks-server.vercel.app/artworks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data.result);
        setLoading(false);

        // Fetch related artworks by category
        if (data.result.category) {
          fetch(
            `https://artify-artworks-server.vercel.app/artworks?category=${data.result.category}&limit=4`
          )
            .then((res) => res.json())
            .then((relatedData) => {
              // Filter out the current artwork
              const filtered = relatedData.filter((item) => item._id !== id);
              setRelatedArtworks(filtered.slice(0, 3));
            });
        }
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
    fetch(`https://artify-artworks-server.vercel.app/favorites/${art._id}`, {
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
    fetch(`https://artify-artworks-server.vercel.app/artworks/${id}/like`, {
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

  // Mock multiple images - replace with actual data from your database
  const artworkImages = art.images || [art.image];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-[#1a2332]"
          : "bg-linear-to-br from-pink-50 via-purple-50 to-blue-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          <Link to="/" className="hover:text-purple-500 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            to="/explore"
            className="hover:text-purple-500 transition-colors"
          >
            Explore
          </Link>
          <span className="mx-2">/</span>
          <span className={isDark ? "text-white" : "text-gray-900"}>
            {art?.title}
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="md:col-span-2 space-y-6">
            {/* Title Section */}
            <div
              className={`${
                isDark ? "bg-[#2d3748]" : "bg-white"
              } rounded-3xl p-8 shadow-xl border ${
                isDark ? "border-gray-700" : "border-white/20"
              }`}
            >
              <h1
                className={`text-4xl md:text-5xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <Typewriter
                  words={[art?.title]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                />
              </h1>

              {/* Artist Info */}
              <div className="flex items-center gap-4">
                <img
                  className="w-16 h-16 rounded-full object-cover border-4 border-linear-to-r from-pink-500 to-purple-500"
                  src={art?.artistPhoto}
                  alt={art?.artistName}
                />
                <div>
                  <p
                    className={`text-md font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {art?.artistName}
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {art?.totalArtworks} artworks published
                  </p>
                </div>
              </div>
            </div>

            {/* Main Image Gallery */}
            <div
              className={`${
                isDark ? "bg-[#2d3748]" : "bg-white"
              } rounded-3xl p-6 shadow-xl border ${
                isDark ? "border-gray-700" : "border-white/20"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={artworkImages[selectedImage]}
                  alt={art?.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              {artworkImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {artworkImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative overflow-hidden rounded-md transition-all duration-300 ${
                        selectedImage === idx
                          ? "ring-4 ring-purple-500 scale-105"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`View ${idx + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Overview Section */}
            <div
              className={`${
                isDark ? "bg-[#2d3748]" : "bg-white"
              } rounded-3xl p-8 shadow-xl border ${
                isDark ? "border-gray-700" : "border-white/20"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Overview
              </h2>
              <p
                className={`text-md leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {art?.description}
              </p>
            </div>

            {/* Related Artworks */}
            {relatedArtworks.length > 0 && (
              <div
                className={`${
                  isDark ? "bg-[#2d3748]" : "bg-white"
                } rounded-3xl p-8 shadow-xl border ${
                  isDark ? "border-gray-700" : "border-white/20"
                }`}
              >
                <h2
                  className={`text-2xl font-bold mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Related Artworks
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {relatedArtworks.map((related) => (
                    <Link
                      key={related._id}
                      to={`/art-details/${related._id}`}
                      className="group relative overflow-hidden rounded-xl"
                    >
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="text-white">
                          <p className="font-semibold">{related.title}</p>
                          <p className="text-sm">{related.artistName}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Info & Actions */}
          <div className="space-y-6">
            {/* Key Information */}
            <div
              className={`${
                isDark ? "bg-[#2d3748]" : "bg-white"
              } rounded-3xl p-6 shadow-xl border ${
                isDark ? "border-gray-700" : "border-white/20"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Key Information
              </h3>

              <div className="space-y-4">
                {/* Category */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-linear-to-r from-pink-500 to-purple-500">
                    <FaTag className="text-white text-md" />
                  </div>
                  <div>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Category
                    </p>
                    <p
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {art?.category}
                    </p>
                  </div>
                </div>

                {/* Medium */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-500">
                    <FaPalette className="text-white text-md" />
                  </div>
                  <div>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Medium
                    </p>
                    <p
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {art?.medium}
                    </p>
                  </div>
                </div>

                {/* Artist */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500">
                    <FaUser className="text-white text-md" />
                  </div>
                  <div>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Artist
                    </p>
                    <p
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {art?.artistName}
                    </p>
                  </div>
                </div>

                {/* Likes */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-linear-to-r from-red-500 to-pink-500">
                    <AiFillLike className="text-white text-md" />
                  </div>
                  <div>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Total Likes
                    </p>
                    <p
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {art?.likes || 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className={`${
                isDark ? "bg-[#2d3748]" : "bg-white"
              } rounded-3xl p-6 shadow-xl border ${
                isDark ? "border-gray-700" : "border-white/20"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Actions
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => handleLike(art._id)}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-linear-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <AiFillLike className="text-xl" />
                  Like This Artwork
                </button>

                {user ? (
                  <button
                    onClick={handleFavorites}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                      isDark
                        ? "bg-[#1a2332] text-white hover:bg-[#253448] border border-gray-600"
                        : "bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300"
                    }`}
                  >
                    <AiFillHeart className="text-xl text-red-500" />
                    Add to Favorites
                  </button>
                ) : (
                  <Link
                    to={"/login"}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                      isDark
                        ? "bg-[#1a2332] text-white hover:bg-[#253448] border border-gray-600"
                        : "bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300"
                    }`}
                  >
                    <AiFillHeart className="text-xl text-red-500" />
                    Log in to add to favorites
                  </Link>
                )}
              </div>
            </div>

            {/* Stats Card */}
            <div
              className={`${
                isDark
                  ? "bg-linear-to-br from-purple-900/50 to-pink-900/50"
                  : "bg-linear-to-br from-purple-100 to-pink-100"
              } rounded-3xl p-6 shadow-xl border ${
                isDark ? "border-purple-700/50" : "border-purple-200"
              }`}
            >
              <h3
                className={`text-md font-bold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Engagement Stats
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    Views
                  </span>
                  <span
                    className={`font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {art?.views || 0}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    Likes
                  </span>
                  <span
                    className={`font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {art?.likes || 0}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    Favorites
                  </span>
                  <span
                    className={`font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {art?.favorites || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDetails;
