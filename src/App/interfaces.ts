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

interface Status {
  title: string;
  state: string;
  count: number;
  colorBackgound: string;
  colorText: string;
}

export type { Todo, TodoDataColumn, Status };
