import { useState } from "react";
import TodoBody from "./components/todos/TodoBody";
import TodoHeader from "./components/todos/TodoHeader";
import DefaultLayout from "./layouts/DefaultLayout";
import { TodoProvider } from "./contexts/todoContext";

const dummyTodos = [
  {
    id: 1,
    title: "React 공부",
    summary: "React를 공부한다.",
    category: "TODO",
  },
  {
    id: 2,
    title: "점심 먹기",
    summary: "점심을 먹는다.",
    category: "PROGRESS",
  },
  {
    id: 3,
    title: "커피 마시기",
    summary: "커피를 마신다.",
    category: "DONE",
  },
];

function App() {
  const [todos, setTodos] = useState(dummyTodos);
  const [selectedCategory, setFilter] = useState("ALL");

  // 1. 할일 등록 기능
  const addTodoHandler = (todo) => {
    const newTodo = {
      id: self.crypto.randomUUID(),
      ...todo,
    };
    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);
  };

  /**
   * 2. 할일 수정 기능
   * @param {*} updateTodo 새롭게 갱신할 할일 객체
   */
  const updateTodoHandler = (updateTodo) => {
    console.log(updateTodo);

    const updatedTodos = todos.map((todo) =>
      todo.id === updateTodo.id ? updateTodo : todo
    );
    setTodos(updatedTodos);
  };

  // 3. 할일 삭제 기능
  const deleteTodoHandler = (deleteTodoId) => {
    const deleteTodos = todos.filter((todo) => todo.id !== deleteTodoId);
    setTodos(deleteTodos);
  };

  // 4. 필터링 후 렌더링하는 기능

  return (
    // Before
    // <DefaultLayout>
    //   <header>
    //     <h1 className="pt-8 mx-auto text-red-200 max-w-max text-7xl">
    //       <img
    //         className="ml-4"
    //         src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thought%20Balloon.png"
    //         alt="Thought Balloon"
    //         width="75"
    //         height="75"
    //       />
    //       <img
    //         src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Seal.png"
    //         alt="Seal"
    //         width="75"
    //         height="75"
    //       />
    //     </h1>
    //   </header>
    //   <section className="max-w-xl m-4 mx-auto">
    //     <TodoHeader
    //       onAdd={addTodoHandler}
    //       categorty={selectedCategory}
    //       onFilter={setFilter}
    //     />
    //     <TodoBody
    //       todos={filteredTodos}
    //       onUpdate={updateTodoHandler}
    //       onDelete={deleteTodoHandler}
    //     />
    //   </section>
    // </DefaultLayout>
    // After
    <DefaultLayout>
      <header>
        <h1 className="pt-8 mx-auto text-red-200 max-w-max text-7xl">
          <img
            className="ml-4"
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thought%20Balloon.png"
            alt="Thought Balloon"
            width="75"
            height="75"
          />
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Seal.png"
            alt="Seal"
            width="75"
            height="75"
          />
        </h1>
      </header>
      <section className="max-w-xl m-4 mx-auto">
        <TodoProvider>
          <TodoHeader />
          <TodoBody />
        </TodoProvider>
      </section>
    </DefaultLayout>
  );
}

export default App;
