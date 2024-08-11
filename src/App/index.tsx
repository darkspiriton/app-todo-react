
import React from "react";
import "./index.css";
import { TodoItem } from "../components/TodoItem/index";
import { TodoStatus } from "../components/TodoStatus/index";
import { TodoColumn } from "../components/TodoColumn/index";
import { useLocalStorage } from "./useLocalStorage";
// import { TodoSearch } from "./components/TodoSearch";

interface Todo {
  text: string;
  tag: string;
  progress: number;
}
interface TodoColumn {
  title: string;
  state: string;
  todos: Todo[];
}

const defaultTodos = [
  {
    title: "Starter",
    state: "starter",
    todos: [
      // { text: "Cortar cebolla", tag: "Food", progress: 50 }
    ],
  },
  {
    title: "On going",
    state: "ongoing",
    todos: [
      // { text: "Tomar el curso de intro a React", tag: "Study", progress: 10 },
    ],
  },
  {
    title: "Completed",
    state: "completed",
    todos: [
      // { text: "Llorar con la llorona", tag: "Fun", progress: 40 }
    ],
  },
];

const defaultStatus = [
  {
    title: "Total",
    state: "total",
    count: 0,
    colorBackgound: "#EDF2FE",
    colotText: "#0556FF",
  },
  {
    title: "Completed",
    state: "completed",
    count: 0,
    colorBackgound: "#FFEFE0",
    colotText: "#EE7C18",
  },
  {
    title: "On going",
    state: "ongoing",
    count: 0,
    colorBackgound: "#FEEEFF",
    colotText: "#FB41FF",
  },
  {
    title: "Starter",
    state: "starter",
    count: 0,
    colorBackgound: "#F0EBFD",
    colotText: "#724CE2",
  },
];

function App() {
  const [todos, saveTodos] = useLocalStorage("todos", defaultTodos);
  const [status, setStatus] = React.useState(defaultStatus);

  const createTodo = (state: string) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.state === state);
    const newTodo = { text: "New todo", tag: "New", progress: 0 };
    newTodos[todoIndex].todos.push(newTodo);
    saveTodos(newTodos);
  };
  const deleteTodo = (state: string, text: string) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.state === state);
    const todoItemIndex = newTodos[todoIndex].todos.findIndex(
      (todo: Todo) => todo.text === text
    );
    newTodos[todoIndex].todos.splice(todoItemIndex, 1);
    saveTodos(newTodos);
  };
  const moveTodo = (state: string, text: string) => {
    // console.log("moveTodo", state, text);
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.state === state);
    const todoItemIndex = newTodos[todoIndex].todos.findIndex(
      (todo: Todo) => todo.text === text
    );
    const todoItem = newTodos[todoIndex].todos[todoItemIndex];
    newTodos[todoIndex].todos.splice(todoItemIndex, 1);
    if (state === "starter") {
      newTodos.find((todo) => todo.state === "ongoing")?.todos.push(todoItem);
    }
    if (state === "ongoing") {
      newTodos.find((todo) => todo.state === "completed")?.todos.push(todoItem);
    }
    if (state === "completed") {
      newTodos.find((todo) => todo.state === "starter")?.todos.push(todoItem);
    }
    saveTodos(newTodos);
  };

  React.useEffect(() => {
    setStatus((statusArray) => {
      return statusArray.map((status) => {
        const countTotal = todos.reduce(
          (
            acc: {
              total: number;
              completed: number;
              ongoing: number;
              starter: number;
            },
            todo: TodoColumn
          ) => {
            acc.total += todo.todos.length;
            if (todo.state === "completed") acc.completed = todo.todos.length;
            if (todo.state === "ongoing") acc.ongoing = todo.todos.length;
            if (todo.state === "starter") acc.starter = todo.todos.length;
            return acc;
          },
          { total: 0, completed: 0, ongoing: 0, starter: 0 }
        );
        const statusCounts: { [key: string]: number } = {
          total: countTotal.total,
          completed: countTotal.completed,
          ongoing: countTotal.ongoing,
          starter: countTotal.starter,
        };
        return {
          ...status,
          count: statusCounts[status.state] || 0,
        };
      });
    });
  }, [todos]);

  return (
    <React.Fragment>
      <section className="bg-[#F2F5FF] h-screen grid gap-4 grid-cols-4 py-10 lg:px-2 xl:px-24">
        <article className="bg-[#FDFDFD] col-span-3 rounded-2xl p-5 flex flex-col gap-5">
          <header>
            <h2 className="text-4xl font-bold">Tasks</h2>
          </header>
          <main className="flex h-full gap-4">
            {todos.map((todo: TodoColumn, index: number) => {
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

export default App;
