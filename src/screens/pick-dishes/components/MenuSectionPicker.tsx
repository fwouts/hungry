import React from "react";
import { MenuSection } from "../../../models";
import { MenuItemPicker, UpdateItemFn } from "./MenuItemPicker";

export const MenuSectionPicker = ({
  menuSection,
  pickedItems,
  updateItem,
}: {
  menuSection: MenuSection;
  pickedItems: Record<string, number>;
  updateItem: UpdateItemFn;
}) => {
  return (
    <>
      <h2 className="text-red-800 py-2 px-3">{menuSection.title}</h2>
      <div className="bg-white rounded-lg overflow-hidden">
        {menuSection.items.map((menuItem) => (
          <MenuItemPicker
            key={menuItem.id}
            menuItem={menuItem}
            pickedItems={pickedItems}
            updateItem={updateItem}
          />
        ))}
      </div>
    </>
  );
};
