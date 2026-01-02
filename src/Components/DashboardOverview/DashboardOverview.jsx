import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Image, Heart, Users, Star } from "lucide-react";
import Loader from "../../Pages/Loader/Loader";

const COLORS = ["#8b5cf6", "#ec4899", "#3b82f6", "#10b981", "#f59e0b"];
const API_URL = "https://artify-artworks-server.vercel.app";

const DashboardOverview = () => {
  const [artworks, setArtworks] = useState([]);
  const [mostLiked, setMostLiked] = useState([]);
  const [totalArtists, setTotalArtists] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/artworks`);
        const data = await res.json();
        setArtworks(data);

        const likedRes = await fetch(`${API_URL}/most-liked`);
        const likedData = await likedRes.json();
        setMostLiked(likedData);

        const artists = new Set(data.map((art) => art.userEmail));
        setTotalArtists(artists.size);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader></Loader>;

  // Stats
  const totalArtworks = artworks.length;
  const totalLikes = artworks.reduce((sum, art) => sum + (art.likes || 0), 0);
  const topLiked = mostLiked.length;

  // Monthly data
  const monthlyData = Array.from({ length: 12 }, (_, i) => {
    const monthNum = i + 1;
    const count = artworks.filter((art) => {
      if (!art.createdAt) return false;
      const date = new Date(art.createdAt);
      return date.getMonth() + 1 === monthNum;
    }).length;
    return {
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      artworks: count,
    };
  });

  // Category data
  const categoryCounts = {};
  artworks.forEach((art) => {
    if (!art.category) return;
    categoryCounts[art.category] = (categoryCounts[art.category] || 0) + 1;
  });
  const categoryData = Object.entries(categoryCounts).map(([name, value]) => ({
    name,
    value,
  }));

  // Top liked artworks chart (BarChart)
  const topLikedData = mostLiked.map((art) => ({
    title: art.title,
    likes: art.likes || 0,
  }));

  const stats = [
    { label: "Artworks", value: totalArtworks, icon: <Image /> },
    { label: "Total Likes", value: totalLikes, icon: <Heart /> },
    { label: "Top Liked Artworks", value: topLiked, icon: <Star /> },
    { label: "Total Artists", value: totalArtists, icon: <Users /> },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-base-100 rounded-xl shadow p-5 flex justify-between items-center"
          >
            <div>
              <p className="text-sm opacity-70">{item.label}</p>
              <h2 className="text-2xl font-bold">{item.value}</h2>
            </div>
            <div className="text-primary">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* CHARTS: 3 in one line on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 1️⃣ Monthly Artworks */}
        <div className="bg-base-100 p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Monthly Artworks</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="artworks" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 2️⃣ Top Liked Artworks - VERTICAL BAR */}
        <div className="bg-base-100 p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Top Liked Artworks</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topLikedData} layout="vertical">
              <XAxis type="number" />
              <YAxis type="category" dataKey="title" width={100} />
              <Tooltip />
              <Bar dataKey="likes" fill="#ec4899" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 3️⃣ Categories */}
        <div className="bg-base-100 p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Categories</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" outerRadius={90} label>
                {categoryData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
