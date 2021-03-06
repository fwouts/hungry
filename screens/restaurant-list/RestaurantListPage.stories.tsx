import { AppState } from "../../AppState";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";
import { RestaurantListPage } from "./RestaurantListPage";

export default {
  title: "screens/RestaurantListPage",
  component: RestaurantListPage,
};

export const Default = () => (
  <RestaurantListPage appState={new AppState(RESTAURANT_LIST)} />
);
