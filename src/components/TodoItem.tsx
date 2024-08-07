function TodoItem(props: { title: string }) {
  return (
    <li>
      <span>V</span>
      <p className="text-red-300 font-bold underline">{props.title}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
