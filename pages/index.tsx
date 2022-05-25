import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { AppStateContext } from "../AppState";
import { RestaurantListPage } from "../screens/restaurant-list";

const Home: NextPage = () => {
  const state = useContext(AppStateContext);
  useEffect(() => {
    state.load();
  }, [state]);
  return <RestaurantListPage appState={state} />;
};

export default Home;
