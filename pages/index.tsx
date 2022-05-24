import type { NextPage } from "next";
import { useContext } from "react";
import { AppStateContext } from "../AppState";
import { RestaurantListPage } from "../screens/restaurant-list";

const Home: NextPage = () => {
  const state = useContext(AppStateContext);
  return <RestaurantListPage appState={state} />;
};

export default Home;
