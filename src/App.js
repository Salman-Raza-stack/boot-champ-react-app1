import React, { useState } from "react";
import "./App.css";
import Message from "./Message";

function App() {
  // Variables to store componenet data

  let [count, setCount] = useState(1);

  return (
    <div>
      <Message counter={count} />
      <br />
      <button onClick={() => setCount(++count)}>Update Counter</button>
    </div>
  );
}

export default App;
