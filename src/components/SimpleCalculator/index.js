import React, { useRef, useState, useEffect } from "react";
import { Button } from "../Button";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 190px;
`;

function SimpleCalculator() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [isDisabled, setIsDisabled] = useState(true);

  const handleInput = () => {
    (!inputRef.current || Number(inputRef.current.value) === 0) &&
      setIsDisabled(true);
    Number(inputRef.current.value) !== 0 && setIsDisabled(false);
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <p>{result}</p>
      <form>
        <input type="number" ref={inputRef} onChange={handleInput} />
        <ButtonContainer style={{ justifyContent: "initial", gap: 7 }}>
          <Button onClick={plus}>+</Button>
          <Button onClick={minus}>-</Button>
          <Button onClick={times}>*</Button>
          <Button disabled={isDisabled} onClick={divide}>
            /
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={resetInput}>Reset Input</Button>
          <Button onClick={resetResult}>Reset Result</Button>
        </ButtonContainer>
      </form>
    </div>
  );
}

export default SimpleCalculator;
