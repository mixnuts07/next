import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Counter from "../src/stores/component/Counter";
import StorageFunc from "../src/components/localStorage/StorageFunc";
import Render from "../src/components/rendering/Render";
import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetUsers {
        users {
          id
          name
          email
        }
      }
    `,
  })
  .then((result) => console.log(result));

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
// _app.tsxにclientがProviderで渡されている
function DisplayLocations() {
  const { loading, data, error } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading ... </p>;
  if (error) return <p>error ... </p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      {/* <img src={photo} alt="location=reference" width={50} height={50} /> */}
      <br />
      <b>About This Location</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

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
    <div className="w-screen h-5/6 items-center justify-center flex bg-cyan-100">
      <Head>
        <title>Next.js</title>
        <meta name="description" content="Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <DisplayLocations />
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
