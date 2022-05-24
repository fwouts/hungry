import { setupPreviews } from "@previewjs/plugin-react/setup";
import { useAtom } from "jotai";
import { useMemo } from "react";
import { AppState } from "../../AppState";
import { RESTAURANT_LIST } from "../../data";
import { NoMatch } from "../../design/NoMatch/NoMatch";
import { RestaurantList } from "../../design/RestaurantList/RestaurantList";
import { SearchHeader } from "../../design/SearchHeader/SearchHeader";
import { RestaurantListPageState } from "./RestaurantListPageState";

export const RestaurantListPage = (props: { appState: AppState }) => {
  const state = useMemo(() => new RestaurantListPageState(props.appState), [
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

setupPreviews(RestaurantListPage, {
  example: {
    appState: new AppState(RESTAURANT_LIST),
  },
});
