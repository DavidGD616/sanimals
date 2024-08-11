import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || process.env.BASE_URL || "http://localhost:8888";

//Products

export const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products: ', error);
      throw error;
    }
  };

export const fetchProductById = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw error;
    }
};