import { useAtom } from "jotai";
import React, { useMemo } from "react";
import { AppState } from "../../AppState";
import { PickRestaurantState } from "./PickRestaurantState";
import { RestaurantList } from "./RestaurantList";
import { RestaurantSearchBar } from "./SearchBar";

export const PickRestaurant = (props: { appState: AppState }) => {
  const state = useMemo(
    () => new PickRestaurantState(props.appState),
    [props.appState]
  );
  const [restaurantList] = useAtom(state.filteredRestaurantListAtom);
  const [search] = useAtom(state.searchAtom);

  return (
    <>
      <h1 className="bg-red-600 text-white text-lg font-extralight pt-3 px-5">
        Pick a restaurant
      </h1>
      <div className="p-2 bg-gradient-to-b from-red-600 to-red-700">
        <RestaurantSearchBar state={state} />
      </div>
      <RestaurantList restaurantList={restaurantList} searchTerm={search} />
    </>
  );
};
