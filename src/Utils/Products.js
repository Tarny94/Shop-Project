import React from "react";
import axios from "axios";

export const Products = async (data) => {
await axios.get('https://dummyjson.com/products')
}