import React from "react";
import type { RestaurantItem } from "../../pages/api/restaurants";
import { RestaurantListItem } from "./RestaurantListItem";

export const RestaurantList = (props: {
  empty?: React.ReactNode;
  restaurantList: RestaurantItem[];
}) => {
  return (
    <div className="flex flex-col pt-2 gap-2 bg-white overflow-hidden">
      {props.restaurantList.length === 0 && props.empty}
      {props.restaurantList.map((restaurant) => (
        <RestaurantListItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
