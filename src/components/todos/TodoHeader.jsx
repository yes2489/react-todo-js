import React, { useState } from "react";
import { createPortal } from "react-dom";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import Modal from "../ui/Modal";

const TodoHeader = ({ onAdd }) => {
  // Moddal의 열기/닫기 여부를 관리하는 상태값
  const [openModal, open] = useState(false);

  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
      <button
        onClick={() => open(true)}
        className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
        data-cy="add-todo-button"
      >
        Add Todo
      </button>

      {/* Modal이 생성되는 위치 */}
      {openModal &&
        createPortal(
          // Modal 컴포넌트에게 onClick이라는 이름의 props로 open 함수를 내려줌
          <Modal onClose={() => open(false)}>
            <TodoForm onAdd={onAdd} onClose={() => open(false)} />
          </Modal>,
          document.body
        )}

      <TodoFilter />
    </div>
  );
};

export default TodoHeader;
