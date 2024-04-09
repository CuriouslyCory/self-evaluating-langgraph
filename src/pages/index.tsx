import Head from "next/head";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useMutation();

  function handleClick() {
    hello.mutate({
      text: "Invent a fictional character for a sci-fi mystery story. Describe their physical appearance, personality, background, and what makes them unique.",
    });
  }
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Hello Agent</h1>
        <button onClick={handleClick}>Air speed?</button>
        {JSON.stringify(hello?.data)}
      </main>
    </>
  );
}
