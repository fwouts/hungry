import { ChevronLeftIcon } from "@heroicons/react/outline";
import produce from "immer";
import { useAtom } from "jotai";
import React, { useCallback, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { AppState } from "../../AppState";
import { MenuPicker, UpdateItemFn } from "./MenuPicker";
import { PickDishesState } from "./PickDishesState";

export const PickDishes = (props: { appState: AppState }) => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const state = useMemo(
    () => new PickDishesState(props.appState, restaurantId),
    [props.appState, restaurantId]
  );
  const [restaurant] = useAtom(state.restaurantAtom);
  const [pickedItems, setPickedItems] = useAtom(state.pickedItems);
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
    <div className="p-4">
      <div className="container mx-auto rounded-xl overflow-hidden">
        <div className="bg-red-600 text-white text-lg font-extralight py-2 flex flex-row items-center">
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
      </div>
    </div>
  );
};
