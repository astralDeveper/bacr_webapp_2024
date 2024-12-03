import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import ServiceDetailPage from "../../pages/ServiceDetailPage";
import BlogDetailPage from "../../pages/BlogDetailPage";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import Blog from "../../pages/Blog";
import ErrorPage from "../../pages/404Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
]);
