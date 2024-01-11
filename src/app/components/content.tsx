import ButtonCount from "./button-count";
import Image from "next/image";
import { Todo, Todos } from "./todo";

export default function Content({ todos }: { todos: Todo[] | undefined }) {
  return (
    <main>
      <Image
        alt="next"
        style={{ backgroundColor: "white" }}
        src="vercel.svg"
        width={1000}
        height={200}
      ></Image>
      <ButtonCount></ButtonCount>
      <Todos todos={todos}></Todos>
    </main>
  );
}
