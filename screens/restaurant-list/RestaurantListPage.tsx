import {
  faExclamationCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setupPreviews } from "@previewjs/plugin-react/setup";
import { observer } from "mobx-react-lite";
import { useCallback, useMemo } from "react";
import { AppState } from "../../AppState";
import { NoMatch } from "../../design/NoMatch/NoMatch";
import { RestaurantList } from "../../design/RestaurantList/RestaurantList";
import { SearchHeader } from "../../design/SearchHeader/SearchHeader";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";
import { RestaurantListPageState } from "./RestaurantListPageState";

export const RestaurantListPage = observer(
  ({ appState }: { appState: AppState }) => {
    const state = useMemo(
      () => new RestaurantListPageState(appState),
      [appState]
    );
    const updateSearch = useCallback(
      (search: string) => state.setSearch(search),
      [state]
    );
    const search = state.search;

    if (appState.status.kind === "loading") {
      return (
        <div className="flex flex-row justify-center text-4xl p-12">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      );
    }

    if (appState.status.kind === "error") {
      return (
        <div className="flex flex-row justify-center items-center p-12 text-red-500">
          <FontAwesomeIcon icon={faExclamationCircle} />
          <span className="ml-2">An unexpected error occurred</span>
        </div>
      );
    }

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
  }
);

setupPreviews(RestaurantListPage, {
  example: {
    appState: new AppState(RESTAURANT_LIST),
  },
});
