import React from "react";

function Dinner(props) {
  return (
    <div>
      <h1>Today We are serving Chicken Biryani {props.Biryani}</h1>
      <h1>Today We are serving Kheer as Sweets {props.Kheer}</h1>
    </div>
  );
}

export default Dinner;
