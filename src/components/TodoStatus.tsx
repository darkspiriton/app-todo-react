function TodoStatus({
  title,
  count,
  colorBackgound,
  colorText,
}: {
  title: string;
  count: number;
  colorBackgound: string;
  colorText: string;
}) {
  return (
    <section
      className=" flex flex-col gap-1 justify-center w-100 p-4 rounded-lg"
      style={{
        backgroundColor: colorBackgound,
      }}
    >
      <p className="text-sm text-gray-500">{title}</p>
      <div className="flex gap-5">
        <div
          className="w-1 h-full rounded-md"
          style={{
            backgroundColor: colorText,
          }}
        ></div>
        <p
          className="text-cyan-500 font-bold text-2xl"
          style={{
            color: colorText,
          }}
        >
          {count}
        </p>
      </div>
    </section>
  );
}

export { TodoStatus };
