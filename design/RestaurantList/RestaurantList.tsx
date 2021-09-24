import { ChevronRightIcon } from "@heroicons/react/outline";
import { preview } from "@reactpreview/config";
import Link from "next/link";
import React from "react";
import { RESTAURANT_LIST } from "../../data";
import { RestaurantItem } from "./RestaurantItem";

export const RestaurantList = (props: {
  empty?: React.ReactNode;
  restaurantList: RestaurantItem[];
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

preview(RestaurantList, {
  example: {
    restaurantList: RESTAURANT_LIST,
  },
});

const RestaurantListItem = ({ restaurant }: { restaurant: RestaurantItem }) => {
  return (
    <Link href={`/restaurants/${restaurant.id}`}>
      <a
        className="pt-28 pb-6 px-3 cursor-pointer text-white text-xl filter hover:brightness-150 flex flex-row justify-between bg-no-repeat bg-cover bg-center"
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
      </a>
    </Link>
  );
};
