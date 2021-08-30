import React from "react";
import { MenuItemPicker } from "./MenuItemPicker";

export const WithoutImage = () => (
  <MenuItemPicker
    menuItem={{
      id: "foo",
      name: "Foo",
    }}
    pickedItems={{}}
    updateItem={() => {}}
  />
);

export const WithImage = () => (
  <MenuItemPicker
    menuItem={{
      id: "foo",
      name: "Foo",
      photoUrl:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    }}
    pickedItems={{}}
    updateItem={() => {}}
  />
);

export const Picked = () => (
  <MenuItemPicker
    menuItem={{
      id: "foo",
      name: "Foo",
    }}
    pickedItems={{
      foo: 3,
    }}
    updateItem={() => {}}
  />
);
