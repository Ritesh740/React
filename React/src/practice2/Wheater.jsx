import React from "react";

const Wheater = () => {
  let temp = Math.floor(Math.random() * 100);
  if (temp < 15) {
    return <h1>It's cold outside, temperature is {temp}°C</h1>;
  } else if (temp >= 15 && temp <= 25) {
    return <h1>It's nice outside, temperature is {temp}°C</h1>;
  } else {
    return <h1>It's hot outside, temperature is {temp}°C</h1>;
  }
};

export default Wheater;
