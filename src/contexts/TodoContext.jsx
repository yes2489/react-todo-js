import { createContext, useContext, useReducer, useEffect } from "react";

// 초기 데이터: localStorage에서 가져오거나 없으면 기본값
function storeTodos() {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : { data: [], category: "ALL" };
}

// Todo 목록 상태를 저장하는 Context
export const TodoContext = createContext();

// Todo 상태를 변경하는 dispatch 함수를 위한 Context
export const TodoDispatchContext = createContext();

// Context Provider: 하위 컴포넌트에 todos와 dispatch를 공급
export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, storeTodos());

  // todos 상태가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    // 데이터 저장
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

// Context를 외부에서 쉽게 사용하도록 커스텀 훅 제공
export const useTodos = () => useContext(TodoContext);
export const useTodosDispatch = () => useContext(TodoDispatchContext);

const getCategoryBySubtasks = (subtasks) => {
  const total = subtasks.length;
  // 완료된 서브태스크 수에 따라 전체 todo의 category 자동 판별
  const doneCount = subtasks.filter((s) => s.done).length;
  let newCategory = "TODO"; // 기본값
  if (doneCount === total) newCategory = "DONE";
  else if (doneCount > 0) newCategory = "PROGRESS";

  return newCategory;
};

// reducer 함수: todos 상태를 action에 따라 업데이트
const reducer = (todos, action) => {
  // 현재 상태에서 data(할 일 목록), category(현재 필터 상태) 분리
  const { data, category } = todos;

  switch (action.type) {
    case "ADD":
      // 새로운 todo를 리스트에 추가
      const { newTodo } = action;
      // 기존 data에 새 todo를 추가한 새 배열로 반환
      return { data: [...data, newTodo], category };

    case "UPDATE":
      // 특정 todo를 수정하는 액션
      const { updateTodo } = action;
      // id가 일치하는 항목을 수정된 todo로 대체
      const updatedTodos = data.map((todo) =>
        todo.id === updateTodo.id
          ? {
              ...updateTodo,
              category: getCategoryBySubtasks(updateTodo.subtasks ?? []),
            }
          : todo
      );
      return { data: updatedTodos, category };

    case "DELETE":
      const { id } = action;
      // 해당 id가 아닌 항목만 필터링하여 남김
      const deletedTodos = data.filter((todo) => todo.id !== id);
      return { data: deletedTodos, category };

    case "FILTER":
      // 현재 보여줄 todo 필터(category)를 변경하는 액션
      // todo 리스트는 그대로 유지하고, category만 변경
      return { data, category: action.selectedCategory };

    case "UPDATE_CATEGORY":
      // 특정 todo의 category를 수동으로 변경하는 액션
      const { updateId, newCategory } = action;
      // 해당 id의 todo만 category 변경
      const categoryUpdatedTodos = data.map((todo) =>
        todo.id === updateId ? { ...todo, category: newCategory } : todo
      );
      return { data: categoryUpdatedTodos, category };

    case "UPDATE_SUBTASK":
      const { todoId, subtaskId, done } = action;

      const subtaskUpdatedTodos = data.map((todo) => {
        if (todo.id === todoId) {
          const updatedSubtasks = todo.subtasks.map((subtask) =>
            subtask.id === subtaskId ? { ...subtask, done } : subtask
          );

          const newCategory = getCategoryBySubtasks(updatedSubtasks);

          return {
            ...todo,
            subtasks: updatedSubtasks,
            category: newCategory,
          };
        }
        return todo;
      });

      return { data: subtaskUpdatedTodos, category };
  }
};
