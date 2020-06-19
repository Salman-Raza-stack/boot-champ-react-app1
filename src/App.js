import React, { useState } from "react";
import "./App.css";

function App() {
  // Variables to store componenet data

  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Value of the counter is : {count}</h1>
      <br />
      <button onClick={() => setCount(2)}>Update Counter</button>
    </div>
  );
}

export default App;
