import { Todos, get } from "../components/todo";
import ButtonCount from "../components/button-count";
import Image from "next/image";
import { Suspense } from "react";
import ColorServer from "./color-server";
import { button } from "./client-function";
import ActionServer from "./action-server";

async function SlowTodos() {
  const todos = await get();
  return <Todos todos={todos}></Todos>;
}

export default async function Page() {
  return (
    <main>
      <Image
        alt="next"
        style={{ backgroundColor: "white" }}
        src="vercel.svg"
        width={1000}
        height={200}
      ></Image>
      <ButtonCount>
        <ColorServer></ColorServer>
      </ButtonCount>
      <ActionServer buttons={[button, button, button, button]}></ActionServer>
      <Suspense fallback={<div>Loading...</div>}>
        <SlowTodos></SlowTodos>
      </Suspense>
    </main>
  );
}
