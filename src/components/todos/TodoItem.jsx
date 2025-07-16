import TodoForm from "./TodoForm";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "@/components/ui/Modal";
import IconButton from "../ui/IconButton";
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import { useTodosDispatch } from "@/contexts/TodoContext";

const TodoItem = ({ todo, onUpdate }) => {
  const [openModal, open] = useState(false);
  // TodoContext에서 상태를 변경할 함수를 불러오기
  const dispatch = useTodosDispatch();

  return (
    <li className="flex flex-col gap-2 my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
      <div className="flex justify-between items-start">
        <div>
          {/* 카테고리 아이콘 + 텍스트 */}
          <span className="text-sm text-gray-300">
            {TODO_CATEGORY_ICON[todo.category]} {todo.category}
          </span>
          <h2 className="mt-1 text-lg font-bold text-gray-100 uppercase">
            {todo.title}
          </h2>
        </div>
        <div className="flex items-center gap-1">
          <IconButton onClick={() => open(true)} icon={"✏️"} />
          <IconButton
            onClick={() => dispatch({ type: "DELETE", id: todo.id })}
            icon={"🗑"}
          />
        </div>
      </div>

      {/* 서브태스크 목록 */}
      {todo.subtasks?.length > 0 && (
        <ul className="pl-4 mt-2 space-y-1">
          {todo.subtasks.map((subtask) => (
            <li key={subtask.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={subtask.done}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SUBTASK",
                    todoId: todo.id,
                    subtaskId: subtask.id,
                    done: e.target.checked,
                  })
                }
              />
              <span
                className={`text-sm ${
                  subtask.done ? "line-through text-gray-400" : "text-gray-100"
                }`}
              >
                {subtask.title}
              </span>
            </li>
          ))}
        </ul>
      )}

      {openModal &&
        createPortal(
          <Modal onClose={() => open(false)}>
            <TodoForm
              actionTitle={"수정"}
              buttonText={"Update"}
              onAction={onUpdate}
              onClose={() => open(false)}
              todo={todo}
            />
          </Modal>,
          document.body
        )}
    </li>
  );
};
export default TodoItem;
