import { makeAutoObservable } from "mobx";
import React from "react";
import { RestaurantData } from "./models";

export class AppState {
  constructor(readonly restaurantList: RestaurantData[]) {
    makeAutoObservable(this);
  }
}

export const AppStateContext = React.createContext<AppState>(null! as AppState);
