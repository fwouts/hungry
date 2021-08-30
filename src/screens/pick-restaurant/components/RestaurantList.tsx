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
      className="pt-28 pb-6 px-3 cursor-pointer text-white text-xl filter hover:brightness-150 flex flex-row justify-between bg-no-repeat bg-cover bg-center"
      to={`/restaurants/${restaurant.id}`}
      style={{
        backgroundImage: `linear-gradient(hsla(0, 0%, 40%, 0.2), hsla(0, 0%, 0%, 0.4)), url('${restaurant.photoUrl}')`,
      }}
    >
      <div className="rounded-md bg-gray-600 bg-opacity-60 p-2">
        {restaurant.name}
      </div>
      <div className="w-6">
        <ChevronRightIcon />
      </div>
    </Link>
  );
};
