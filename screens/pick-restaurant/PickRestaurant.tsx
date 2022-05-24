import { setupPreviews } from "@previewjs/plugin-react/setup";
import { useAtom } from "jotai";
import { useMemo } from "react";
import { AppState } from "../../AppState";
import { RESTAURANT_LIST } from "../../data";
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
    <>
      <SearchHeader search={search} updateSearch={setSearch} />
      <RestaurantList
        restaurantList={restaurantList}
        empty={
          <NoMatch
            message={
              search ? (
                <>
                  No restaurants match <b>&quot;{search}&quot;</b>
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

setupPreviews(PickRestaurant, {
  example: {
    appState: new AppState(RESTAURANT_LIST),
  },
});
