import TodoItem from "./TodoItem";

const TodoBody = ({ todos, onUpdate, onDelete }) => {
  return (
    <ul>
      {todos.map((todoItem) => (
        <TodoItem
          onDelete={onDelete}
          onUpdate={onUpdate}
          todo={todoItem}
          key={todoItem.id}
        />
      ))}
    </ul>
  );
};

export default TodoBody;
