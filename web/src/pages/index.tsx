import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <h1>Brenda eh uma galada</h1>

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

      <a href="/api/auth/callback">Login</a>
    </>
  )

}
