import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import { Restaurant } from "../../../models";

export const RestaurantList = (props: {
  empty?: React.ReactNode;
  restaurantList: Restaurant[];
}) => {
  return (
    <div className="bg-red-100 p-2">
      <h2 className="text-red-800 py-2 px-3">Restaurants</h2>
      <div className="bg-white rounded-lg overflow-hidden">
        {props.restaurantList.length === 0 && props.empty}
        {props.restaurantList.map((restaurant) => (
          <RestaurantListItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

const RestaurantListItem = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <Link
      className="py-2 px-3 cursor-pointer text-black hover:bg-red-50 hover:text-red-800 flex flex-row justify-between"
      to={`/restaurants/${restaurant.id}`}
    >
      <div>{restaurant.name}</div>
      <div className="w-6">
        <ChevronRightIcon />
      </div>
    </Link>
  );
};
