import React from "react";
import { useMealsContext } from "../../providers/MealsProvider";

const MealsCounter = () => {
  const { meals } = useMealsContext();
  return (
    <div>
        <h3>Number of meals today: {meals.length}</h3>
    </div>
  );
};

export default MealsCounter;
