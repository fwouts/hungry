import { AppState } from "../../AppState";
import { RESTAURANT_LIST } from "../../data";
import { RestaurantDetailsPage } from "./RestaurantDetailsPage";

export default {
  title: "screens/RestaurantDetailsPage",
  component: RestaurantDetailsPage,
};

export const Default = () => (
  <RestaurantDetailsPage
    appState={new AppState(RESTAURANT_LIST)}
    restaurantId="3"
  />
);
