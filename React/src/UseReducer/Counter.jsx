import React, { useReducer, useState } from "react";
import { CounterReducer, initialize } from "./CounterReducer";

function Counter() {
  const [state, dispatch] = useReducer(CounterReducer, initialize);
  const [counter, setCounter] = useState("");

  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: parseInt(counter) });
    setCounter("");
  };

  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: parseInt(counter) });
    setCounter("");
  };

  return (
    <div>
      <h2>count: {state.counter}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <div>
        <input
          type="number"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
    </div>
  );
}

export default Counter;
