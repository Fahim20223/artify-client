import React from "react";
import { Fade } from "react-awesome-reveal";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router";
import Swal from "sweetalert2";
//Card layout with image, title, artist name, category, likes count,
// and View Details button.
const ArtCards = ({
  art,
  showLikes = true,
  showUpdate = true,
  showDelete = true,
}) => {
  const { image, title, artistName, category, likes, _id } = art;

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
        fetch(`http://localhost:3000/artworks/${art._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
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

        <div className="text-xs text-secondary">{artistName}</div>
        {showLikes && (
          <p className="badge badge-2xl badge-secondary btn badge-outline">
            <BiSolidLike /> {likes}
          </p>
        )}
        {/* <p className="text-sm text-base-content/70">by {author}</p> */}

        <div className="flex">
          {showUpdate && (
            <div className="badge badge-secondary btn mr-6">Update</div>
          )}
          {showDelete && (
            <div
              onClick={handleDelete}
              className="badge badge-secondary badge-outline btn"
            >
              Delete
            </div>
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
          <Link
            to={`/art-details/${_id}`}
            className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtCards;
