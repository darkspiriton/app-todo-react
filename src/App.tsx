import React from "react";
import "./App.css";
import { TodoColumn } from "./components/TodoColumn";
import { TodoItem } from "./components/TodoItem";
import { TodoStatus } from "./components/TodoStatus";
// import { TodoSearch } from "./components/TodoSearch";

const defaultTodos = [
  {
    title: "Starter",
    todos: [
      { text: "Cortar cebolla", completed: true },
      { text: "Tomar el curso de intro a React", completed: false },
    ],
  },
  {
    title: "On going",
    todos: [
      { text: "Tomar el curso de intro a React", completed: false },
      { text: "Llorar con la llorona", completed: false },
      { text: "LALALALALALALALALA", completed: false },
    ],
  },
  {
    title: "Completed",
    todos: [
      { text: "Llorar con la llorona", completed: false },
      { text: "LALALALALALALALALA", completed: false },
    ],
  },
];

const defaultStatus = [
  { title: "Total", count: 2 },
  { title: "Completed", count: 1 },
  { title: "On going", count: 1 },
  { title: "Starter", count: 0 },
];

function App() {
  return (
    <React.Fragment>
      <section className="bg-[#F2F5FF] h-screen grid gap-4 grid-cols-4 py-10 px-24">
        <article className="bg-white col-span-3 rounded-2xl p-5 flex flex-col gap-5">
          <header>
            <h2 className="text-4xl font-bold">Tasks</h2>
          </header>
          <main className="flex h-full gap-4">
            {defaultTodos.map((todo, index) => {
              return (
                <TodoColumn key={index} title={todo.title}>
                  {todo.todos.map((todo, index) => (
                    <TodoItem
                      key={index}
                      text={todo.text}
                      completed={todo.completed}
                    />
                  ))}
                </TodoColumn>
              );
            })}
          </main>
        </article>
        <article className="bg-white col-span-1 rounded-2xl p-5 flex flex-col gap-5">
          <header>
            <h2 className="text-2xl text-gray-600 font-bold">Progress</h2>
          </header>
          <main>
            <section className="min-h-40">graph</section>
            <section className="flex flex-col gap-4">
              <header>
                <h3>Status</h3>
              </header>
              <main className="grid grid-cols-2 gap-2">
                {defaultStatus.map((status, index) => (
                  <TodoStatus
                    key={index}
                    title={status.title}
                    count={status.count}
                  />
                ))}
              </main>
            </section>
          </main>
        </article>
      </section>
    </React.Fragment>
  );
}

export default App;
