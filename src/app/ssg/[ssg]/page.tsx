import Content from "@/app/components/content";
import { get } from "@/app/components/todo";

export async function generateStaticParams(): Promise<{ ssg: string }[]> {
  return [{ ssg: "1" }];
}

export default async function Page() {
  const todos = await get();
  return <Content todos={todos}></Content>;
}
