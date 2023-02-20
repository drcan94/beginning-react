import React from "react";
import { useCounter } from "../../providers/CounterProvider/useCounter";

function CounterDisplay() {
  const { state, dispatch } = useCounter();
  return <div>
        <h3>Counter: {state.counter}</h3>
  </div>;
}

export default CounterDisplay;
