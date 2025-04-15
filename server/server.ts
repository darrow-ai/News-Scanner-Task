import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT || "5000");

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from the server!" });
});

app.post("/api/chat", (req: Request, res: Response) => {
  const userMessage = req.body.message;
  const response = `This is a streaming response to: "${userMessage}". It will be sent word by word.`;
  const words = response.split(" ");

  // Add a 1-second delay before starting to send the response
  setTimeout(() => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Transfer-Encoding": "chunked",
    });

    let index = 0;
    const intervalId = setInterval(() => {
      if (index < words.length) {
        res.write(words[index] + " ");
        index++;
      } else {
        clearInterval(intervalId);
        res.end();
      }
    }, 200);
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
