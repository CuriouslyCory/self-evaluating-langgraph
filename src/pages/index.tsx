import { useState } from "react";
import Head from "next/head";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { api } from "~/utils/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { codeComponent } from "~/components/ui/code-block";

export default function Home() {
  const hello = api.post.hello.useMutation();
  const [questionInput, setQuestionInput] = useState("");

  function handleClick() {
    hello.mutate({
      text: questionInput,
    });
  }
  return (
    <>
      <Head>
        <title>Self Evaluating Agent</title>
        <meta
          name="description"
          content="Experiment using LangGraph to answer a prompt, then evaluate the response and update if it doesn't fully answer the request prompt."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <div className="w-full p-6">
          <Markdown components={codeComponent} remarkPlugins={[remarkGfm]}>
            {hello?.data?.response}
          </Markdown>
        </div>
        <div className="mt-auto flex w-full gap-x-4 p-6">
          <Input
            placeholder="Type your question here"
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
            className="bg-transparent"
          />
          <Button onClick={handleClick} disabled={hello.isPending}>
            Submit
          </Button>
        </div>
      </main>
    </>
  );
}
