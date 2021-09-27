import type { NextPage } from "next";
import { useContext } from "react";
import { AppStateContext } from "../AppState";
import { PickRestaurant } from "../screens/pick-restaurant/PickRestaurant";

const Home: NextPage = () => {
  const state = useContext(AppStateContext);
  return <PickRestaurant appState={state} />;
};

export default Home;
