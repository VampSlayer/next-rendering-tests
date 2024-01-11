export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function get(): Promise<Todo[]> {
  return (await fetch("https://jsonplaceholder.typicode.com/todos")).json();
}

export async function getSlowly(): Promise<Todo[]> {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (await fetch("https://jsonplaceholder.typicode.com/todos")).json();
}

export function Todos({ todos }: { todos: Todo[] | undefined }) {
  return (
    <div>
      {todos?.map((todo) => (
        <div key={todo.id}>
          <p>{todo.id}</p>
          <p>{todo.completed}</p>
          <p>{todo.title}</p>
          <p>{todo.userId}</p>
        </div>
      ))}
    </div>
  );
}
