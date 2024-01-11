import { get } from "../components/todo";
import Content from "../components/content";

export default async function Page() {
  const todos = await get();
  return <Content todos={todos}></Content>;
}
