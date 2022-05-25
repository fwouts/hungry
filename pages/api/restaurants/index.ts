// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { RESTAURANT_LIST } from "../hardcoded-data";

export type RestaurantListResponse = {
  restaurants: RestaurantItem[];
};

export type RestaurantItem = {
  id: string;
  name: string;
  photoUrl: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RestaurantListResponse>
) {
  // Simulate waiting.
  await new Promise((resolve) => setTimeout(resolve, 300));

  res.status(200).json({
    restaurants: RESTAURANT_LIST,
  });
}
