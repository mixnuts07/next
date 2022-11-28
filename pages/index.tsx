import { useState, useEffect } from "react";
import Head from "next/head";
import Counter from "../src/stores/component/Counter";
import StorageFunc from "../src/components/localStorage/StorageFunc";
import Render from "../src/components/rendering/Render";

type Users = {
  id: string;
  name: string;
};

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();
  console.log(data);
  return { props: { data } };
}

export default function Home({ data }) {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("./api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "John" }),
      });
      const data = await response.json();
      setUsers(data.users);
    };
    fetchUsers();
  }, []);
  return (
    <div className="w-screen h-5/6 items-center justify-center flex">
      <Head>
        <title>Next.js</title>
        <meta name="description" content="Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Counter />
          <StorageFunc />
          <Render />
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
          <ul className="underline">
            {data.users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
