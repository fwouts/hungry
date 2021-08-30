import { Restaurant } from "./models";

export const RESTAURANT_LIST: Restaurant[] = [
  {
    id: "chinese",
    name: "Chinese Noodle Shop",
    menu: [
      {
        id: "mapotofu",
        name: "Mapo Tofu",
      },
      {
        id: "test",
        name: "Some Test",
        photoUrl:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
  { id: "crepes", name: "Frankie's crêpe shop", menu: [] },
];
