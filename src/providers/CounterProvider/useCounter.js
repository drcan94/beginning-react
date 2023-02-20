import { useContext } from "react";
import { CounterContext } from ".";

export const useCounter = () => {
    const context = useContext(CounterContext);
    if (context === undefined) {
      throw new Error("useCounterContext must be used within a CounterProvider");
    }
    return context;
  };
  