import { Todos, get } from "../components/todo";

export default async function SSRTodos() {
  const todos = await get();
  return <Todos todos={todos}></Todos>;
}
