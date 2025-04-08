const API_URL = "http://localhost:3000/cars";

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

export const fetchCarById = async (id: string) => {
  try {
    const response = await fetch(`{API_URL}/${id}`);
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
