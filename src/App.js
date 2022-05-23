import React, { useState } from "react";
import "./styles/Card.scss";
import Products from "./Pages/Products";
import Filter from "./Pages/Filter";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="root">
      <Filter category={category} setCategory={setCategory} />
      <Products category={category} />
    </div>
  );
}

export default App;
