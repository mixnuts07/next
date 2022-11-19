import Link from "next/link";

const index = ({ posts }) => {
  return (
    <div className="underline">
      <p>POST一覧</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className="pt-5">
              <Link href={`/posts/${[post.id]}`}>{post.body}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}
export default index;
