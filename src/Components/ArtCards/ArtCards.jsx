import React, { use, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
//Card layout with image, title, artist name, category, likes count,
// and View Details button.
const ArtCards = ({
  art,
  showLikes = true,
  showUpdate = false,
  showDelete = false,
  showUnFavorites = false,
  setArts,
  showDetails = true,
}) => {
  const {
    image,
    title,
    artistName,
    category,
    likes,
    _id,
    medium,
    visibility,
    totalArtworks,
    description,
  } = art;
  const { user } = use(AuthContext);
  const updateArtRef = useRef(null);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artify-artworks-server.vercel.app/artworks/${art._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setArts((prevArts) =>
              prevArts.filter((a) => a._id.toString() !== art._id.toString())
            );
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };
  const handleUnFavorites = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, unfavorite it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://artify-artworks-server.vercel.app/my-favorites/${art._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setArts((prevArts) =>
              prevArts.filter((a) => a._id.toString() !== art._id.toString())
            );
            Swal.fire({
              title: "Successfully Done!",
              text: "Your file has been unfavorite.",
              icon: "success",
            });
          });
      }
    });
  };

  const handleModalOpen = () => {
    updateArtRef.current.showModal();
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      image: e.target.photo.value,
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      medium: e.target.medium.value,
      visibility: e.target.visibility.value,
      artistName: user?.displayName,
      artistPhoto: user?.photoURL,
      userName: user?.displayName,
      userEmail: user?.email,
      likes: 0,
      createdAt: new Date(),
      totalArtworks: e.target.artworks.value,
    };
    fetch(`https://artify-artworks-server.vercel.app/artworks/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        updateArtRef.current.close();
        toast.success("Successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={image}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <h2 className="badge text-xs badge-xs badge-secondary rounded-full">
          {category}
        </h2>

        <div className="text-secondary">{artistName}</div>
        {showLikes && (
          <div>
            <p className="badge badge-2xl badge-secondary btn badge-outline ">
              likes: {likes}
            </p>
          </div>
        )}
        {/* <p className="text-sm text-base-content/70">by {author}</p> */}

        <div className="flex">
          {showUpdate && (
            <div onClick={handleModalOpen}>
              <div className="badge badge-secondary btn mr-6">Update</div>

              <dialog
                ref={updateArtRef}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg text-center text-secondary">
                    Update the artwork
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="label font-medium mb-1">
                        User Name
                      </label>
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
                      <label className="label font-medium mb-1">
                        User Email
                      </label>
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
                        defaultValue={title}
                        type="text"
                        name="title"
                        required
                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                        placeholder="Enter title"
                      />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                      <label className="label font-medium mb-1">Category</label>
                      <select
                        defaultValue={category}
                        name="category"
                        required
                        className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                      >
                        <option value="" disabled>
                          Select category
                        </option>
                        <option value="Digital Painting">
                          Digital Painting
                        </option>
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
                        defaultValue={medium}
                        type="text"
                        name="medium"
                        required
                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                        placeholder="Enter Medium"
                      />
                    </div>

                    {/* Visibility */}
                    <div>
                      <label className="label font-medium mb-1">
                        Visibility
                      </label>
                      <select
                        defaultValue={visibility}
                        name="visibility"
                        required
                        className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                      >
                        <option value="" disabled>
                          Select visibility
                        </option>
                        <option value="public">public</option>
                        <option value="private">private</option>
                      </select>
                    </div>

                    {/* Total-Artworks */}
                    <div>
                      <label className="label font-medium">
                        Number Of Artworks
                      </label>
                      <input
                        defaultValue={totalArtworks}
                        type="number"
                        name="artworks"
                        required
                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                        placeholder="Enter Total Artworks"
                      />
                    </div>

                    {/* Description Textarea */}
                    <div>
                      <label className="label font-medium">Description</label>
                      <textarea
                        defaultValue={description}
                        name="description"
                        required
                        rows="3"
                        className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                        placeholder="Enter description"
                      ></textarea>
                    </div>

                    {/* Photo URL */}
                    <div>
                      <label className="label font-medium">Photo URL</label>
                      <input
                        defaultValue={image}
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
                      Update Artwork
                    </button>
                  </form>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Cancel</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          )}
          {showDelete && (
            <button
              onClick={handleDelete}
              className="badge badge-secondary badge-outline btn"
            >
              Delete
            </button>
          )}
        </div>
        <div>
          {showUnFavorites && (
            <p
              onClick={handleUnFavorites}
              className="badge badge-secondary badge-outline btn"
            >
              Make unfavorite
            </p>
          )}
        </div>

        <div className="card-actions justify-between items-center mt-4">
          <div className="flex gap-4 text-sm text-base-content/60">
            {/* <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {views}
            </span> */}
            {/* <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {likes}
            </span> */}
            {/* to={`/model-details/${_id}`} */}
          </div>
          {showDetails && (
            <Link
              to={`/art-details/${_id}`}
              className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtCards;
