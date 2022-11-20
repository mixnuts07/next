import Link from "next/link";

const Render = () => {
  return (
    <div>
      <h1 className="text-2xl underline">Rendering</h1>
      <Link href="./ssr/">
        <p>SSR : POST Page</p>
      </Link>
      <Link href="./ssg/">
        <p>SSG : POST Page</p>
      </Link>
      <Link href="./swr/">
        <p>SWR : POST Page</p>
      </Link>
    </div>
  );
};

export default Render;
