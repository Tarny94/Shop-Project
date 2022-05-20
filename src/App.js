import react from "react";
import "./styles/Card.scss";
import Products from "./Pages/Products";
import Filter from "./Pages/Filter";

function App() {
  return (
    <div className="root">
      <Filter />
      <Products />
    </div>
  );
}

export default App;
