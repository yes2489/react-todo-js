import { TODO_CATEGORY_ICON } from "@/constants/icon";
import { useState } from "react";
const TodoForm = ({
  actionTitle,
  buttonText,
  onAction,
  onAdd,
  onClose,
  todo,
}) => {
  // 할일 등록 폼인지, 수정 폼인지 구분하기 위한 함수
  const isNewTodoForm = actionTitle.startsWith("등록") ? true : false;

  const [title, setTitle] = useState(isNewTodoForm ? "" : todo.title);
  const [summary, setSummary] = useState(isNewTodoForm ? "" : todo.summary);
  const [category, setCategory] = useState(
    isNewTodoForm ? "TODO" : todo.category
  );

  const todoActionHandler = () => {
    const todoItem = {
      title,
      summary,
      category,
    };

    if (isNewTodoForm) {
      onAdd(todoItem);
    } else {
      todoItem.id = todo.id;
      onAction(todoItem);
    }

    onClose();
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
          />
        </div>
        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="summary">
            Summary
          </label>
          <textarea
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            className="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
            id="summary"
            rows="5"
          />
        </div>
        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="category">
            Category
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
            id="category"
          >
            <option value="TODO">{TODO_CATEGORY_ICON.TODO} To do</option>
            <option value="PROGRESS">
              {TODO_CATEGORY_ICON.PROGRESS} On progress
            </option>
            <option value="DONE">{TODO_CATEGORY_ICON.DONE} Done</option>
          </select>
        </div>

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
