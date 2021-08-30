import { ChevronLeftIcon } from "@heroicons/react/outline";
import produce from "immer";
import { useAtom } from "jotai";
import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { AppState } from "../../AppState";
import { UpdateItemFn } from "./components/MenuItemPicker";
import { MenuPicker } from "./components/MenuPicker";
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
  const updateItem = useCallback<UpdateItemFn>(
    (itemId, count) => {
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

  return (
    <>
      <div
        className="text-white text-lg pt-4 pb-32 flex flex-row items-center bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(hsla(0, 0%, 40%, 0.2), hsla(0, 0%, 0%, 0.4)), url('${restaurant.photoUrl}')`,
        }}
      >
        <Link to="/" className="w-10 px-2">
          <ChevronLeftIcon />
        </Link>
        <h1>{restaurant.name}</h1>
      </div>
      <MenuPicker
        menu={restaurant.menu}
        pickedItems={pickedItems}
        updateItem={updateItem}
      />
    </>
  );
};
