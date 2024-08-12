import React from "react";
import { TodoDataColumn } from "./interfaces";

const useLocalStorage = (itemName: string, itemValue: TodoDataColumn[]) => {
  const storedItem = localStorage.getItem(itemName);
  if (!storedItem) {
    localStorage.setItem(itemName, JSON.stringify(itemValue));
  }
  const parseItem = storedItem ? JSON.parse(storedItem) : itemValue;
  const [item, setItem] = React.useState(parseItem);
  const saveTodos = (newTodos: TodoDataColumn[]) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos);
  };

  return [item, saveTodos];
};

export { useLocalStorage };
