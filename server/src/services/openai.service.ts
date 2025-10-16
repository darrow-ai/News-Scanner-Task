import OpenAI from "openai";
import { PORTKEY_GATEWAY_URL, createHeaders } from "portkey-ai";

export function getOpenAIClient(): OpenAI {
  return _createOpenAIClient({
    openAIKey: "", // Plesae add the openAIKey we provided you here
  });
}

// Private function to create the openai client - Do not touch this function
type createOpenAIClientArgs = {
  openAIKey: string;
};

function _createOpenAIClient({ openAIKey }: createOpenAIClientArgs): OpenAI {
  return new OpenAI({
    apiKey: "xx",
    baseURL: PORTKEY_GATEWAY_URL,
    defaultHeaders: createHeaders({
      apiKey: openAIKey,
    }),
  });
}
