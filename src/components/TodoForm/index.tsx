import React from "react";
import { TodoContext } from "../TodoContext";
function TodoForm({ state }: { state: string }) {
  const { createTodo, setOpenModal } = React.useContext(TodoContext);
  const [text, setText] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [progress, setProgress] = React.useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    const todo = { text, tag, progress };
    createTodo(state, todo);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="h-full p-5">
        <section className="h-3/4">
          <input
            type="text"
            placeholder="Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="w-full p-2 my-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Cortar cebolla para el almuerzo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-2/4 p-2 my-2 border border-gray-300 rounded resize-none"
          />
        </section>
        <footer className="h-1/4 flex justify-between items-center gap-5">
          <button
            onClick={onCancel}
            className="w-1/2 h-10 border border-gray-500 p-2 rounded bg-gray-500 text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 h-10 bg-green-500 text-white p-2 rounded"
          >
            Añadir
          </button>
        </footer>
      </form>
    </>
  );
}

export { TodoForm };
