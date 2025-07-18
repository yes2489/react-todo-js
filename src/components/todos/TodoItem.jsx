import TodoForm from "./TodoForm";
import IconButton from "../ui/IconButton";
import { TODO_CATEGORY_ICON } from "@/constants/icon";
import { useTodosDispatch } from "@/contexts/TodoContext";
import NewModal from "../ui/NewModal";

const TodoItem = ({ todo }) => {
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
          <NewModal>
            {/* 모달 창을 열기 위한 컴포넌트 작성 부분 */}
            <NewModal.Open>
              <IconButton icon={"✏️"} />
            </NewModal.Open>
            <NewModal.Dialog>
              <TodoForm
                actionTitle={"수정"}
                buttonText={"Update"}
                todo={todo}
              />
            </NewModal.Dialog>
          </NewModal>
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
                  subtask.done ? "line-through text-gray-400" : "text-gray-100 "
                }`}
              >
                {subtask.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
export default TodoItem;
