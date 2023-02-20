import React from "react";
import { useCounter } from "../../providers/CounterProvider/useCounter";

const CounterChange = () => {
  const { state, dispatch } = useCounter();
  return <div>
        <button onClick={() => dispatch({type: "INCREASE_COUNTER"})}>Increase</button>
        <button onClick={() => dispatch({type: "DECREASE_COUNTER"})}>Decrease</button>
  </div>;
}

export default CounterChange;
