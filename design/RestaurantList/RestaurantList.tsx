import { setupPreviews } from "@previewjs/plugin-react/setup";
import React from "react";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";
import type { RestaurantItem } from "../../pages/api/restaurants";
import { RestaurantListItem } from "./RestaurantListItem";

export const RestaurantList = (props: {
  empty?: React.ReactNode;
  restaurantList: RestaurantItem[];
}) => {
  return (
    <div className="bg-white overflow-hidden">
      {props.restaurantList.length === 0 && props.empty}
      {props.restaurantList.map((restaurant) => (
        <RestaurantListItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

setupPreviews(RestaurantList, {
  example: {
    restaurantList: RESTAURANT_LIST,
  },
});
