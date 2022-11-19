import useSWR from "swr";

const Index = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  // useSWR(key, fetcher, options)
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error)
    return <div className="underline text-black">failed to load .. </div>;
  if (!data) return <div className="underline text-black">Loading.. </div>;
  return (
    <div className="underline text-black">
      <h1>Post</h1>
      <ul>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Index;
