import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import ELearning from "../pages/ELearning/ELearning";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/eLearning",
        element: <ELearning />,
      },
    ],
  },
]);
