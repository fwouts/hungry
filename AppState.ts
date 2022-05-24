import { Atom, atom } from "jotai";
import React from "react";
import { RestaurantData } from "./models";

export class AppState {
  readonly restaurantList: Atom<RestaurantData[]>;

  constructor(restaurantList: RestaurantData[]) {
    this.restaurantList = atom(restaurantList);
  }
}

export const AppStateContext = React.createContext<AppState>(null! as AppState);
