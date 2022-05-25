import type { GetServerSideProps, NextPage } from "next";
import { useContext, useMemo } from "react";
import { AppStateContext } from "../../AppState";
import { RestaurantDetailsPage } from "../../screens/restaurant-details";
import { RestaurantDetailsPageState } from "../../screens/restaurant-details/RestaurantDetailsPageState";

const RestaurantPage: NextPage<{
  restaurantId: string;
}> = ({ restaurantId }) => {
  const appState = useContext(AppStateContext);
  const state = useMemo(() => {
    const state = new RestaurantDetailsPageState(restaurantId);
    state.load();
    return state;
  }, [restaurantId]);
  return <RestaurantDetailsPage appState={appState} state={state} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const restaurantId = params?.id;
  return {
    props: {
      restaurantId,
    },
  };
};

export default RestaurantPage;
