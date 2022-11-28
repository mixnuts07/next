import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sing Out</button>
      </>
    );
  }
  return (
    <>
      Not Sign in <br />
      <button onClick={() => signIn()}>Sign In </button>
    </>
  );
}