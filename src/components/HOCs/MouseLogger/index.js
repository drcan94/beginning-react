import React, { useEffect, useState } from "react";

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition, ...props }) => {
  if (!mousePosition) return null;
  return (
    <div
      style={{ padding: 20, border: "1px solid black", width: "fit-content" }}
    >
      <p>Mouse Position</p>
      <div>
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition, ...props }) => {
  if (!mousePosition) return null;
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function MouseLogger() {
  return (
    <React.Fragment>
      <PanelMouseTracker />
      <PointMouseTracker />
    </React.Fragment>
  );
}

export default MouseLogger;
