import CarsPage from "./pages/cars/CarsPage";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/home/HomePage";
import RootLayout from "./components/layout/RootLayout";
import SingleCarPage from "./pages/single-car/SingeCarsPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
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
    ],
  },
]);
