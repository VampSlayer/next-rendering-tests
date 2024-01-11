import { Todos, getSlowly } from "../components/todo";
import ButtonCount from "../components/button-count";
import Image from "next/image";
import { Suspense } from "react";

async function SlowTodos() {
  const todos = await getSlowly();
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
      <ButtonCount></ButtonCount>
      <Suspense fallback={<div>Loading...</div>}>
        <SlowTodos></SlowTodos>
      </Suspense>
    </main>
  );
}
