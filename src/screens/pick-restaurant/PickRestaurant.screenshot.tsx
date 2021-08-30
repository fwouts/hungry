import React from "react";
import { AppState } from "../../AppState";
import { RESTAURANT_LIST } from "../../data";
import { type } from "../../testing/type";
import { PickRestaurant } from "./PickRestaurant";

export const Default = () => (
  <PickRestaurant appState={new AppState(RESTAURANT_LIST)} />
);

export const EmptySearch = () => (
  <PickRestaurant appState={new AppState(RESTAURANT_LIST)} />
);
EmptySearch.beforeScreenshot = async (element: HTMLElement) => {
  const searchInput = element.querySelector<HTMLInputElement>("#search")!;
  type(searchInput, "no match");
};
