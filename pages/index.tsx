import type { NextPage } from "next";
import { useContext } from "react";
import { PickRestaurant } from "../screens/pick-restaurant/PickRestaurant";
import { AppStateContext } from "./_app";

const Home: NextPage = () => {
  const state = useContext(AppStateContext);
  return <PickRestaurant appState={state} />;
};

export default Home;
