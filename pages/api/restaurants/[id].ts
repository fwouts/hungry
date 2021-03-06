// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { RESTAURANT_LIST } from "../hardcoded-data";

export type RestaurantDetailsResponse = {
  id: string;
  name: string;
  photoUrl: string;
  menu: MenuItem[];
};

export interface MenuItem {
  id: string;
  name: string;
  photoUrl: string;
  unavailable?: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RestaurantDetailsResponse>
) {
  // Simulate waiting.
  await new Promise((resolve) => setTimeout(resolve, 500));

  const restaurant = RESTAURANT_LIST.find((r) => r.id === req.query["id"]);
  if (!restaurant) {
    return res.status(404).end();
  }
  res.status(200).json({
    ...restaurant,
    menu: restaurant.menu.filter((i) => !i.unavailable),
  });
}
