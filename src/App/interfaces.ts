interface Todo {
  text: string;
  tag: string;
  progress: number;
}
interface TodoDataColumn {
  title: string;
  state: string;
  todos: Todo[];
}

export type { Todo, TodoDataColumn };
