import React, { useReducer } from "react";
import styled from "styled-components";
import { Button } from "../Button";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      return { money: state.money + action.payload };
    case "REMOVE_MONEY":
      return { money: state.money - action.payload };
    default:
      return state;
  }
};

function Wallet() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <ButtonContainer>
        <Button onClick={() => dispatch({ type: "ADD_MONEY", payload: 13 })}>
          Add Money
        </Button>
        <Button onClick={() => dispatch({ type: "REMOVE_MONEY", payload: 10 })}>
          Remove Money
        </Button>
      </ButtonContainer>
    </div>
  );
}

export default Wallet;
