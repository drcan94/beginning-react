import React from "react";
import { Button } from "../Button";

function ChangeButton({ setTheme }) {
  return (
    <Button
      type="primary"
      onClick={() =>
        setTheme((currentTheme) =>
          currentTheme === "light" ? "dark" : "light"
        )
      }
    >
      Change Mode
    </Button>
  );
}

export default ChangeButton;
