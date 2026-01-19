import React, { useState, use, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  // Detect theme changes from navbar
  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const dark =
        htmlElement.classList.contains("dark") ||
        htmlElement.getAttribute("data-theme") === "dark";
      setIsDark(dark);
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // const handleLogIn = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(email, password);
  //   signInUser(email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       navigate(location.state || "/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       toast.error(error.message);
  //     });
  // };

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const artworks = [
    "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?w=800&q=80",
    "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    // "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80",
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-[#1a2332]"
          : "bg-linear-to-br from-pink-50 via-purple-50 to-blue-50"
      }`}
    >
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Artwork Showcase */}
          <div className="hidden lg:block space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h1
                className={`text-5xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Welcome to{" "}
                <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                  Artify
                </span>
              </h1>
              <p
                className={`text-xl ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Creative Artwork Showcase Platform
              </p>
            </div>

            {/* Artwork Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {artworks.map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer transform transition-all duration-500 hover:scale-105"
                  style={{
                    animation: `float ${3 + idx * 0.5}s ease-in-out infinite`,
                    animationDelay: `${idx * 0.2}s`,
                  }}
                >
                  <img
                    src={img}
                    alt={`Artwork ${idx + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">
                      Artwork {idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div
              className={`grid grid-cols-3 gap-4 mt-8 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <div className="text-center space-y-2">
                <div className="text-3xl">🎨</div>
                <p className="text-sm font-medium">Upload Artworks</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl">❤️</div>
                <p className="text-sm font-medium">Like & Favorite</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl">🔍</div>
                <p className="text-sm font-medium">Explore & Search</p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto">
            <div
              className={`rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] ${
                isDark
                  ? "bg-[#2d3748] border border-gray-700"
                  : "bg-white/80 backdrop-blur-lg border border-white/20"
              }`}
              style={{
                animation: "slideInRight 0.6s ease-out",
              }}
            >
              {/* Header with linear */}
              <div className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 p-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-2">
                  Welcome Back!
                </h2>
                <p className="text-white/90">
                  Login to continue your creative journey
                </p>
              </div>

              <div className="p-8 space-y-6">
                <form onSubmit={handleLogIn} className="space-y-5">
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      className={`block text-sm font-semibold ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 ${
                        isDark
                          ? "bg-[#1a2332] border-gray-600 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                          : "bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500/20"
                      }`}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="space-y-2">
                    <label
                      className={`block text-sm font-semibold ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 ${
                        isDark
                          ? "bg-[#1a2332] border-gray-600 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                          : "bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500/20"
                      }`}
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  {/* Forgot Password */}
                  <div className="text-right">
                    <a
                      href="#"
                      className="text-sm font-medium text-purple-500 hover:text-purple-600 transition-colors"
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-white bg-pink-500 hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/50"
                  >
                    Login to Artify
                  </button>
                </form>

                {/* Divider */}
                <div className="relative">
                  <div className={`absolute inset-0 flex items-center`}>
                    <div
                      className={`w-full border-t ${
                        isDark ? "border-gray-600" : "border-gray-200"
                      }`}
                    ></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span
                      className={`px-4 ${
                        isDark
                          ? "bg-[#2d3748] text-gray-400"
                          : "bg-white/80 text-gray-500"
                      }`}
                    >
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Google Sign In */}
                <button
                  onClick={handleGoogleSignIn}
                  className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] ${
                    isDark
                      ? "bg-[#1a2332] text-white hover:bg-[#253448] border border-gray-600"
                      : "bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-200 hover:shadow-lg"
                  }`}
                >
                  <FcGoogle className="text-2xl" />
                  Sign in with Google
                </button>

                {/* Register Link */}
                <p
                  className={`text-center text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  New to Artify?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-purple-500 hover:text-purple-600 transition-colors"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </div>

            {/* Mobile Features */}
            <div
              className={`lg:hidden grid grid-cols-3 gap-4 mt-8 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <div className="text-center space-y-2">
                <div className="text-3xl">🎨</div>
                <p className="text-xs font-medium">Upload</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl">❤️</div>
                <p className="text-xs font-medium">Favorite</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl">🔍</div>
                <p className="text-xs font-medium">Explore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Login;
