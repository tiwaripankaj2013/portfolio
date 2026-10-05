import data from "@/data/portfolio.json";
import type { Portfolio } from "./types";

/**
 * Single data entry point. Today it reads local JSON; to move to a real API:
 *   const res = await fetch(`${process.env.API_URL}/portfolio`, { next: { revalidate: 3600 } });
 *   return res.json();
 * Nothing else in the app needs to change.
 */
export async function getPortfolio(): Promise<Portfolio> {
  return data as Portfolio;
}
