import React from "react";
import axios from "axios";

export const ProductsData = async (data) => {
await axios.get('https://dummyjson.com/products')
}