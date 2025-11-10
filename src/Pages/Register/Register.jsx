import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const [passError, setPassError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setPassError(
        "Password must contain at least one uppercase, one lowercase letter, and be at least 6 characters long."
      );
      return;
    } else {
      setPassError("");
    }

    // toast.loading("Creating user...", { id: "create-user" });
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(displayName, photoURL);
        navigate("/");
        toast.success("User Create successfully!", { id: "create-user" });
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.message, { id: "create-user" });
      });
  };

  const handleGoogleSignIn = () => {
    // toast.loading("creating user...", { id: "create-user" });
    signInWithGoogle()
      .then((result) => {
        toast.success("Successfully Created");
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex min-h-screen  items-center">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Register</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Name</label>
              <input
                type="text"
                name="displayName"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Name"
              />

              <label className="label">PhotoURL</label>
              <input
                type="text"
                name="photoURL"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Photo URL"
              />
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Email"
              />
              {/* password field */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Password"
              />
              {passError && <p className="text-xs text-error">{passError}</p>}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600">
                Register
              </button>
            </fieldset>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white rounded-full text-black border-[#e5e5e5]"
          >
            <FcGoogle />
            Login with Google
          </button>
          <p className="text-center">
            Already have an account? Please{" "}
            <Link className="text-blue-500 hover:text-blue-800" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
