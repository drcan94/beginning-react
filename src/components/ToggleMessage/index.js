import React from "react";

function ToggleMessage() {
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    console.log("Toggle state changed");
    document.title = toggle ? "Little Lemon" : "React App";
  }, [toggle]);
  
  const clickHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <h1>Using useEffect hook</h1>
      <button onClick={clickHandler}>Toggle Message</button>
      {toggle && <p>Welcome to Little Lemon</p>}
    </div>
  );
}

export default ToggleMessage;
