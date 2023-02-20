import styled from "styled-components";

// Define a reusable styled component for a button
export const Button = styled.button`
  width: fit-content;
  padding: 4px 9px;
  border-radius: 8px;
  border: none;
  background-color: ${({ type }) => type === "primary" ? "#4a64e8" : "#4d4747"};
  color: white;
  margin: 5px 0;
  &:hover {
    background-color: #6133ed;
    cursor: pointer;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

// Define a base button component that uses the Button styled component
export const BaseButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button
      type={type}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}

// Define a login button component that extends the base button component
export const LoginButton = ({ type, children, ...loginProps }) => {
  return (
    <BaseButton
      type={type}
      {...loginProps}
      onClick={() => {
        alert("logging in!")
      }}
    // Note that if the onClick prop is written before {...loginProps},
    // and if {...loginProps} contains its own onClick function, the
    // onClick function in {...loginProps} will be executed.

    // On the other hand, if onClick is written after {...loginProps},
    // as it is here, any onClick function in {...loginProps} will be
    // overridden.
    >
      {children}
    </BaseButton>
  )
}