import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Successfully Logged Out");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      <li className="mr-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to="/artworks">Explore Artworks</NavLink>
      </li>
      {/* {user && (
        <>
          <li className="mr-2">
            <NavLink to="/addArtwork">Add Artwork</NavLink>
          </li>
          <li className="mr-2">
            <NavLink to="myGallery">My Gallery</NavLink>
          </li>
          <li>
            <NavLink to="myFavorite">My Favorites</NavLink>
          </li>
        </>
      )} */}
      {user && (
        <>
          <li className="mr-2">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
      {!user && (
        <>
          <li className="mr-2">
            <NavLink to="/about-us">About-Us</NavLink>
          </li>
          <li className="mr-2">
            <NavLink to="/contact-us">Contact-Us</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-base-100 shadow-md py-1 sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className=" text-2xl font-bold text-secondary">
            ART<span className="text-purple-500">IFY</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />

          {!user ? (
            <>
              <NavLink
                to="/login"
                className="btn btn-sm mr-2 text-white bg-linear-to-r from-[#ec4899] to-[#ef4444]"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn bg-linear-to-r from-[#ec4899] to-[#ef4444] text-white btn-sm"
              >
                Register
              </NavLink>
            </>
          ) : (
            <div className="relative">
              <img
                src={
                  user
                    ? user.photoURL
                    : "https://cdn-icons-png.flaticon.com/128/456/456212.png"
                }
                alt="User Avatar"
                className="w-13 h-13 rounded-full cursor-pointer object-cover"
                onClick={() => setShowDropdown((prev) => !prev)} // toggle dropdown
              />

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-base-100 rounded-lg shadow-lg p-3 z-10">
                  <p className="text-sm font-semibold text-center mb-2">
                    {user.displayName || "User"}
                  </p>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-error btn-sm w-full"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
