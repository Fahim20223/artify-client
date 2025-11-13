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
        path: "/addArtwork",
        element: (
          <PrivateRoutes>
            <AddArts></AddArts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myGallery",
        element: (
          <PrivateRoutes>
            <MyGallery></MyGallery>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myFavorite",
        element: (
          <PrivateRoutes>
            <Favorites></Favorites>
          </PrivateRoutes>
        ),
      },
      {
        path: "/art-details/:id",
        element: (
          <PrivateRoutes>
            <ArtDetails></ArtDetails>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
