import { createBrowserRouter } from "react-router-dom";
import ServiceDetailPage from "../../pages/ServiceDetailPage";
import BlogDetailPage from "../../pages/BlogDetailPage";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import Blog from "../../pages/Blog";
import ErrorPage from "../../pages/404Page"; 
import ContactUs from "../../pages/ContactUs";
import Product from "../../pages/Products";
import AboutUs from "../../pages/About";
import Career from "../../pages/Career";
import FlaktGroup from "../../pages/Partner/flaktGroup";
import GallettiProducts from "../../pages/Partner/gallettiProducts";
import TicaProducts from "../../pages/Partner/ticaProducts";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Brands from "../../pages/Brands";
import ProjectDetailPage from "../../pages/ProjectDetailPage";
import Services from "../../pages/Services";
import Carrier from "../../pages/Partner/carrier";
import York from "../../pages/Partner/york";
import Echochillers from "../../pages/Partner/echochillers";
import Trane from "../../pages/Partner/trane";

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
    path: "/services-detail",
    element: <ServiceDetailPage />,

  },
  {
    path: "/blog-detail",
    element: <BlogDetailPage />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "blogs",
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
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/detail/:id",
    element: <ProjectDetailPage />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact_us",
    element: <ContactUs />,
  },
  {
    path: "/career",
    element: <Career />,
  },

  // Partner Page Start 

  {
    path: "/flakt",
    element: <FlaktGroup />,
  },
  {
    path: "/galleti",
    element: <GallettiProducts />,
  },
  {
    path: "/tica",
    element: <TicaProducts />,
  },
  {
    path: "/carrier",
    element: <Carrier />,
  },
  {
    path: "/york",
    element: <York />,
  },
  {
    path: "/echochillers",
    element: <Echochillers />,
  },
  {
    path: "/trane",
    element: <Trane />,
  },
  {
    path: "/brands",
    element: <Brands />,
  },

  //  Partner Page End
]);

