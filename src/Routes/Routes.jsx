import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import ExploreArts from "../Components/ExploreArts/ExploreArts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddArts from "../Components/AddArts/AddArts";
import MyGallery from "../Components/MyGallery/MyGallery";
import Favorites from "../Components/Favorites/Favorites";
import ArtDetails from "../Components/ArtsDetails/ArtDetails";
import PrivateRoutes from "../Router/PrivateRoutes";
import Error from "../Pages/Error/Error";
import AboutUs from "../Components/AboutUs/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";
import DashboardOverview from "../Components/DashboardOverview/DashboardOverview";
import DashboardLayout from "../Components/DashboardLayouts/DashboardLayout";
import Profile from "../Components/Profile/Profile";
import Blog from "../Components/Blog/Blog";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
// import DashboardLayout from "../Components/DashboardOverview/DashboardLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://artify-artworks-server.vercel.app/featured-artworks"),
      },
      {
        path: "/artworks",
        loader: () =>
          fetch("https://artify-artworks-server.vercel.app/public-artworks"),
        element: <ExploreArts></ExploreArts>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/art-details/:id",
        element: <ArtDetails></ArtDetails>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoutes>
            <Blog></Blog>
          </PrivateRoutes>
        ),
      },
      {
        path: "/private-policy",
        element: (
          <PrivateRoutes>
            <PrivacyPolicy></PrivacyPolicy>
          </PrivateRoutes>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      {
        path: "add-artwork",
        element: <AddArts />,
      },
      {
        path: "my-gallery",
        element: <MyGallery />,
      },
      {
        path: "my-favorites",
        element: <Favorites />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
