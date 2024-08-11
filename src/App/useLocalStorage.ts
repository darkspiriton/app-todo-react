import React from "react";

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

const useLocalStorage = (itemName: string, itemValue: TodoColumn[]) => {
  const storedItem = localStorage.getItem(itemName);
  if (!storedItem) {
    localStorage.setItem(itemName, JSON.stringify(itemValue));
  }
  const parseItem = storedItem ? JSON.parse(storedItem) : itemValue;
  const [item, setItem] = React.useState(parseItem);
  const saveTodos = (newTodos: TodoColumn[]) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos);
  };

  return [item, saveTodos];
};

export { useLocalStorage };
