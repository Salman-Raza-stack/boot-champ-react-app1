import React from "react";
import "./App.css";
import Dinner from "./dinner.js";

function App() {
  return (
    <div className="App">
      <h1> Hello From Salman </h1>
      <Dinner dishName="Biryani" sweets="Kheer" />
    </div>
  );
}

export default App;
