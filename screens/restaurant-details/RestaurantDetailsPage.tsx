import {
  faExclamationCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setupPreviews } from "@previewjs/plugin-react/setup";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { AppState } from "../../AppState";
import { HeroHeader } from "../../design/HeroHeader/HeroHeader";
import { MenuPicker } from "../../design/MenuPicker/MenuPicker";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";
import { RestaurantDetailsPageState } from "./RestaurantDetailsPageState";

export const RestaurantDetailsPage = observer(
  ({
    appState,
    state,
  }: {
    appState: AppState;
    state: RestaurantDetailsPageState;
  }) => {
    const updateItem = useCallback(
      (itemId: string, count: number) => {
        state.updateItemCount(itemId, count);
      },
      [state]
    );

    if (state.status.kind === "error") {
      return (
        <div className="flex flex-row justify-center items-center p-12 text-red-500">
          <FontAwesomeIcon icon={faExclamationCircle} />
          <span className="ml-2">An unexpected error occurred</span>
        </div>
      );
    }

    if (state.status.kind === "loading") {
      const restaurantItem = appState.status.restaurantList?.find(
        (r) => r.id === state.restaurantId
      );
      if (restaurantItem) {
        return (
          <>
            <HeroHeader
              title={restaurantItem.name}
              photoUrl={restaurantItem.photoUrl}
            />
            <div className="bg-gray-50 flex flex-row justify-center text-4xl p-12">
              <FontAwesomeIcon icon={faSpinner} spin />
            </div>
          </>
        );
      }
      return (
        <div className="flex flex-row justify-center text-4xl p-12">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      );
    }

    const restaurant = state.status.restaurant;

    return (
      <>
        <HeroHeader title={restaurant.name} photoUrl={restaurant.photoUrl} />
        <MenuPicker
          items={restaurant.menu}
          pickedItems={state.pickedItems}
          onUpdateItem={updateItem}
        />
      </>
    );
  }
);

setupPreviews(RestaurantDetailsPage, () => {
  const state = new RestaurantDetailsPageState("1");
  state.load(RESTAURANT_LIST[0]);
  return {
    example: {
      appState: new AppState(),
      state,
    },
  };
});
