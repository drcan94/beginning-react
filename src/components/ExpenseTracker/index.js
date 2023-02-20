import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "BUY_INGREDIENTS":
      return { ...state, money: state.money - action.payload };
    case "SELL_A_MEAL":
      return { ...state, money: state.money + action.payload };
    default:
      return state;
  }
};

function ExpenseTracker() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "BUY_INGREDIENTS", payload: 20 })}>
          Shopping for veggies!
        </button>
        <button onClick={() => dispatch({ type: "SELL_A_MEAL", payload: 30 })}>
          Serve a meal!
        </button>
      </div>
    </div>
  );
}

export default ExpenseTracker;
