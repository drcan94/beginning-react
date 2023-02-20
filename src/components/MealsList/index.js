import React, { useState } from "react";
import { useMealsContext } from "../../providers/MealsProvider";
import { Button } from "../Button";

const MealsList = () => {
  const { meals, setMeals } = useMealsContext();
  const [newMealNumber, setNewMealNumber] = useState(1);

  const extraFoodHandler = () => {
    setMeals([...meals, `Extra Food ${newMealNumber}`]);
    setNewMealNumber(newMealNumber + 1);
  };

  return (
    <div>
      <h1>Meals List using Context API</h1>
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}

      <Button onClick={extraFoodHandler}>Add Extra Food {newMealNumber}</Button>
    </div>
  );
};

export default MealsList;
