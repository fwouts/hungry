import { preview } from "@reactpreview/config";
import produce from "immer";
import { useAtom } from "jotai";
import React, { useCallback, useMemo } from "react";
import { AppState, Restaurant } from "../../AppState";
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
    <PickDishesStateless
      {...{
        restaurant,
        pickedItems,
        updateItem,
      }}
    />
  );
};

preview(PickDishes, {
  example: {
    appState: new AppState(RESTAURANT_LIST),
    restaurantId: RESTAURANT_LIST[0].id,
  },
});

export const PickDishesStateless = (props: {
  restaurant: Restaurant;
  pickedItems: Record<string, number>;
  updateItem(itemId: string, count: number): void;
}) => {
  return (
    <>
      <HeroHeader
        title={props.restaurant.name}
        photoUrl={props.restaurant.photoUrl}
      />
      <MenuPicker
        items={props.restaurant.menu}
        pickedItems={props.pickedItems}
        onUpdateItem={props.updateItem}
      />
    </>
  );
};
