import { setupPreviews } from "@previewjs/plugin-react/setup";
import { observer } from "mobx-react-lite";
import { useCallback, useMemo } from "react";
import { AppState } from "../../AppState";
import { RESTAURANT_LIST } from "../../data";
import { HeroHeader } from "../../design/HeroHeader/HeroHeader";
import { MenuPicker } from "../../design/MenuPicker/MenuPicker";
import { RestaurantDetailsPageState } from "./RestaurantDetailsPageState";

export const RestaurantDetailsPage = observer(
  (props: { appState: AppState; restaurantId: string }) => {
    const state = useMemo(
      () => new RestaurantDetailsPageState(props.appState, props.restaurantId),
      [props.appState, props.restaurantId]
    );
    const updateItem = useCallback(
      (itemId: string, count: number) => {
        state.updateItemCount(itemId, count);
      },
      [state]
    );

    const restaurant = state.restaurant;
    if (!restaurant) {
      return <>No restaurant with ID: {props.restaurantId}</>;
    }

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

setupPreviews(RestaurantDetailsPage, {
  example: {
    appState: new AppState(RESTAURANT_LIST),
    restaurantId: RESTAURANT_LIST[0].id,
  },
});
