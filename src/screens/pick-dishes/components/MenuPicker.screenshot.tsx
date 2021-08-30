import React from "react";
import { MenuPicker } from "./MenuPicker";

export const Menu = () => (
  <MenuPicker
    menu={[
      {
        id: "section1",
        title: "Section 1",
        items: [
          {
            id: "foo",
            name: "Foo",
          },
        ],
      },
      {
        id: "section2",
        title: "Section 2",
        items: [
          {
            id: "bar",
            name: "Bar",
            photoUrl:
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
          },
        ],
      },
    ]}
    pickedItems={{
      bar: 2,
    }}
    updateItem={() => {}}
  />
);
