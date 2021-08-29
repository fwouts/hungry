import { atom } from "jotai";

export class AppState {
  readonly restaurantList = atom<Restaurant[]>([
    {
      id: "chinese",
      name: "Chinese Noodle Shop",
      menu: [
        {
          id: "savoury",
          title: "Savoury",
          items: [
            {
              id: "mapotofu",
              name: "Mapo Tofu",
            },
            {
              id: "test",
              name: "Some Test",
              photoUrl:
                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            },
          ],
        },
      ],
    },
    { id: "crepes", name: "Frankie's crêpe shop", menu: [] },
  ]);
}

export interface Restaurant {
  id: string;
  name: string;
  menu: Menu;
}

export type Menu = MenuSection[];

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  photoUrl?: string;
}
