import React, { use, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { FaUser, FaEnvelope, FaCamera, FaEdit, FaSave } from "react-icons/fa";

const Profile = () => {
  const { user, updateUserProfile, setUser } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [artworksCount, setArtworksCount] = useState(0);

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUserProfile({
        displayName: name,
        photoURL: photo,
      });

      // Update context
      setUser({
        ...user,
        displayName: name,
        photoURL: photo,
      });

      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user?.email) return;

    const fetchStats = async () => {
      setLoading(true);
      try {
        // 1️⃣ Fetch Favorites count
        const favRes = await fetch(
          `https://artify-artworks-server.vercel.app/my-favorites?email=${user.email}`
        );
        const favData = await favRes.json();
        setFavoritesCount(favData.length);

        // 2️⃣ Fetch all artworks by the user to sum likes
        const artsRes = await fetch(
          `https://artify-artworks-server.vercel.app/my-galleries?email=${user.email}`
        );
        const artsData = await artsRes.json();
        setArtworksCount(artsData.length);

        // const totalLikes = artsData.reduce(
        //   (sum, art) => sum + (art.likes || 0),
        //   0
        // );
        // setLikesCount(totalLikes);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user?.email]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-[#1a2332]"
          : "bg-linear-to-br from-pink-50 via-purple-50 to-blue-50"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
              Profile
            </span>
          </h1>
          <p
            className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Manage your personal information
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1 w-full">
            <div
              className={`rounded-3xl shadow-2xl overflow-hidden ${
                isDark
                  ? "bg-[#2d3748] border border-gray-700"
                  : "bg-white border border-white/20"
              }`}
              style={{
                animation: "slideInLeft 0.6s ease-out",
              }}
            >
              {/* Profile Header with linear */}
              <div className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 h-32"></div>

              {/* Profile Image */}
              <div className="relative -mt-16 flex justify-center px-4 sm:px-6">
                <div className="relative group">
                  <img
                    src={
                      photo ||
                      "https://cdn-icons-png.flaticon.com/128/456/456212.png"
                    }
                    alt="Profile"
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 sm:border-8 border-white shadow-xl"
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FaCamera className="text-white text-2xl" />
                  </div>
                </div>
              </div>

              {/* User Info */}
              <div className="text-center px-6 py-6">
                <h2
                  className={`text-2xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {user?.displayName || "User"}
                </h2>
                <p
                  className={`text-sm mb-4 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {user?.email}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div
                    className={`p-3 rounded-xl ${
                      isDark
                        ? "bg-[#1a2332]"
                        : "bg-linear-to-br from-pink-50 to-purple-50"
                    }`}
                  >
                    <p
                      className={`text-2xl font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {artworksCount}
                    </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Artworks
                    </p>
                  </div>
                  {/* <div
                    className={`p-3 rounded-xl ${
                      isDark
                        ? "bg-[#1a2332]"
                        : "bg-linear-to-br from-purple-50 to-blue-50"
                    }`}
                  >
                    <p
                      className={`text-2xl font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {likesCount}
                    </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Likes
                    </p>
                  </div> */}
                  <div
                    className={`p-3 rounded-xl ${
                      isDark
                        ? "bg-[#1a2332]"
                        : "bg-linear-to-br from-blue-50 to-indigo-50"
                    }`}
                  >
                    <p
                      className={`text-2xl font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {favoritesCount}
                    </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Favorites
                    </p>
                  </div>
                </div>

                {/* Edit Button */}
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="mt-6 w-full py-3 rounded-xl font-semibold text-white bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <FaEdit />
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Edit Form */}
          <div className="lg:col-span-2 w-full">
            <div
              className={`rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 ${
                isDark
                  ? "bg-[#2d3748] border border-gray-700"
                  : "bg-white border border-white/20"
              }`}
              style={{
                animation: "slideInRight 0.6s ease-out",
              }}
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3
                  className={`text-xl sm:text-2xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {isEditing ? "Edit Information" : "Profile Information"}
                </h3>
                {isEditing && (
                  <button
                    onClick={() => setIsEditing(false)}
                    className={`text-sm ${
                      isDark
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Cancel
                  </button>
                )}
              </div>

              {isEditing ? (
                // Edit Mode
                <div onSubmit={handleUpdate} className="space-y-4 sm:space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      className={`flex items-center gap-2 text-xs sm:text-sm font-semibold ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      <FaUser className="text-purple-500 text-sm sm:text-base" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 ${
                        isDark
                          ? "bg-[#1a2332] border-gray-600 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                          : "bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500/20"
                      }`}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Photo URL Input */}
                  <div className="space-y-2">
                    <label
                      className={`flex items-center gap-2 text-xs sm:text-sm font-semibold ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      <FaCamera className="text-purple-500 text-sm sm:text-base" />
                      Photo URL
                    </label>
                    <input
                      type="text"
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 ${
                        isDark
                          ? "bg-[#1a2332] border-gray-600 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                          : "bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500/20"
                      }`}
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>

                  {/* Preview */}
                  <div
                    className={`p-3 sm:p-4 rounded-xl ${
                      isDark ? "bg-[#1a2332]" : "bg-gray-50"
                    }`}
                  >
                    <p
                      className={`text-xs sm:text-sm font-semibold mb-3 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Preview
                    </p>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={
                          photo ||
                          "https://cdn-icons-png.flaticon.com/128/456/456212.png"
                        }
                        alt="Preview"
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-purple-500"
                      />
                      <div className="min-w-0 flex-1">
                        <p
                          className={`font-semibold text-sm sm:text-base truncate ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {name || "Your Name"}
                        </p>
                        <p
                          className={`text-xs sm:text-sm truncate ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={handleUpdate}
                    disabled={loading}
                    className={`w-full py-2.5 sm:py-3.5 text-sm sm:text-base rounded-xl font-semibold text-white bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Updating...
                      </>
                    ) : (
                      <>
                        <FaSave />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              ) : (
                // View Mode
                <div className="space-y-4 sm:space-y-6">
                  {/* Name Display */}
                  <div
                    className={`p-4 sm:p-6 rounded-xl ${
                      isDark
                        ? "bg-[#1a2332]"
                        : "bg-linear-to-br from-pink-50 to-purple-50"
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-linear-to-r from-pink-500 to-purple-500">
                        <FaUser className="text-white text-sm sm:text-base" />
                      </div>
                      <p
                        className={`text-xs sm:text-sm font-semibold ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Full Name
                      </p>
                    </div>
                    <p
                      className={`text-base sm:text-lg font-semibold ml-9 sm:ml-11 break-all ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {user?.displayName || "Not set"}
                    </p>
                  </div>

                  {/* Email Display */}
                  <div
                    className={`p-4 sm:p-6 rounded-xl ${
                      isDark
                        ? "bg-[#1a2332]"
                        : "bg-linear-to-br from-purple-50 to-blue-50"
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-linear-to-r from-purple-500 to-blue-500">
                        <FaEnvelope className="text-white text-sm sm:text-base" />
                      </div>
                      <p
                        className={`text-xs sm:text-sm font-semibold ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Email Address
                      </p>
                    </div>
                    <p
                      className={`text-base sm:text-lg font-semibold ml-9 sm:ml-11 break-all ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {user?.email}
                    </p>
                  </div>

                  {/* Photo URL Display */}
                  <div
                    className={`p-4 sm:p-6 rounded-xl ${
                      isDark
                        ? "bg-[#1a2332]"
                        : "bg-linear-to-br from-blue-50 to-indigo-50"
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-linear-to-r from-blue-500 to-indigo-500">
                        <FaCamera className="text-white text-sm sm:text-base" />
                      </div>
                      <p
                        className={`text-xs sm:text-sm font-semibold ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Profile Photo
                      </p>
                    </div>
                    <p
                      className={`text-xs sm:text-sm ml-9 sm:ml-11 break-all ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {user?.photoURL || "Default avatar"}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;
