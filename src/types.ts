export type Car = {
  id: string;
  make: string;
  model: string;
  year: string;
  description: string;
  imageUrl: string;
};

export type CarWithoutId = Omit<Car, "id">;
