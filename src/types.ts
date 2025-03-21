export type Car = {
  id: string;
  make: string;
  model: string;
  year: string;
  description: string;
  imageUrl: string;
  favorite: boolean;
  createdAt: string;
  updatedAt: string;
};

export type NewCar = Omit<Car, "id">;
