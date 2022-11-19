import { useRouter } from "next/router";
import { GetStaticPaths } from "next";

export default function Ssg({ post }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading ..</div>;
  return (
    <div className="text-black leading-8">
      <p>ID : {post.id}</p>
      <p>TITTLE : {post.title}</p>
      <p>CONTENTS : {post.body}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post) => `/ssg/${post.id}`);
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  console.log("params...", context.params);
  //   console.log(context);
  const id = context.params.ssg;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  if (!Object.keys(post).length) {
    return { notFound: true };
  }
  return { props: { post } };
}
