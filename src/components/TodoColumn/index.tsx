/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/index";
// import Logo from "../assets/logo.svg?react";
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
        <h3 className="text-gray-500 text-sm flex gap-2">
          {/* <Logo className="w-[16px] h-[16px] fill-blue-500" /> */}
          {title}
        </h3>
        <CreateTodoButton onCreate={onCreate}></CreateTodoButton>
      </header>
      <ul className="flex flex-col gap-4">{children}</ul>
    </section>
  );
}

export { TodoColumn };
