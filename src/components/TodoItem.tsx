function TodoItem({ text, completed }: { text: string; completed: boolean }) {
  return (
    <li className="flex flex-col rounded-md bg-red-100 h-50 p-2">
      {/* <span>V {completed}</span>
      <p className="text-red-300 font-bold underline">{text}</p>
      <span>X</span> */}
      <header className="flex w-full justify-between items-center">
        <p>tag</p>
        <button>-</button>
      </header>
      <main className="flex flex-col gap-4">
        <section className="min-h-12">{text}</section>
        <section className="flex flex-col">
          <p className="self-end font-bold text-sm">30%</p>
          <div className="bg-green-500 h-1"></div>
        </section>
        <section className="flex justify-between items-center">
          <div className="w-5 h-5 rounded-full border border-purple-500"></div>
          <div>count</div>
        </section>
      </main>
    </li>
  );
}

export { TodoItem };
