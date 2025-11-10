import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const AddArts = () => {
  const { user } = use(AuthContext);

  return <div>Add your Arts</div>;
};

export default AddArts;
