import { Todos, get, getSlowly } from "../components/todo";

export default async function StreamingTodos() {
  const todos = await getSlowly();
  return <Todos todos={todos}></Todos>;
}
