import React, { useState } from "react";
import ChangeButton from "./ChangeButton";
import CurrentTheme from "./CurrentTheme";

const ChangeTheme = () => {
  const [theme, setTheme] = useState("light");
  return (
    <React.Fragment>
      <span>Lokal Tema Değişimi</span>
      <CurrentTheme theme={theme} />
      <ChangeButton setTheme={setTheme} />
    </React.Fragment>
  );
};

export default ChangeTheme;
