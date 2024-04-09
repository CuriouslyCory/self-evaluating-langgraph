import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { generateContent } from "~/server/features/self-eval-graph";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      const workerModel = new ChatOllama({
        model: "mistral",
        temperature: 0.6,
      });

      const evalModel = new ChatOllama({
        model: "mistral",
        temperature: 0.1,
      });

      const response = await generateContent(
        input.text,
        workerModel,
        evalModel,
      );
      console.log(response);
      return { response };
    }),
});
