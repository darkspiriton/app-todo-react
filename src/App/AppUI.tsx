import React from "react";
import { TodoItem } from "../components/TodoItem/index";
import { TodoStatus } from "../components/TodoStatus/index";
import { TodoColumn } from "../components/TodoColumn/index";
import { TodoDataColumn } from "./interfaces";

function AppUI({
  todos,
  status,
  createTodo,
  deleteTodo,
  moveTodo,
}: {
  todos: TodoDataColumn[];
  status: {
    title: string;
    count: number;
    colorBackgound: string;
    colotText: string;
  }[];
  createTodo: (state: string) => void;
  deleteTodo: (state: string, text: string) => void;
  moveTodo: (state: string, text: string) => void;
}) {
  return (
    <React.Fragment>
      <section className="bg-[#F2F5FF] h-screen grid gap-4 grid-cols-4 py-10 lg:px-2 xl:px-24">
        <article className="bg-[#FDFDFD] col-span-3 rounded-2xl p-5 flex flex-col gap-5">
          <header>
            <h2 className="text-4xl font-bold">Tasks</h2>
          </header>
          <main className="flex h-full gap-4">
            {todos.map((todo: TodoDataColumn, index: number) => {
              return (
                <TodoColumn
                  key={index}
                  title={todo.title}
                  onCreate={() => createTodo(todo.state)}
                >
                  {todo.todos.map((itemTodo, index) => (
                    <TodoItem
                      key={index}
                      text={itemTodo.text}
                      tag={itemTodo.tag}
                      progress={itemTodo.progress}
                      onDelete={() => deleteTodo(todo.state, itemTodo.text)}
                      onMove={() => moveTodo(todo.state, itemTodo.text)}
                    />
                  ))}
                </TodoColumn>
              );
            })}
          </main>
        </article>
        <article className="bg-[#FDFDFD] col-span-1 rounded-2xl p-5 flex flex-col gap-5">
          <header>
            <h2 className="text-4xl text-gray-600 font-bold">Progress</h2>
          </header>
          <main>
            {/* <section className="min-h-40">graph</section> */}
            <section className="flex flex-col gap-4">
              <header>
                <h3 className="text-md font-bold">Status</h3>
              </header>
              <main className="grid md:grid-cols-1 lg:grid-cols-2 gap-2">
                {status.map((status, index) => (
                  <TodoStatus
                    key={index}
                    title={status.title}
                    count={status.count}
                    colorBackgound={status.colorBackgound}
                    colorText={status.colotText}
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

export { AppUI };
