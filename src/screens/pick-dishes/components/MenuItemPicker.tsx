import React from "react";
import { MenuItem } from "../../../models";
import { Counter } from "./Counter";

export const MenuItemPicker = ({
  menuItem,
  pickedItems,
  updateItem,
}: {
  menuItem: MenuItem;
  pickedItems: Record<string, number>;
  updateItem: UpdateItemFn;
}) => {
  const count = pickedItems[menuItem.id] || 0;
  const increaseCount = () => updateItem(menuItem.id, count + 1);
  const decreaseCount = () => updateItem(menuItem.id, count - 1);
  return (
    <div className="py-2 px-3 flex flex-row justify-between items-center select-none">
      <img
        className="h-16 w-16 cursor-pointer rounded-md object-cover"
        onClick={increaseCount}
        src={
          menuItem.photoUrl ||
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8f/jwfwAI1AOGKpHmUwAAAABJRU5ErkJggg=="
        }
      />
      <div
        className="py-3 px-2 flex-grow cursor-pointer"
        onClick={increaseCount}
      >
        {menuItem.name}
      </div>
      {count > 0 && (
        <Counter
          {...{
            count,
            increaseCount,
            decreaseCount,
          }}
        />
      )}
    </div>
  );
};

export type UpdateItemFn = (itemId: string, count: number) => void;
