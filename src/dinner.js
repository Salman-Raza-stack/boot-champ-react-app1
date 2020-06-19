import React from "react";

function Dinner(props) {
  return (
    <div>
      <h1>Today We are not serving Chicken {props.dishName}</h1>
      <h1>Today We are not serving Chicken {props.sweets}</h1>
    </div>
  );
}

export default Dinner;
