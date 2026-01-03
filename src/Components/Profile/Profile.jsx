import React, { use, useState } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Profile = () => {
  const { user, updateUserProfile, setUser } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

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
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-5 border border-blue-300 my-9 rounded-2xl">
      <h2 className="text-2xl font-bold mb-5">My Profile</h2>

      <div className="flex flex-col items-center mb-5">
        <img
          src={photo || "https://cdn-icons-png.flaticon.com/128/456/456212.png"}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover mb-3 border"
        />
        <p className="text-lg font-semibold">{user?.displayName || "User"}</p>
        <p className="text-sm text-gray-500">{user?.email}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <button
          type="submit"
          className={`btn text-white bg-linear-to-r from-pink-500 to-red-600 w-full ${
            loading ? "loading" : ""
          }`}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
