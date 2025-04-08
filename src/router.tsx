import {
  carsLoader,
  favoriteCarsLoader,
  singleCarLoader,
} from "./loaders/carsLoader";

import AddCar from "./pages/add-car/AddCar";
import CarsPage from "./pages/cars/CarsPage";
import FavoritesPage from "./pages/favorites/FavoritesPage";
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
        loader: carsLoader,
      },
      {
        path: "/cars/:id",
        element: <SingleCarPage />,
        loader: singleCarLoader,
      },
      {
        path: "/add",
        element: <AddCar />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
        loader: favoriteCarsLoader,
      },
    ],
  },
]);
