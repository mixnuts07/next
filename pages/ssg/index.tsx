import Link from "next/link";

export default function index({ posts }) {
  return (
    <div className="text-black underline">
      <p>POST</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className="pt-5">
              <Link href={`/ssg/${post.id}`}>{post.body}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { props: { posts } };
}
