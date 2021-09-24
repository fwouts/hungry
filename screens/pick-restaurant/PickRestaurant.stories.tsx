import React from "react";
import { AppState } from "../../AppState";
import { RESTAURANT_LIST } from "../../data";
import { PickRestaurant } from "./PickRestaurant";

export default {
  title: "screens/PickRestaurant",
  component: PickRestaurant,
};

export const Default = () => (
  <PickRestaurant appState={new AppState(RESTAURANT_LIST)} />
);
