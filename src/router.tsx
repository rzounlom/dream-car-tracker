import CarsPage from "./pages/CarsPage";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import SingleCarPage from "./pages/SingeCarsPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cars",
    element: <CarsPage />,
  },
  {
    path: "/cars/:id",
    element: <SingleCarPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
