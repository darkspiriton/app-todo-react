// @ts-nocheck
import React from "react";
import { TodoItem } from "../components/TodoItem/index";
import { TodoStatus } from "../components/TodoStatus/index";
import { TodoColumn } from "../components/TodoColumn/index";
import { TodoDataColumn, Status } from "../Types/interfaces";
import { LoadingTodos } from "../components/LoadingTodos";
import { ErrorTodos } from "../components/ErrorTodos";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoContext } from "../components/TodoContext";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
// import { TodoSearch } from "../components/TodoSearch";

function AppUI() {
  const {
    todos,
    status,
    loadingTodos,
    errorTodos,
    loadingStatus,
    errorStatus,
    createTodo,
    deleteTodo,
    moveTodo,
    openModal,
    setOpenModal,
    createState,
    setCreateState,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <section className="bg-[#F2F5FF] h-screen grid gap-4 grid-cols-4 py-10 lg:px-2 xl:px-24">
        <article className="bg-[#FDFDFD] col-span-3 rounded-2xl p-5 flex flex-col gap-5">
          <header>
            <h2 className="text-4xl font-bold">Tasks</h2>
            {/* <TodoSearch></TodoSearch> */}
          </header>
          <main className="flex h-full gap-4 justify-center">
            {loadingTodos && <LoadingTodos />}
            {!loadingTodos && errorTodos && <ErrorTodos />}
            {!loadingTodos && !errorTodos && todos.length === 0 && (
              <EmptyTodos />
            )}
            {!loadingTodos &&
              !errorTodos &&
              todos.map((todo: TodoDataColumn, index: number) => {
                return (
                  <TodoColumn
                    key={index}
                    title={todo.title}
                    state={todo.state}
                    onOpenModal={() => {
                      setCreateState(todo.state);
                      setOpenModal((state) => !state);
                    }}
                  >
                    {todo.todos.map((itemTodo, index) => (
                      <TodoItem
                        key={index}
                        text={itemTodo.text}
                        tag={itemTodo.tag}
                        progress={itemTodo.progress}
                        onDelete={() => deleteTodo(todo.state, itemTodo.text)}
                        onMove={() => moveTodo(todo.state, itemTodo.text)}
                      />
                    ))}
                  </TodoColumn>
                );
              })}
          </main>
        </article>
        <article className="bg-[#FDFDFD] col-span-1 rounded-2xl p-5 flex flex-col gap-5">
          <header>
            <h2 className="text-4xl text-gray-600 font-bold">Progress</h2>
          </header>
          <main>
            {/* <section className="min-h-40">graph</section> */}
            <section className="flex flex-col gap-4">
              <header>
                <h3 className="text-md font-bold">Status</h3>
              </header>
              <main className="grid md:grid-cols-1 lg:grid-cols-2 gap-2">
                {loadingStatus && <p>Loading Status...</p>}
                {!loadingStatus && errorStatus && <p>Error Status...</p>}
                {!loadingStatus && status.length === 0 && <p>No data...</p>}
                {!loadingStatus &&
                  !errorStatus &&
                  status.map((status, index) => (
                    <TodoStatus
                      key={index}
                      title={status.title}
                      count={status.count}
                      colorBackgound={status.colorBackgound}
                      colorText={status.colorText}
                    />
                  ))}
              </main>
            </section>
          </main>
        </article>
      </section>
      {openModal && (
        <Modal>
          <TodoForm state={createState} />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
