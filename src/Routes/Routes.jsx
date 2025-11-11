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
export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/featured-artworks"),
      },
      {
        path: "/artworks",
        loader: () => fetch("http://localhost:3000/public-artworks"),
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
        element: <AddArts></AddArts>,
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
        element: <Favorites></Favorites>,
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
