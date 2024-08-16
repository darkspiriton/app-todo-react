import React from "react";
import { TodoDataColumn, Status } from "../Types/interfaces";
const useStatusProgress = (
  statusProgress: Status[],
) => {
  const [status, setStatus] = React.useState(statusProgress);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const saveStatus = (todos: TodoDataColumn[]) => {
    try {
      const statusUpdated = statusProgress.map((status) => {
        const countTotal = todos.reduce(
          (
            acc: {
              total: number;
              completed: number;
              ongoing: number;
              starter: number;
            },
            todo: TodoDataColumn
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
      setStatus(statusUpdated);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  return { status, saveStatus, loading, error };
};
export { useStatusProgress };
