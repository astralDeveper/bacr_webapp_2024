import { createBrowserRouter } from "react-router-dom";
import Service from "../../pages/Service";
import Home from "../../pages/Home";
import Products from "../../pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "services",
    element: <Service />,
  },
]);
