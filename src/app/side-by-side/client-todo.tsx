"use client";

//https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-client-with-third-party-libraries
import useSWR from "swr";
import { Todos, get } from "../components/todo";

export default function ClientTodos() {
  const { data: todos } = useSWR("todos", get);
  return <Todos todos={todos}></Todos>;
}
