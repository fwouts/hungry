import React from "react";
import { AppState } from "../../AppState";
import { RESTAURANT_LIST } from "../../data";
import { PickDishes } from "./PickDishes";

export const Default = () => (
  <PickDishes appState={new AppState(RESTAURANT_LIST)} restaurantId="3" />
);
