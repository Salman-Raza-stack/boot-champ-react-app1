import React, { useState } from "react";
import "./App.css";
import Message from "./Message";

function App() {
  // Variables to store componenet data

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);

  return (
    <div className={'box ${isMorning ? "dayLight" : ""}'}>
      <h2>Day time = {isMorning ? "Morning" : "Night"}</h2>
      <Message counter={count} />
      <br />
      <button onClick={() => setCount(++count)}>Update Counter</button>
    </div>
  );
}

export default App;
