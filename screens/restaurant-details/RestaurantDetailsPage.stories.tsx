import { AppState } from "../../AppState";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";
import { RestaurantDetailsPage } from "./RestaurantDetailsPage";
import { RestaurantDetailsPageState } from "./RestaurantDetailsPageState";

export default {
  title: "screens/RestaurantDetailsPage",
  component: RestaurantDetailsPage,
};

const appState = new AppState();
const state = new RestaurantDetailsPageState("1");
state.load(RESTAURANT_LIST[0]);

export const Default = () => (
  <RestaurantDetailsPage appState={appState} state={state} />
);
