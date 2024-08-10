function CreateTodoButton({ onCreate }: { onCreate: () => void }) {
  return (
    <button onClick={onCreate} className="hover:rotate-45 duration-150">
      +
    </button>
  );
}

export { CreateTodoButton };
