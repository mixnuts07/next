const Post = () => {
  return <div>POST</div>;
};

export async function getServerSideProps(context) {
  console.log("params...", context.params);
  //   console.log(context);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { props: { posts } };
}

export default Post;
