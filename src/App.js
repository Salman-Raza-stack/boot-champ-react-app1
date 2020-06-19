import React, { useState } from "react";
import "./App.css";
import Dinner from "./dinner.js";

function App() {
  // Variables to store componenet data

  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Value of the counter is : {count}</h1>
    </div>
  );
}

export default App;
