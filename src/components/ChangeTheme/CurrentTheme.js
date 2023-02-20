import React from "react";

const CurrentTheme = ({ theme }) => {
  const darkMode = <div>Dark Mode is On</div>;
  const lightMode = <div>Light Mode is On</div>;

  return (
    <React.Fragment>
      {theme === "dark" ? darkMode : theme === "light" ? lightMode : null}
    </React.Fragment>
  );
};

export default CurrentTheme;
