// App이라는 이름의 함수형 컴포넌트

import TodoBody from "./components/todos/TodoBody";
import TodoHeader from "./components/todos/TodoHeader";
import DefaultLayout from "./layouts/DefaultLayout";

// 해당 컴포넌트의 파일명은 App.jsx(js)로 만듦
function App() {
  {
    /*children prop 참고자료
     합성 vs 상속(https://ko.legacy.`reactjs.org/docs/composition-vs-inheritance.html) */
  }
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
        <TodoHeader />

        {/* 할일 목록 */}
        <TodoBody />
      </section>
    </DefaultLayout>
  );
}

export default App;
