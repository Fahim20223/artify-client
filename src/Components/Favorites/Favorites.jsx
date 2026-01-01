import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import ArtCards from "../ArtCards/ArtCards";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import Loader from "../../Pages/Loader/Loader";

const Favorites = () => {
  const { user } = use(AuthContext);
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://artify-artworks-server.vercel.app/my-favorites?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setArts(data);
      });
  }, [user]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="max-w-7xl mx-auto min-h-[63vh] py-5">
      <h2 className="text-2xl font-bold text-center text-secondary py-8">
        {arts?.length === 0 ? (
          <Fade cascade={false} direction="down" triggerOnce={true}>
            My Favorite ArkWorks
          </Fade>
        ) : (
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["My Favorite Artworks"]}
                loop={3}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        )}
      </h2>

      <div>
        {arts?.length === 0 ? (
          <h2 className="flex justify-center items-center text-purple-600 md:text-3xl text-xl font-bold pt-7">
            <span style={{ fontWeight: "bold" }}>
              <Typewriter
                words={[" You have not added any favorite artwork yet !"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {arts?.map((art) => (
              <ArtCards
                showDetails={false}
                setArts={setArts}
                showUnFavorites={true}
                showLikes={false}
                key={art._id}
                art={art}
              ></ArtCards>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
