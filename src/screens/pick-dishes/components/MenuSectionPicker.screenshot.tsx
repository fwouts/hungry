import React from "react";
import { MenuSectionPicker } from "./MenuSectionPicker";

export const Section = () => (
  <MenuSectionPicker
    menuSection={{
      id: "section",
      title: "Section",
      items: [
        {
          id: "foo",
          name: "Foo",
        },
        {
          id: "bar",
          name: "Bar",
          photoUrl:
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        },
      ],
    }}
    pickedItems={{
      bar: 2,
    }}
    updateItem={() => {}}
  />
);
