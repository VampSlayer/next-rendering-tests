import Link from "next/link";

export default function Page() {
  return (
    <main>
      <p>
        <Link href="side-by-side">Side by Side Comparision</Link>
      </p>
      <p>
        <Link href="ssr">Server Side Fetch & Server Side Rendering</Link>
      </p>
      <p>
        <Link href="ssr-streaming">Streaming & Server Side Rendering</Link>
      </p>
      <p>
        <Link href="client">Client Side Fetch & Server Side Rendering</Link>
      </p>
      <p>
        <Link href="weaving">Server and Client Component Weaving</Link>
      </p>
      <p>
        <Link href="ssg/1">Static Site Generation</Link>
      </p>
    </main>
  );
}
