import {
  faExclamationCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { AppState } from "../../AppState";
import { RestaurantHeader } from "../../design/RestaurantHeader/RestaurantHeader";
import { RestaurantMenu } from "../../design/RestaurantMenu/RestaurantMenu";
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
            <RestaurantHeader
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
        <RestaurantHeader
          title={restaurant.name}
          photoUrl={restaurant.photoUrl}
        />
        <RestaurantMenu
          items={restaurant.menu}
          pickedItems={state.pickedItems}
          onUpdateItem={updateItem}
        />
      </>
    );
  }
);
