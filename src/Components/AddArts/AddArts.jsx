import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Typewriter } from "react-simple-typewriter";

const AddArts = () => {
  const { user } = use(AuthContext);

  return (
    <div className="py-17">
      <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6 text-secondary">
            <span style={{ fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["All New Artwork"]}
                loop={3}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label font-medium mb-1">User Name</label>
              <input
                type="text"
                name="name"
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="label font-medium mb-1">User Email</label>
              <input
                type="email"
                name="email"
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                defaultValue={user?.email}
                readOnly
              />
            </div>
            {/* Title Field */}
            <div>
              <label className="label font-medium">Title</label>
              <input
                type="text"
                name="title"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter name"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="label font-medium mb-1">Category</label>
              <select
                defaultValue={""}
                name="category"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select category
                </option>
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

            {/* Medium */}
            <div>
              <label className="label font-medium">Medium</label>
              <input
                type="text"
                name="medium"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter Medium"
              />
            </div>

            {/* Visibility */}
            <div>
              <label className="label font-medium mb-1">Visibility</label>
              <select
                defaultValue={""}
                name="visibility"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select visibility
                </option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                required
                rows="3"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className="label font-medium">Photo URL</label>
              <input
                type="url"
                name="photo"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
            >
              Add Artwork
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArts;
