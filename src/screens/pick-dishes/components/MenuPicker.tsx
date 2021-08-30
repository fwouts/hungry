import React from "react";
import { Menu } from "../../../models";
import { MenuItemPicker, UpdateItemFn } from "./MenuItemPicker";

export const MenuPicker = ({
  menu,
  pickedItems,
  updateItem,
}: {
  menu: Menu;
  pickedItems: Record<string, number>;
  updateItem: UpdateItemFn;
}) => {
  return (
    <div className="bg-red-100 p-2">
      <div className="bg-white rounded-lg overflow-hidden">
        {menu.map((menuItem) => (
          <MenuItemPicker
            key={menuItem.id}
            menuItem={menuItem}
            pickedItems={pickedItems}
            updateItem={updateItem}
          />
        ))}
      </div>
    </div>
  );
};
