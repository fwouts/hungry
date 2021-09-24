import { Atom, atom } from "jotai";
import React from "react";
import { MenuItem } from "./design/MenuItemPicker/MenuItem";

export class AppState {
  readonly restaurantList: Atom<Restaurant[]>;

  constructor(restaurantList: Restaurant[]) {
    this.restaurantList = atom(restaurantList);
  }
}

export const AppStateContext = React.createContext<AppState>(null! as AppState);

export interface Restaurant {
  id: string;
  name: string;
  photoUrl: string;
  menu: MenuItem[];
}
