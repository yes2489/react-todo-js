import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import NewModal from "../ui/NewModal";

const TodoHeader = () => {
  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
      <NewModal>
        <NewModal.Open>
          <button
            className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
            data-cy="add-todo-button"
          >
            Add Todo
          </button>
        </NewModal.Open>
        <NewModal.Dialog>
          <TodoForm actionTitle={"등록"} buttonText={"Add"} />
        </NewModal.Dialog>
      </NewModal>

      <TodoFilter />
    </div>
  );
};
export default TodoHeader;
