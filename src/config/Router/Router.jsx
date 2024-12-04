import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Service from "../../pages/Service";
import Services from "../../pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "service",
    element: <Service />,
  },

  {
    path: "services",
    element: <Services />,
  },
]);
