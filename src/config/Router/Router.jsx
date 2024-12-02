import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import ServiceDetailPage from "../../pages/ServiceDetailPage";
import BlogDetailPage from "../../pages/BlogDetailPage";

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
]);
