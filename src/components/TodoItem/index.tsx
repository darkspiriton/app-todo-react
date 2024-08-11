import {
  MdOutlineRemoveCircleOutline,
  MdOutlineArrowCircleRight,
} from "react-icons/md";

function TodoItem({
  text,
  tag,
  progress,
  onDelete,
  onMove,
}: {
  text: string;
  tag: string;
  progress: number;
  onDelete: () => void;
  onMove: () => void;
}) {
  return (
    <li className="flex flex-col rounded-md bg-[#FEFEFE] h-auto p-2 shadow-xl">
      <header className="flex w-full justify-between items-center mb-2">
        <p className="rounded-xl text-sm text-orange-400 bg-[#FFEEE0] px-2">
          {tag}
        </p>
        <div className="flex gap-2">
          <button onClick={onDelete} className="hover:rotate-180 duration-300 hover:text-red-600 text-lg">
            <MdOutlineRemoveCircleOutline></MdOutlineRemoveCircleOutline>
          </button>
          <button onClick={onMove} className="text-lg hover:text-blue-400">
            <MdOutlineArrowCircleRight></MdOutlineArrowCircleRight>
          </button>
        </div>
      </header>
      <main className="flex flex-col gap-4">
        <section className="min-h-10 text-sm text-gray-500">{text}</section>
        <section className="flex flex-col">
          <p className="self-end font-bold text-sm">{`${progress}%`}</p>
          <div className="relative">
            <div
              className="absolute z-10 bg-green-500 h-1 rounded-sm"
              style={{
                width: `${progress}%`,
              }}
            ></div>
            <div className="absolute z-0 top-0 bg-green-200 rounded-sm h-1 w-full"></div>
          </div>
        </section>
        <section className="flex justify-between items-center">
          <div className="w-5 h-5 rounded-full border-purple-500 border-2"></div>
        </section>
      </main>
    </li>
  );
}

export { TodoItem };
