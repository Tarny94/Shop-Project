import React, { useState } from "react";
import "./styles/Card.scss";
import Products from "./Pages/Products";
import Filter from "./Pages/Filter";

function App() {
  const [sendCategory, setSendCategor] = useState();

  return (
    <div className="root">
      <Filter onChange={(val) => setSendCategor(val)} />
      <Products category={sendCategory} />
    </div>
  );
}

export default App;
