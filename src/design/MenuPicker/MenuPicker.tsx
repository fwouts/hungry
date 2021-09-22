import React from "react";
import { MenuItem } from "../MenuItemPicker/MenuItem";
import { MenuItemPicker } from "../MenuItemPicker/MenuItemPicker";

export const MenuPicker = ({
  items,
  pickedItems,
  onUpdateItem,
}: {
  items: MenuItem[];
  pickedItems: Record<string, number>;
  onUpdateItem(itemId: string, count: number): void;
}) => {
  return (
    <div className="bg-red-100 p-2">
      <div className="bg-white rounded-lg overflow-hidden">
        {items.map((item) => (
          <MenuItemPicker
            key={item.id}
            menuItem={item}
            count={pickedItems[item.id] || 0}
            onUpdate={(count) => onUpdateItem(item.id, count)}
          />
        ))}
      </div>
    </div>
  );
};
