import React from "react";
import { getMenuItemData } from "../../../data";
import { MenuPicker } from "./MenuPicker";

export const Menu = () => (
  <MenuPicker
    menu={[getMenuItemData("JD5"), getMenuItemData("JD7")]}
    pickedItems={{
      JD7: 2,
    }}
    updateItem={() => {}}
  />
);
