function TodoItem({ text, completed }: { text: string; completed: boolean }) {
  return (
    <li className="flex flex-col rounded-md bg-[#FEFEFE] h-auto p-2 shadow-lg">
      {/* <span>V {completed}</span>
      <p className="text-red-300 font-bold underline">{text}</p>
      <span>X</span> */}
      <header className="flex w-full justify-between items-center mb-2">
        <p className="rounded-xl text-sm text-orange-400 bg-[#FFEEE0] px-2">
          Web desing
        </p>
        <button>-</button>
      </header>
      <main className="flex flex-col gap-4">
        <section className="min-h-10 text-sm text-gray-500">{text}</section>
        <section className="flex flex-col">
          <p className="self-end font-bold text-sm">50%</p>
          <div className="relative">
            <div
              className="absolute z-10 bg-green-500 h-1 rounded-sm"
              style={{
                width: "50%",
              }}
            ></div>
            <div className="absolute z-0 top-0 bg-green-200 rounded-sm h-1 w-full"></div>
          </div>
        </section>
        <section className="flex justify-between items-center">
          <div className="w-5 h-5 rounded-full border-purple-500 border-2"></div>
          <div>* 19</div>
        </section>
      </main>
    </li>
  );
}

export { TodoItem };
