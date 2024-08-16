import { MdAddCircleOutline } from "react-icons/md";

function CreateTodoButton({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <button onClick={onOpenModal} className="hover:rotate-180 duration-300 hover:text-green-500 text-lg">
      <MdAddCircleOutline></MdAddCircleOutline>
    </button>
  );
}

export { CreateTodoButton };
