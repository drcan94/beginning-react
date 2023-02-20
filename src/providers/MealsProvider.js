import React, { useState, createContext, useContext } from "react";

const MealsContext = createContext();
const todaysMeals = ["Baked Beans", "Bacon", "Eggs", "Toast"];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);
  return (
    <MealsContext.Provider value={{ meals, setMeals }}>
      {children}
    </MealsContext.Provider>
  );
};

export const useMealsContext = () => {
  const context = useContext(MealsContext);
  if (context === undefined) {
    throw new Error("useMealsContext must be used within a MealsProvider");
  }
  return context;
};

export default MealsProvider;
