import { Car, NewCar } from "../types";

// const API_URL = "http://localhost:3000/cars";
const API_URL = "https://63c07b07e262345656ffb291.mockapi.io/dct-cars";

export const fetchCars = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const fetchFavoriteCars = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data?.filter((car: Car) => car.favorite);
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const fetchCarById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching car by ID:", error);
    throw error;
  }
};

export const addCar = async (car: NewCar) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding car:", error);
    throw error;
  }
};

export const updateCar = async (id: string, car: Partial<Car>) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating car:", error);
    throw error;
  }
};

export const deleteCar = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return true;
  } catch (error) {
    console.error("Error deleting car:", error);
    throw error;
  }
};
