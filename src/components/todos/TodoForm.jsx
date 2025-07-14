import { TODO_CATEGORY_ICON } from "@/constants/icon";
import { useState } from "react";
const TodoForm = ({ onClose, onAdd }) => {
  // 각각의 입력 폼을 개별 상태로 관리 -> 폼 바인딩
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("TODO"); // 카테고리의 기본 값은 TODO

  // 할일 등록 버튼을 눌렀을 때 동작시킬 핸들러
  const addTodoHandler = () => {
    // 등록할 할일 객체
    const todo = {
      title: title,
      summary, // 프로퍼티와 변수 이름이 같을 경우 title만 작성해도 됨
      category,
    };

    // App.jsx로 보냄
    onAdd(todo); // App.jsx에서 전달받은 함수(addTodoHandler)

    // 모달창 닫기
    onClose();
  };

  return (
    <>
      <h3 className="text-3xl text-red-200">할일 등록</h3>
      <form className="my-2">
        <div>
          <label className="block mb-2 text-xl text-white" htmlFor="title">
            Title
          </label>
          <input
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
            onClick={addTodoHandler}
            className="px-6 py-3 text-xl text-red-200"
            type="button"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};
export default TodoForm;
