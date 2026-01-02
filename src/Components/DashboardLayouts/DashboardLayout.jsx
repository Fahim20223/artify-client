import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router";
import {
  Menu,
  X,
  Home,
  Image,
  Heart,
  Plus,
  BarChart3,
  LogOut,
} from "lucide-react";

const mockUser = {
  displayName: "John Artist",
  photoURL: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
};

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-base-200">
      {/* NAVBAR */}
      <div className="navbar bg-base-100 shadow sticky top-0 z-50 px-7">
        <div className="flex-1">
          <button
            className="btn btn-ghost md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X /> : <Menu />}
          </button>
          <NavLink
            to="/"
            className="text-xl md:text-2xl font-bold text-pink-600"
          >
            ART<span className="text-purple-600">IFY</span>
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={theme === "dark"}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost avatar">
              <img
                src={mockUser.photoURL}
                className="w-9 rounded-full"
                alt="profile"
              />
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 shadow rounded-box w-48 mt-3"
            >
              <li className="menu-title">{mockUser.displayName}</li>
              <li>
                <NavLink to="/">
                  <Home size={16} /> Home
                </NavLink>
              </li>
              <li>
                <button>
                  <LogOut size={16} /> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="flex">
        {/* SIDEBAR */}
        <aside
          className={`fixed md:static z-40 w-64 min-h-screen bg-base-100 shadow transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <nav className="p-4 space-y-1">
            <SidebarLink to="" icon={<BarChart3 size={18} />} end>
              Overview
            </SidebarLink>
            <SidebarLink to="add-artwork" icon={<Plus size={18} />}>
              Add Artwork
            </SidebarLink>
            <SidebarLink to="my-gallery" icon={<Image size={18} />}>
              My Gallery
            </SidebarLink>
            <SidebarLink to="my-favorites" icon={<Heart size={18} />}>
              Favorites
            </SidebarLink>
          </nav>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const SidebarLink = ({ to, icon, children, end = false }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
        isActive ? "bg-secondary text-white" : "hover:bg-base-200"
      }`
    }
  >
    {icon}
    {children}
  </NavLink>
);

export default DashboardLayout;
