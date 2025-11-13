import React from "react";
import { FaLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[70vh]">
      {/* <img className="w-80" src={errorImg} alt="" /> */}
      <div className="mt-40 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-purple-500 text-center">
          404 NOT FOUND
        </h2>
        <img
          src="https://media.istockphoto.com/id/1491758639/vector/3d-computer-error-message-error-404-page-not-found-exclamation-mark.jpg?s=612x612&w=0&k=20&c=-1TNUUcKYMcfDyVHLpKxvsLO1fG8UvGwu0TARMnlisM="
          alt=""
        />
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md"
        >
          <FaLeftLong />
          Back to Homepage{" "}
        </button>
      </div>
    </div>
  );
};

export default Error;
