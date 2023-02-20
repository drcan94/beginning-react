import React from "react";
import { Button } from "../Button";

const TodoRow = ({ id, content, createdAt }) => (
  <tr>
    <td>
      <label>{id}</label>
    </td>
    <td>
      <label>{content}</label>
    </td>
    <td>
      <label>{createdAt}</label>
    </td>
  </tr>
);

function ReverseTodos() {
  const initialTodos = [
    { id: 1, content: "Learn React", createdAt: "2021-01-01" },
    { id: 2, content: "Learn Firebase", createdAt: "2021-01-02" },
    { id: 3, content: "Learn GraphQL", createdAt: "2021-01-03" },
  ];

  const [todos, setTodos] = React.useState(initialTodos);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <Button onClick={reverseOrder}>Reverse Todos</Button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Content</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoRow key={todo.id} {...todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReverseTodos;
