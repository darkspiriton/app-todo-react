import React from "react";
import { TodoDataColumn } from "../../Types/interfaces";

const useLocalStorage = (itemName: string, itemValue: TodoDataColumn[]) => {
  const [item, setItem] = React.useState(itemValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      const storedItem = localStorage.getItem(itemName);
      if (!storedItem) {
        localStorage.setItem(itemName, JSON.stringify(itemValue));
      }
      const parseItem = storedItem ? JSON.parse(storedItem) : itemValue;
      setItem(parseItem);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, []);

  const saveItem = (newTodos: TodoDataColumn[]) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos);
  };

  return { item, saveItem, loading, error };
};

export { useLocalStorage };
