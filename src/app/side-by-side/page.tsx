import { Suspense } from "react";
import ButtonCount from "../components/button-count";
import Image from "next/image";
import SSRTodos from "./ssr-todo";
import StreamingTodos from "./streaming-todo";
import ClientTodos from "./client-todo";

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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2>Server Side Fetch</h2>
          <SSRTodos></SSRTodos>
        </div>
        <div>
          <h2>Client Side Fetch</h2>
          <ClientTodos></ClientTodos>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <h2>Streaming Server Side Fetch</h2>
            <StreamingTodos></StreamingTodos>
          </div>
        </Suspense>
      </div>
    </main>
  );
}
