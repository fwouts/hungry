import React from "react";
import { RestaurantSearchBar } from "./SearchBar";

export const Empty = () => (
  <RestaurantSearchBar search="" updateSearch={() => {}} />
);

export const Populated = () => (
  <RestaurantSearchBar search="foo bar" updateSearch={() => {}} />
);
