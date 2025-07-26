import React from "react";

let name = "John Doe";
const date = new Date().toLocaleDateString();

function Greeting() {
  return (
    <div>
      <h1> {name}</h1>
      <p> {date}</p>
    </div>
  );
}

export default Greeting;
