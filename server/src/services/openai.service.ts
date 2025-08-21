import OpenAI from "openai";
import { PORTKEY_GATEWAY_URL, createHeaders } from "portkey-ai";

export function getOpenAIClient(): OpenAI {
  return _createOpenAIClient({
    openAIKey: "", // Plesae add the OpenAIKey we provided you here
  });
}

// Private function to create the openai client - Do not touch this function
function _createOpenAIClient({ openAIKey }: { openAIKey: string }): OpenAI {
  return new OpenAI({
    apiKey: "xx",
    baseURL: PORTKEY_GATEWAY_URL,
    defaultHeaders: createHeaders({
      apiKey: "n307Js4TaC6oiFUbdvZIR37WBsMp",
      virtualKey: openAIKey,
    }),
  });
}
