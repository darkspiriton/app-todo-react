function TodoList(props: { children: React.ReactNode }) {
  return <section>
    <ul>{props.children}</ul>
  </section>;
}

export { TodoList };
