import React from "react";
import { RESTAURANT_LIST } from "../../../data";
import { NoRestaurantsFound } from "./NoRestaurantsFound";
import { RestaurantList } from "./RestaurantList";

export const Empty = () => {
  return (
    <RestaurantList
      restaurantList={[]}
      empty={<NoRestaurantsFound searchTerm="foo" />}
    />
  );
};

export const Populated = () => {
  return <RestaurantList restaurantList={RESTAURANT_LIST} />;
};
