import { createBrowserRouter } from "react-router-dom";
import Service from "../../pages/Service";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import ProductDetails from "../../pages/Products/ProductDetails";
import ContactUs from "../../pages/ContactUs";

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
    path: "/productsDetail",
    element: <ProductDetails />,
  },
  {
    path: "/services",
    element: <Service />,
  },
  {
    path: "/contact_us",
    element: <ContactUs />,
  },
]);
