import axios from "axios";

const fetchCategories = async (data) =>
  await axios.get("https://dummyjson.com/products/categories");

const fetchProducts = async (data) =>
  await axios.get("https://dummyjson.com/products");

export const api = {
  categories: {
    fetch: fetchCategories,
  },
  products: {
    fetch: fetchProducts,
  },
};
