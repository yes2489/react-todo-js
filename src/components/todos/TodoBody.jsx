import TodoItem from "./TodoItem";

const TodoBody = ({ todos, onUpdate }) => {
  return (
    <ul>
      {todos.map((todoItem) => (
        <TodoItem onUpdate={onUpdate} todo={todoItem} key={todoItem.id} />
      ))}
    </ul>
  );
};

export default TodoBody;
