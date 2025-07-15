import React from "react";
import { useTodos } from "@/contexts/todoContext";
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import { useTodosDispatch } from "../../contexts/todoContext";

const TodoFilter = () => {
  const todos = useTodos();
  const dispatch = useTodosDispatch();

  return (
    <select
      value={todos.category}
      onChange={(event) =>
        dispatch({ type: "FILTER", selectedCategory: event.target.value })
      }
      className="p-2 text-gray-100 bg-gray-800 rounded"
      data-cy="todo-filter"
    >
      {/* defaultValue? - https://react.dev/reference/react-dom/components/select */}
      <option value="ALL" defaultValue={"1"}>
        All
      </option>
      <option value="TODO">{TODO_CATEGORY_ICON.TODO} To do</option>
      <option value="PROGRESS">
        {TODO_CATEGORY_ICON.PROGRESS} On progress
      </option>
      <option value="DONE">{TODO_CATEGORY_ICON.DONE} Done</option>
    </select>
  );
};
export default TodoFilter;
