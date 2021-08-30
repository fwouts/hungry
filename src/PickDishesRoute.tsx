import React from "react";
import { useParams } from "react-router-dom";
import { AppState } from "./AppState";
import { PickDishes } from "./screens/pick-dishes/PickDishes";

export const PickDishesRoute = (props: { appState: AppState }) => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  return <PickDishes {...props} restaurantId={restaurantId} />;
};
