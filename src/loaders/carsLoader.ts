import { fetchCarById, fetchCars, fetchFavoriteCars } from "../api";

import { LoaderFunctionArgs } from "react-router-dom";

export const carsLoader = async () => {
  const cars = await fetchCars();
  return { cars };
};

export const favoriteCarsLoader = async () => {
  const cars = await fetchFavoriteCars();
  return { cars };
};

export const singleCarLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  if (!id) throw new Error("Car ID is required");

  const car = await fetchCarById(id);
  return { car };
};
