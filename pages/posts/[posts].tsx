export default function post({ post }) {
  return (
    <div className="text-black leading-8">
      <p>ID : {post.id}</p>
      <p>TITTLE : {post.title}</p>
      <p>CONTENTS : {post.body}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log("params...", context.params);
  //   console.log(context);
  const id = context.params.posts;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  if (!Object.keys(post).length) {
    return { notFound: true };
  }
  return { props: { post } };
}
