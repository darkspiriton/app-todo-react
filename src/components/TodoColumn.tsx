import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
function TodoColumn({
  children,
  title,
  onCreate,
}: {
  children: React.ReactNode;
  title: string;
  onCreate: () => void;
}) {
  return (
    <section className="w-1/3">
      <header className="flex w-full justify-between items-center mb-4">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <CreateTodoButton onCreate={onCreate}></CreateTodoButton>
      </header>
      <ul className="flex flex-col gap-4">{children}</ul>
    </section>
  );
}

export { TodoColumn };
