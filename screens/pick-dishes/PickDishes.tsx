import { setupPreviews } from "@previewjs/plugin-react/setup";
import produce from "immer";
import { useAtom } from "jotai";
import { useCallback, useMemo } from "react";
import { AppState } from "../../AppState";
import { RESTAURANT_LIST } from "../../data";
import { HeroHeader } from "../../design/HeroHeader/HeroHeader";
import { MenuPicker } from "../../design/MenuPicker/MenuPicker";
import { PickDishesState } from "./PickDishesState";

export const PickDishes = (props: {
  appState: AppState;
  restaurantId: string;
}) => {
  const state = useMemo(
    () => new PickDishesState(props.appState, props.restaurantId),
    [props.appState, props.restaurantId]
  );
  const [restaurant] = useAtom(state.restaurantAtom);
  const [pickedItems, setPickedItems] = useAtom(state.pickedItemsAtom);
  const updateItem = useCallback(
    (itemId: string, count: number) => {
      setPickedItems(
        produce((draft) => {
          if (count > 0) {
            draft[itemId] = count;
          } else {
            delete draft[itemId];
          }
        }, pickedItems)
      );
    },
    [pickedItems, setPickedItems]
  );

  if (!restaurant) {
    return <>No restaurant with ID: {props.restaurantId}</>;
  }

  return (
    <>
      <HeroHeader title={restaurant.name} photoUrl={restaurant.photoUrl} />
      <MenuPicker
        items={restaurant.menu}
        pickedItems={pickedItems}
        onUpdateItem={updateItem}
      />
    </>
  );
};

setupPreviews(PickDishes, {
  example: {
    appState: new AppState(RESTAURANT_LIST),
    restaurantId: RESTAURANT_LIST[0].id,
  },
});
