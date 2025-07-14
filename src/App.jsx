// App이라는 이름의 함수형 컴포넌트
import { useState } from "react";
import TodoBody from "./components/todos/TodoBody";
import TodoHeader from "./components/todos/TodoHeader";
import DefaultLayout from "./layouts/DefaultLayout";

// 서버에서 받아온 데이터라고 가정
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

// 해당 컴포넌트의 파일명은 App.jsx(js)로 만듦
function App() {
  {
    /*children prop 참고자료
     합성 vs 상속(https://ko.legacy.`reactjs.org/docs/composition-vs-inheritance.html) */
  }

  // dummyTodos를 App.jsx가 관리하는 하나의 상태로 등록
  // 초기 값은 dummyTodos
  // 여기서의 todos는 상태값
  const [todos, setTodos] = useState(dummyTodos);

  // 1. 할일 등록 기능
  // TodoForm으로부터 전달받은 할일 객체를 가지고 todos 배열의 뒤쪽에 추가하는 로직
  const addTodoHandler = (todo) => {
    console.log(todo); // TodoForm으로부터 입력된 값들을 잘 전달받았는지

    // TODO: 배열에 추가하는 로직
    const newTodo = {
      id: self.crypto.randomUUID(), // ID 식별용 값
      ...todo,
    };

    // 새롭게 업데이트할 할일 목록 데이터 생성
    // ... 문법: 배열이나 객체의 값을 한 개씩 펼쳐주는 문법
    // [...prev, new] =>새로운 배열 생성 문법
    const updateTodos = [...todos, newTodo];

    // 할일 상태값 갱신
    setTodos(updateTodos);
  };

  return (
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
        <TodoHeader onAdd={addTodoHandler} />
        {/* 할일 목록 */}
        <TodoBody todos={todos} />
      </section>
    </DefaultLayout>
  );
}

export default App;
