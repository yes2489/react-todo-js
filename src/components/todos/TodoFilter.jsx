import React from "react";
import { TODO_CATEGORY_ICON } from "@/constants/icon";

const TodoFilter = ({ category, onFilter }) => {
  // TodoFilter에서 사용자가 카테고리를 변경할 때마다 selectCategory의 상태를 변경하는 함수 호출(setFilter)

  return (
    <select
      value={category}
      onChange={(event) => onFilter(event.target.value)}
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
