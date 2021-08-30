import { Atom, atom } from "jotai";
import { Restaurant } from "./models";

export class AppState {
  readonly restaurantList: Atom<Restaurant[]>;

  constructor(restaurantList: Restaurant[]) {
    this.restaurantList = atom(restaurantList);
  }
}
