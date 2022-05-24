import { setupPreviews } from "@previewjs/plugin-react/setup";
import { observer } from "mobx-react-lite";
import { useCallback, useMemo } from "react";
import { AppState } from "../../AppState";
import { RESTAURANT_LIST } from "../../data";
import { NoMatch } from "../../design/NoMatch/NoMatch";
import { RestaurantList } from "../../design/RestaurantList/RestaurantList";
import { SearchHeader } from "../../design/SearchHeader/SearchHeader";
import { RestaurantListPageState } from "./RestaurantListPageState";

export const RestaurantListPage = observer((props: { appState: AppState }) => {
  const state = useMemo(
    () => new RestaurantListPageState(props.appState),
    [props.appState]
  );
  const updateSearch = useCallback(
    (search: string) => state.setSearch(search),
    [state]
  );
  const search = state.search;

  return (
    <>
      <SearchHeader search={search} updateSearch={updateSearch} />
      <RestaurantList
        restaurantList={state.filteredRestaurantList}
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
});

setupPreviews(RestaurantListPage, {
  example: {
    appState: new AppState(RESTAURANT_LIST),
  },
});
