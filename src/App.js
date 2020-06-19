import React, { useState } from "react";
import "./App.css";
import Message from "./Message";

function App() {
  // Variables to store componenet data

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);

  return (
    <div className={`box ${isMorning ? "boxLight" : ""}`}>
      <h2>{isMorning ? "Good Morning" : "Good Night Sweet Dreams"}</h2>

      <Message counter={count} />

      <br />

      <button onClick={() => setCount(++count)}>Update Counter</button>

      <button onClick={() => setMorning(!isMorning)}>Update DAy</button>
    </div>
  );
}

export default App;
