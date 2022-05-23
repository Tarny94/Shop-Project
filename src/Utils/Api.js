import axios from "axios";

const fetchCategories = async () =>
  await axios.get("https://dummyjson.com/products/categories");

const fetchProducts = async () =>
  await axios.get("https://dummyjson.com/products");

const fetchByCategory = async (category) =>
  await axios.get(`https://dummyjson.com/products/category/${category}`);

const fetchByName = async (query) =>
  await axios.get(`https://dummyjson.com/products/search?q=${query}`);

export const api = {
  categories: {
    fetch: fetchCategories,
  },
  products: {
    fetch: fetchProducts,
    fetchByCategory,
    fetchByName,
  },
};
