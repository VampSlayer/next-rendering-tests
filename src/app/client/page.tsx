"use client";

//https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-client-with-third-party-libraries
import useSWR from "swr";
import Content from "../components/content";
import { get } from "../components/todo";

export default function Page() {
  const { data: todos } = useSWR("todos", get);
  return <Content todos={todos}></Content>;
}
