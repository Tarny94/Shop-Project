import React, { useState } from "react";
import "./styles/Card.scss";
import Products from "./Pages/Products";
import Filter from "./Pages/Filter";

function App() {
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="root">
      <Filter
        category={category}
        setCategory={setCategory}
        query={query}
        setQuery={setQuery}
      />
      <Products category={category} query={query} />
    </div>
  );
}

export default App;
