import { Atom, atom } from "jotai";
import { MenuItem } from "./design/MenuItemPicker/MenuItem";

export class AppState {
  readonly restaurantList: Atom<Restaurant[]>;

  constructor(restaurantList: Restaurant[]) {
    this.restaurantList = atom(restaurantList);
  }
}

export interface Restaurant {
  id: string;
  name: string;
  photoUrl: string;
  menu: MenuItem[];
}
