import React from "react";
import "./index.css";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";
import { useStatusProgress } from "./useStatusProgress";
import { Todo, Status } from "./interfaces";

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
    colorText: "#0556FF",
  },
  {
    title: "Completed",
    state: "completed",
    count: 0,
    colorBackgound: "#FFEFE0",
    colorText: "#EE7C18",
  },
  {
    title: "On going",
    state: "ongoing",
    count: 0,
    colorBackgound: "#FEEEFF",
    colorText: "#FB41FF",
  },
  {
    title: "Starter",
    state: "starter",
    count: 0,
    colorBackgound: "#F0EBFD",
    colorText: "#724CE2",
  },
];

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading: loadingTodos,
    error: errorTodos,
  } = useLocalStorage("todos", defaultTodos);

  const {
    status,
    saveStatus,
    loading: loadingStatus,
    error: errorStatus,
  } = useStatusProgress(defaultStatus);

  React.useEffect(() => {
    saveStatus(todos);
  },[todos]);

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

  return (
    <AppUI
      todos={todos}
      status={status as Status[]}
      createTodo={createTodo}
      deleteTodo={deleteTodo}
      moveTodo={moveTodo}
      loadingTodos={loadingTodos}
      errorTodos={errorTodos}
      loadingStatus={loadingStatus}
      errorStatus={errorStatus}
    ></AppUI>
  );
}

export default App;
