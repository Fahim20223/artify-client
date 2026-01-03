import React, { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Tag,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const posts = [
    {
      id: 1,
      title: "Getting Started with Digital Art in 2025",
      excerpt:
        "A beginner-friendly guide to tools, workflows, and finding your unique style in the current digital art scene.",
      date: "December 15, 2025",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&q=80",
      category: "Tutorial",
      featured: true,
    },
    {
      id: 2,
      title: "How Artify Helps Artists Grow Their Audience",
      excerpt:
        "Tips on using categories, tags, consistent posting, and engaging with the community to get more visibility.",
      date: "November 28, 2025",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      category: "Growth",
    },
    {
      id: 3,
      title: "Dark vs Light Theme: Impact on Art Perception",
      excerpt:
        "Why many digital artists prefer dark interfaces — and when light mode actually works better.",
      date: "October 10, 2025",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80",
      category: "Design",
    },
    {
      id: 4,
      title: "Color Theory Essentials for Digital Artists",
      excerpt:
        "Master the fundamentals of color harmony, contrast, and psychology to elevate your artwork to the next level.",
      date: "September 22, 2025",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
      category: "Tutorial",
    },
    {
      id: 5,
      title: "Building Your Online Art Portfolio",
      excerpt:
        "Essential tips for curating and presenting your work online to attract clients and opportunities.",
      date: "August 15, 2025",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
      category: "Career",
    },
    {
      id: 6,
      title: "The Rise of AI Art: Opportunities and Challenges",
      excerpt:
        "Exploring how AI tools are transforming the creative landscape and what it means for traditional artists.",
      date: "July 30, 2025",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      category: "Technology",
    },
  ];

  const categories = [
    "All",
    "Tutorial",
    "Growth",
    "Design",
    "Career",
    "Technology",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const featuredPost = posts.find((post) => post.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-2">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary to-secondary text-white py-16 px-4 max-w-7xl mx-auto my-9 rounded-2xl w-[95%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Sparkles size={18} />
              <span className="text-sm font-medium">Artify Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Insights & Inspiration
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
              Discover tips, tutorials, and stories from the creative community
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <Tag size={16} />
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp
                className="text-indigo-600 dark:text-indigo-400"
                size={24}
              />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Featured Article
              </h2>
            </div>

            {/* <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto relative overflow-hidden group">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>

                  <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-fit group">
                    Read Article
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        )}

        {/* Blog Grid */}
        <div>
          {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Latest Articles
          </h2> */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium text-sm hover:gap-3 transition-all group">
                    Read more
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-linear-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-medium">Stay Updated</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never Miss an Article
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
            Get weekly art tips, tutorials, and inspiration delivered straight
            to your inbox
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-700 shadow-lg"
            />
            <button className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-purple-200 mt-4">
            Join 10,000+ artists in our community ✨
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mt-16 py-8">
          <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Sparkles size={20} />
            <p className="text-lg">More articles coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
