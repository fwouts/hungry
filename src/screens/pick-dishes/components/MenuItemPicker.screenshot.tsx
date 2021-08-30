import React from "react";
import { getMenuItemData } from "../../../data";
import { MenuItemPicker } from "./MenuItemPicker";

export const Default = () => (
  <MenuItemPicker
    menuItem={getMenuItemData("JD4")}
    pickedItems={{}}
    updateItem={() => {}}
  />
);

export const Picked = () => (
  <MenuItemPicker
    menuItem={getMenuItemData("JD4")}
    pickedItems={{
      JD4: 3,
    }}
    updateItem={() => {}}
  />
);
