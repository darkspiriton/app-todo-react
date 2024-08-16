/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { TodoContext } from "../TodoContext/index";
// import Logo from "../assets/logo.svg?react";
function TodoColumn({
  children,
  title,
  state,
  onOpenModal,
}: {
  children: React.ReactNode;
  title: string;
  state: string;
  onOpenModal: () => void;
}) {
  const { createEnable } = React.useContext(TodoContext);
  return (
    <section className="w-1/3">
      <header className="flex w-full justify-between items-center mb-4">
        <h3 className="text-gray-500 text-sm flex gap-2">
          {/* <Logo className="w-[16px] h-[16px] fill-blue-500" /> */}
          {title}
        </h3>
        {createEnable.includes(state) && (
          <CreateTodoButton onOpenModal={onOpenModal}></CreateTodoButton>
        )}
      </header>
      <ul className="flex flex-col gap-4">{children}</ul>
    </section>
  );
}

export { TodoColumn };
