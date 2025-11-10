import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import ExploreArts from "../Components/ExploreArts/ExploreArts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddArts from "../Components/AddArts/AddArts";
import MyGallery from "../Components/MyGallery/MyGallery";
import Favorites from "../Components/Favorites/Favorites";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/artworks",
        loader: () => fetch("http://localhost:3000/artworks"),
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
        element: <MyGallery></MyGallery>,
      },
      {
        path: "myFavorite",
        element: <Favorites></Favorites>,
      },
    ],
  },
]);
