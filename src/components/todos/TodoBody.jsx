import React from "react";
import TodoItem from "./TodoItem";

const TodoBody = ({ todos }) => {
  return (
    <ul>
      {/* props로 내려받은 todos 배열로 map 연산 */}
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoBody;
