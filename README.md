#TODO: Complete README
# Full Stack Home Assignment

This project is a simple chat application built with React and Node.js.

## Getting Started

To run the project, follow these steps:

1. Install dependencies:
   ```
   npm run install:all
   ```

2. Start the server and client:
   ```
   npm run start
   ```

## Implementation Instructions

Your task is to implement the `streamResponse` function in `client/src/hooks/useChat.ts`. Follow these guidelines:

1. The function should send the user's message to the server.
2. It should then stream the response back to the client.
3. While waiting for the response, display "..." as a placeholder.
4. As the response is streamed back, remove the "..." and progressively display the incoming response.

## Design Reference

For the user interface design, please refer to the following Figma link:

[Darrow AI Assistant Design](https://www.figma.com/design/Z6tR8WuDlnb7B9Sb1WrdGr/Darrow-AI-Assistant?node-id=0-1&t=pTxyEFpQJlljyIrL-1)
