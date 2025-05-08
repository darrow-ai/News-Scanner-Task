import { Router, Request, Response } from "express";
import NewsAPI from "newsapi";
import dotenv from "dotenv";

dotenv.config();

const newsapi = new NewsAPI(process.env.NEWS_API_KEY || "");

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Darrow's News API");
});

router.get("/sources", async (req: Request, res: Response) => {
  const { q, category } = req.query;

  try {
    const sourcesResponse = await newsapi.v2.sources({
      language: "en",
      country: "us",
      category: category as string,
    });

    const sources = sourcesResponse.sources
      .map((source) => source.id)
      .join(",");

    const articlesResponse = await newsapi.v2.everything({
      q: q as string,
      sources: sources,
    });

    res.json(articlesResponse);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;
