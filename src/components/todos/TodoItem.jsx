import React, { useState } from "react";
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import IconButton from "../ui/IconButton";
import { createPortal } from "react-dom";
import Modal from "@/components/ui/Modal";
import TodoForm from "./TodoForm";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [openModal, open] = useState(false);

  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
      <div>
        <span className="text-lg font-medium text-gray-300">
          {TODO_CATEGORY_ICON[todo.category]}
        </span>
        <div>
          <h2
            data-test="title"
            className="mb-0 text-lg font-bold text-gray-100 uppercase"
          >
            {todo.title}
          </h2>
          <p className="mt-2 text-base text-gray-200">{todo.summary}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {/* IconButton은 커스텀 컴포넌트이기 때문에 onClick만 쓸 경우, 이벤트명이아닌 props 이름으로 인식함*/}
        <IconButton onClick={() => open(true)} icon={"✏️"} />
        <IconButton onClick={() => onDelete(todo.id)} icon={"🗑"} />
      </div>
      {openModal &&
        createPortal(
          <Modal onClose={() => open(false)}>
            <TodoForm
              actionTitle={"수정"}
              buttonText={"Update"}
              onUpdate={onUpdate}
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
