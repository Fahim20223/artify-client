import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import ArtCards from "../ArtCards/ArtCards";

const MyGallery = () => {
  const { user } = use(AuthContext);
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/my-galleries?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setArts(data);
      });
  }, [user]);

  if (loading) {
    return <div>Please wait......Loading......</div>;
  }
  return (
    <div>
      <div className="max-w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {arts.map((art) => (
          <ArtCards
            showUpdate={true}
            showDelete={true}
            showLikes={false}
            key={art._id}
            art={art}
          ></ArtCards>
        ))}
      </div>
    </div>
  );
};

export default MyGallery;
