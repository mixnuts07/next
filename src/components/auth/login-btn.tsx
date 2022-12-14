import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sing Out</button>
      </div>
    );
  }
  return (
    <div className="bg-cyan-100">
      <p>Not Signed in</p>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
}
