import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Service from "../../pages/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "services",
    element: <Service />,
  },
]);
