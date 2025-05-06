import express, { Express, Request, Response } from "express";
import cors from "cors";
import NewsAPI from "newsapi";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT || "5000");
const newsapi = new NewsAPI(process.env.NEWS_API_KEY || "");

app.use(cors());
app.use(express.json());

app.get("/api/hello", async (req: Request, res: Response) => {
  try {
    // const response = await fetch(`${NEWS_SERVICE_URL}/health`);
    // const status = response.statusText;
    res.json({ message: process.env.NEWS_API_KEY });
  } catch (error) {
    res.status(500).json({ message: "Error fetching news service status" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
