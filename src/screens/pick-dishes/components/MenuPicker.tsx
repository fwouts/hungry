import React from "react";
import { Menu } from "../../../models";
import { UpdateItemFn } from "./MenuItemPicker";
import { MenuSectionPicker } from "./MenuSectionPicker";

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
      {menu.map((menuSection) => (
        <MenuSectionPicker
          key={menuSection.id}
          menuSection={menuSection}
          pickedItems={pickedItems}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
};
