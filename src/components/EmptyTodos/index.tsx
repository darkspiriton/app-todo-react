function EmptyTodos() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <h3 className="text-2xl font-bold">No tasks yet</h3>
      <p className="text-gray-500">Create a new task to get started</p>
    </div>
  );
}
export { EmptyTodos };
