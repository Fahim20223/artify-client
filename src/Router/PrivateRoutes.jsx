import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Navigate } from "react-router";
import Loader from "../Pages/Loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
