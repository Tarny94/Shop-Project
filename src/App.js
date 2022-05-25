import React from "react";
import "./styles/Card.scss";

import Filter from "./Pages/Filter";
import { ProductsProvider } from "./Pages/ProductsProvider";

import Navigation from "./Pages/Navigation";

function App() {
  return (
    <ProductsProvider>
      <div className="root">
        <Filter />
        <Navigation />
      </div>
    </ProductsProvider>
  );
}

export default App;
