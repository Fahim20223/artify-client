import { ArrowRight } from "lucide-react";
import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";

export default function FinalCTA() {
  const { user } = use(AuthContext);
  return (
    <section className="py-20 md:py-28 bg-linear-to-br from-primary to-secondary text-primary-content text-center max-w-7xl mx-auto rounded-2xl my-9 w-[90%]">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Ready to Own a Masterpiece?
        </h2>
        <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto">
          Join thousands of creators and collectors shaping the future of art
          today.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            to={"/artworks"}
            className="btn bg-linear-to-r from-pink-500 to-red-600 text-white btn-lg gap-3 px-10 border-0"
          >
            Browse Artworks
            <ArrowRight size={18} />
          </Link>
          {!user ? (
            <Link to={"/login"} className="btn btn-lg">
              Login to be a Artist
            </Link>
          ) : (
            <Link to={"/dashboard/add-artwork"} className="btn btn-lg">
              Become an Artist
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
