import axios from 'axios';

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Fetch all product categories
export const getCategories = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

