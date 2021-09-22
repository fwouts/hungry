import { useAtom } from "jotai";
import React, { useMemo } from "react";
import { AppState, Restaurant } from "../../AppState";
import { NoMatch } from "../../design/NoMatch/NoMatch";
import { RestaurantList } from "../../design/RestaurantList/RestaurantList";
import { SearchHeader } from "../../design/SearchHeader/SearchHeader";
import { PickRestaurantState } from "./PickRestaurantState";

export const PickRestaurant = (props: { appState: AppState }) => {
  const state = useMemo(() => new PickRestaurantState(props.appState), [
    props.appState,
  ]);
  const [restaurantList] = useAtom(state.filteredRestaurantListAtom);
  const [search, setSearch] = useAtom(state.searchAtom);

  return (
    <PickRestaurantStateless
      {...{
        search,
        setSearch,
        restaurantList,
      }}
    />
  );
};

export const PickRestaurantStateless = (props: {
  search: string;
  restaurantList: Restaurant[];
  setSearch(search: string): void;
}) => {
  return (
    <>
      <SearchHeader search={props.search} updateSearch={props.setSearch} />
      <RestaurantList
        restaurantList={props.restaurantList}
        empty={
          <NoMatch
            message={
              props.search ? (
                <>
                  No restaurants match <b>"{props.search}"</b>
                </>
              ) : (
                <>No restaurants are available.</>
              )
            }
          />
        }
      />
    </>
  );
};
