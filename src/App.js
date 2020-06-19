import React from "react";
import "./App.css";
import Dinner from "./dinner.js";

function App() {
  return (
    <div className="App">
      <h1> Hello From Salman </h1>
      <Dinner dishName="Biryani" sweets="Kheer" />
      <Dinner dishName="Polaow" sweets="Gajar ka Halwa" />
      <Dinner dishName="Karhai" sweets="Lambah Sheri" />
    </div>
  );
}

export default App;
