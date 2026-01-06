import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Target,
  Lightbulb,
  Shield,
  Zap,
  Heart,
  Users,
  Globe2,
  ArrowRight,
  CheckCircle2,
  Star,
  Palette,
  Award,
  TrendingUp,
} from "lucide-react";

const AboutUs = () => {
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

  const stats = [
    { value: "10K+", label: "Active Artists", icon: Users },
    { value: "50K+", label: "Artworks Shared", icon: Sparkles },
    { value: "100K+", label: "Community Members", icon: Heart },
    { value: "150+", label: "Countries Reached", icon: Globe2 },
  ];

  const values = [
    {
      icon: Users,
      title: "Community First",
      description:
        "Building genuine connections between artists and art lovers through shared passion and mutual respect.",
      color: "blue",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description:
        "Constantly evolving our platform with cutting-edge features to empower creative expression.",
      color: "yellow",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "Protecting intellectual property and ensuring a safe, authentic environment for all creators.",
      color: "green",
    },
    {
      icon: Zap,
      title: "Empower Creators",
      description:
        "Providing artists with powerful tools to showcase, monetize, and grow their creative journey.",
      color: "purple",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Foundation",
      desc: "Artify is born with a vision to democratize art",
    },
    {
      year: "2024",
      title: "First 1K Artists",
      desc: "Rapid growth as artists discover our platform",
    },
    {
      year: "2024",
      title: "Global Expansion",
      desc: "Artists from 50+ countries join the community",
    },
    {
      year: "2025",
      title: "100K Members",
      desc: "Reaching a major milestone in our journey",
    },
  ];

  const team = [
    {
      name: "Sarah Anderson",
      role: "Founder & CEO",
      description:
        "Passionate about connecting artists with their audience worldwide.",
      icon: Award,
      linear: "from-blue-400 to-blue-600",
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      description: "Creating beautiful experiences that inspire creativity.",
      icon: Palette,
      linear: "from-purple-400 to-purple-600",
    },
    {
      name: "Emma Rodriguez",
      role: "Community Manager",
      description: "Building and nurturing our vibrant artist community.",
      icon: Users,
      linear: "from-green-400 to-green-600",
    },
  ];

  const colorMap = {
    blue: isDark ? "from-blue-500 to-blue-700" : "from-blue-400 to-blue-600",
    yellow: isDark
      ? "from-yellow-500 to-yellow-700"
      : "from-yellow-400 to-yellow-600",
    green: isDark
      ? "from-green-500 to-green-700"
      : "from-green-400 to-green-600",
    purple: isDark
      ? "from-purple-500 to-purple-700"
      : "from-purple-400 to-purple-600",
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark ? "bg-[#1a2332]" : "bg-white"
      }`}
    >
      {/* Animated Hero Section */}
      <div
        className={`relative overflow-hidden ${
          isDark
            ? "bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950"
            : "bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50"
        }`}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Star
              className={`${isDark ? "text-yellow-400" : "text-yellow-500"}`}
              size={18}
            />
            <span
              className={`text-sm font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Trusted by 10,000+ artists worldwide
            </span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Where Art Meets
            <span className="block bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Community
            </span>
          </h1>

          <p
            className={`text-xl sm:text-2xl max-w-3xl mx-auto mb-10 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We're building the world's most inspiring platform for artists to
            create, share, and thrive together
          </p>

          <button className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all">
            Join Our Community
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className={`py-16 sm:py-20 ${isDark ? "bg-[#2d3748]" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center group">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${
                      isDark
                        ? "from-purple-500 to-pink-500"
                        : "from-purple-400 to-pink-400"
                    } mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <div
                    className={`text-4xl sm:text-5xl font-bold mb-2 bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm sm:text-base ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className={`inline-block px-4 py-2 rounded-full ${
                isDark
                  ? "bg-purple-900/30 text-purple-400"
                  : "bg-purple-100 text-purple-600"
              } text-sm font-semibold mb-6`}
            >
              Our Story
            </div>
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Turning a Dream Into Reality
            </h2>
            <div
              className={`space-y-4 text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <p>
                In early 2024, a small team of passionate art enthusiasts came
                together with a bold vision: to create a digital canvas where
                every artist could shine, regardless of their background or
                location.
              </p>
              <p>
                What started as a simple idea quickly transformed into something
                magical. Artists from every corner of the globe began sharing
                their work, forming connections, and inspiring each other in
                ways we never imagined.
              </p>
              <p>
                Today, Artify is more than just a platform—it's a movement.
                We're democratizing access to art, empowering creators, and
                building a community that celebrates creativity in all its
                forms.
              </p>
            </div>
          </div>

          <div
            className={`relative rounded-3xl overflow-hidden ${
              isDark ? "bg-[#2d3748]" : "bg-gray-100"
            } p-8`}
          >
            <div className="space-y-6">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl bg-linear-to-br ${
                      isDark
                        ? "from-purple-500 to-pink-500"
                        : "from-purple-400 to-pink-400"
                    } flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform`}
                  >
                    {milestone.year}
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-bold mb-1 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {milestone.title}
                    </h4>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div
        className={`py-16 sm:py-24 ${isDark ? "bg-[#2d3748]" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Our Purpose
            </h2>
            <p
              className={`text-xl ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Guided by passion, driven by innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className={`relative rounded-3xl overflow-hidden ${
                isDark
                  ? "bg-linear-to-br from-blue-900 to-blue-950"
                  : "bg-linear-to-br from-blue-50 to-blue-100"
              } p-8 sm:p-12 group hover:scale-105 transition-transform`}
            >
              <Target
                className={`mb-6 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                size={48}
              />
              <h3
                className={`text-3xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Our Mission
              </h3>
              <p
                className={`text-lg leading-relaxed ${
                  isDark ? "text-blue-200" : "text-gray-700"
                }`}
              >
                To empower every artist with the platform, tools, and community
                they need to share their creativity with the world and build
                sustainable creative careers.
              </p>
            </div>

            <div
              className={`relative rounded-3xl overflow-hidden ${
                isDark
                  ? "bg-linear-to-br from-purple-900 to-purple-950"
                  : "bg-linear-to-br from-purple-50 to-purple-100"
              } p-8 sm:p-12 group hover:scale-105 transition-transform`}
            >
              <Globe2
                className={`mb-6 ${
                  isDark ? "text-purple-400" : "text-purple-600"
                }`}
                size={48}
              />
              <h3
                className={`text-3xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Our Vision
              </h3>
              <p
                className={`text-lg leading-relaxed ${
                  isDark ? "text-purple-200" : "text-gray-700"
                }`}
              >
                A world where art knows no boundaries, where every creator finds
                their audience, and where creativity becomes the universal
                language that connects humanity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <div
            className={`inline-block px-4 py-2 rounded-full ${
              isDark
                ? "bg-purple-900/30 text-purple-400"
                : "bg-purple-100 text-purple-600"
            } text-sm font-semibold mb-6`}
          >
            What Drives Us
          </div>
          <h2
            className={`text-4xl sm:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Our Core Values
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl ${
                  isDark ? "bg-[#2d3748]" : "bg-white"
                } p-6 shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${
                    colorMap[value.color]
                  } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h4
                  className={`text-xl font-bold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {value.title}
                </h4>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team Section */}
      <div
        className={`py-16 sm:py-24 ${isDark ? "bg-[#2d3748]" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className={`inline-block px-4 py-2 rounded-full ${
                isDark
                  ? "bg-purple-900/30 text-purple-400"
                  : "bg-purple-100 text-purple-600"
              } text-sm font-semibold mb-6`}
            >
              Our Team
            </div>
            <h2
              className={`text-4xl sm:text-5xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Meet The Visionaries
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => {
              const Icon = member.icon;
              return (
                <div
                  key={idx}
                  className={`relative rounded-2xl ${
                    isDark ? "bg-[#1a2332]" : "bg-white"
                  } overflow-hidden shadow-lg hover:shadow-2xl transition-all group hover:scale-105`}
                >
                  <div
                    className={`h-48 bg-linear-to-br ${member.linear} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <Icon className="text-white relative z-10" size={64} />
                  </div>
                  <div className="p-6">
                    <h4
                      className={`text-2xl font-bold mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {member.name}
                    </h4>
                    <p
                      className={`text-sm font-semibold mb-3 bg-linear-to-r ${member.linear} bg-clip-text text-transparent`}
                    >
                      {member.role}
                    </p>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {member.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Why Artists Choose Artify
            </h2>
            <div className="space-y-4">
              {[
                "Intuitive portfolio builder with customizable themes",
                "Built-in monetization tools for selling artwork",
                "Global exposure to art collectors and enthusiasts",
                "Supportive community with feedback and collaboration",
                "Advanced analytics to track your growth",
                "Copyright protection and secure transactions",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <CheckCircle2
                    className={`flex-shrink-0 mt-1 ${
                      isDark ? "text-green-400" : "text-green-600"
                    } group-hover:scale-125 transition-transform`}
                    size={24}
                  />
                  <p
                    className={`text-lg ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`rounded-3xl ${
              isDark
                ? "bg-linear-to-br from-purple-900 to-pink-900"
                : "bg-linear-to-br from-purple-100 to-pink-100"
            } p-12 text-center`}
          >
            <Sparkles
              className={`mx-auto mb-6 ${
                isDark ? "text-yellow-400" : "text-yellow-500"
              }`}
              size={64}
            />
            <h3
              className={`text-3xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Start Your Journey?
            </h3>
            <p
              className={`text-lg mb-8 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Join thousands of artists who are already sharing their creativity
              with the world
            </p>
            <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all">
              Get Started Free
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className={`relative overflow-hidden ${
          isDark
            ? "bg-linear-to-r from-purple-900 via-pink-900 to-purple-900"
            : "bg-linear-to-r from-purple-600 via-pink-600 to-purple-600"
        }`}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Whether you're an artist looking to share your work or an art lover
            seeking inspiration, there's a place for you at Artify
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all">
              Start Creating
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-full hover:bg-white/20 transition-all">
              Explore Artworks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
