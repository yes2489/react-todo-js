import { useState } from "react";
import { useTodosDispatch } from "@/contexts/TodoContext";

const TodoForm = ({ actionTitle, buttonText, onClose, todo }) => {
  // 할일 등록 폼인지, 수정 폼인지 구분하기 위한 함수
  const isNewTodoForm = actionTitle.startsWith("등록") ? true : false;

  const [title, setTitle] = useState(isNewTodoForm ? "" : todo.title);
  const [category, setCategory] = useState(
    isNewTodoForm ? "TODO" : todo.category
  );
  const [subtasks, setSubtasks] = useState(isNewTodoForm ? [] : todo.subtasks);
  const [newSubtask, setNewSubtask] = useState("");

  // useTodosDispatch()를 통해 dispatch 함수 불러오기
  const dispatch = useTodosDispatch();

  const todoActionHandler = () => {
    const updateTodo = {
      title: title,
      category,
    };

    if (!isNewTodoForm) {
      // 업데이트 로직일 경우,
      updateTodo.id = todo.id;
      dispatch({
        type: "UPDATE",
        updateTodo: { id: todo.id, title, category, subtasks },
      });
    } else {
      // 할일 추가 로직일 경우,
      dispatch({
        type: "ADD",
        newTodo: {
          id: self.crypto.randomUUID(),
          title,
          category: "TODO",
          subtasks,
        },
      });
    }

    onClose();
  };

  const addSubtask = () => {
    if (newSubtask.trim() !== "") {
      const newItem = {
        id: self.crypto.randomUUID(),
        title: newSubtask,
        done: false,
      };
      setSubtasks([...subtasks, newItem]);
      setNewSubtask("");
    }
  };

  const removeSubtask = (id) => {
    setSubtasks(subtasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h3 className="text-3xl text-red-200">할일 {actionTitle}</h3>
      <form className="my-2">
        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="title">
            Title
          </label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
            type="text"
            id="title"
            placeholder="제목을 입력해주세요."
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-xl text-white" htmlFor="subtasks">
            Subtasks
          </label>
          <div className="flex gap-2 mb-2">
            <input
              value={newSubtask}
              onChange={(event) => setNewSubtask(event.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // form submit 방지
                  addSubtask();
                }
              }}
              className="flex-1 p-2 border border-gray-300 bg-gray-200 text-gray-900 rounded"
              type="text"
              id="subtasks"
              placeholder="Todo를 입력해주세요."
            />
            <button
              type="button"
              onClick={addSubtask}
              className="px-4 text-white bg-blue-500 rounded whitespace-nowrap"
            >
              Add
            </button>
          </div>
        </div>
        <ul className="pl-5 list-disc space-y-1">
          {subtasks.map((task) => (
            <li key={task.id} className="text-sm text-gray-100 list-item">
              <div className="flex justify-between items-center">
                <span>{task.title}</span>
                <button
                  type="button"
                  className="ml-2 px-2 py-1 text-sm font-medium text-red-600 bg-white  rounded hover:bg-red-100"
                  onClick={() => removeSubtask(task.id)}
                >
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="text-xl text-white"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={todoActionHandler}
            className="px-6 py-3 text-xl text-red-200"
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </>
  );
};
export default TodoForm;
