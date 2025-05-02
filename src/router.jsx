import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: "This is movies page",
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/tv",
        element: "This is tv page",
      },
      {
        path: "/people",
        element: "This is people page",
      },
    ],
  },
]);
