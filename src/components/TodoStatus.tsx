function TodoStatus({ title, count }: { title: string; count: number }) {
  return (
    <section className=" flex flex-col justify-center bg-green-200 w-100 p-2 rounded-lg">
      <p className="text-sm">{title}</p>
      <p className="text-cyan-500 font-bold text-lg">{count}</p>
    </section>
  );
}

export { TodoStatus };
