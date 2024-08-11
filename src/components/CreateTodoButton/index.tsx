import { MdAddCircleOutline } from "react-icons/md";

function CreateTodoButton({ onCreate }: { onCreate: () => void }) {
  return (
    <button onClick={onCreate} className="hover:rotate-180 duration-300 hover:text-green-500 text-lg">
      <MdAddCircleOutline></MdAddCircleOutline>
    </button>
  );
}

export { CreateTodoButton };
