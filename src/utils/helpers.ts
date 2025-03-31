import { Car } from "../types";

export function sortCarsByCreatedAt(cars: Car[]): Car[] {
  return cars.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
