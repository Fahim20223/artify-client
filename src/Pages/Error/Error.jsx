import React from "react";

const Error = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      {/* <img className="w-80" src={errorImg} alt="" /> */}
      <div className="mt-40">
        <h2 className="text-4xl font-bold text-purple-500 text-center">
          404 NOT FOUND
        </h2>
        <img
          src="https://media.istockphoto.com/id/1491758639/vector/3d-computer-error-message-error-404-page-not-found-exclamation-mark.jpg?s=612x612&w=0&k=20&c=-1TNUUcKYMcfDyVHLpKxvsLO1fG8UvGwu0TARMnlisM="
          alt=""
        />
      </div>
    </div>
  );
};

export default Error;
