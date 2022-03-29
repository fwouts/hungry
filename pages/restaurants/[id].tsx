import { setupPreviews } from "@previewjs/plugin-react/setup";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppStateContext } from "../../AppState";
import { RESTAURANT_LIST } from "../../data";
import { PickDishes } from "../../screens/pick-dishes/PickDishes";

const RestaurantPage: NextPage<{
  restaurantId: string;
}> = (props) => {
  const state = useContext(AppStateContext);
  const router = useRouter();
  let restaurantId: string;
  if (router) {
    const { id } = router.query;
    if (typeof id !== "string") {
      throw new Error(`Invalid restaurant ID: ${id}`);
    }
    restaurantId = id;
  } else {
    ({ restaurantId } = props);
  }
  return <PickDishes appState={state} restaurantId={restaurantId} />;
};

setupPreviews(RestaurantPage, {
  default: {
    restaurantId: RESTAURANT_LIST[0].id,
  },
});

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const restaurantId = params?.id;
  return {
    props: {
      restaurantId,
    },
  };
};

export default RestaurantPage;
