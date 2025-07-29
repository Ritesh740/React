import { useReducer } from "react";
import React from "react";
// CounterReducer.js
const initialize = {
  counter: 0,
};

const CounterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "incrementByAmount":
      return { counter: state.counter + action.payload };
    case "decrementByAmount":
      return { counter: state.counter - action.payload };
    default:
      return state;
  }
};

export { initialize, CounterReducer };
