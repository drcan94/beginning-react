import React from "react";

const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  const commonStyle = {
    padding: "5px 9px",
    border: "1px solid #9fcfde",
    borderRadius: "7px",
    backgroundColor: "#d0e8e8",
    color: "green",
  };

  return (
    <div style={{ display: "flex" }}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style, // original style
            ...commonStyle,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};

function LiveOrders() {
  return (
    <div style={{ marginTop: 10 }}>
      <Row spacing={8}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>€ 10.00</p>
        <p>18.30</p>
        <p>John</p>
      </Row>
    </div>
  );
}

export default LiveOrders;
