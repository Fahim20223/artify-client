import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import ExploreArts from "../Components/ExploreArts/ExploreArts";
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
    ],
  },
]);
