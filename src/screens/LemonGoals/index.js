import React from "react";
import { DesertsCount, DrinksCount } from "../../components/DataFetcher";
import ExpenseTracker from "../../components/ExpenseTracker";
import FetchUser from "../../components/FetchUser";
import MouseLogger from "../../components/HOCs/MouseLogger";
import LiveOrders from "../../components/LiveOrders";
import ToggleMessage from "../../components/ToggleMessage";

function GoalForm({ addGoal }) {
  const [formData, setFormData] = React.useState({ goal: "", by: "" });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addGoal(formData);
    setFormData({ goal: "", by: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="goal"
        placeholder="Goal"
        value={formData.goal}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="by"
        placeholder="By..."
        value={formData.by}
        onChange={changeHandler}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

function GoalList({ goals }) {
  return (
    <ul>
      {goals.map((item) => (
        <li key={item.goal}>
          My goal is to {item.goal}, by {item.by}
        </li>
      ))}
    </ul>
  );
}

function LemonGoals() {
  const [goals, setGoals] = React.useState([]);
  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <div>
      <h1>Lemon Goals</h1>
      <GoalForm addGoal={addGoal} />
      <GoalList goals={goals} />
      <br />
      <br />
      <br />
      <ToggleMessage />
      <br />
      <br />
      <br />
      <FetchUser />
      <ExpenseTracker />
      <LiveOrders />

      <br />
      <br />
      <br />

      <MouseLogger />
      <br />
      <br />
      <DesertsCount />
      <DrinksCount />
    </div>
  );
}

export default LemonGoals;
