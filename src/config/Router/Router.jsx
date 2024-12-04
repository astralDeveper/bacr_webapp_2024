import { createBrowserRouter } from "react-router-dom";
import ServiceDetailPage from "../../pages/ServiceDetailPage";
import BlogDetailPage from "../../pages/BlogDetailPage";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import Blog from "../../pages/Blog";
import ErrorPage from "../../pages/404Page";
import ProductDetails from "../../pages/Products/ProductDetails";
import Service from "../../pages/ServiceDetailPage";
import ContactUs from "../../pages/ContactUs";
import Product from "../../pages/Products";
import AboutUs from "../../pages/About";
import Career from "../../pages/Career";
import Home from "../../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "services-detail",
    element: <ServiceDetailPage />,
  },
  {
    path: "blog-detail",
    element: <BlogDetailPage />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "404-page",
    element: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/productsDetail",
    element: <ProductDetails />,
  },
  {
    // path: "/services",
    // element: <Service />,
  },
  {
    path: "/contact_us",
    element: <ContactUs />,
  },
  {
    path: "/career",
    element: <Career />,
  },
]);

