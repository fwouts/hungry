import { StoryObj } from "@storybook/react";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";
import { NoMatch } from "../NoMatch/NoMatch";
import { RestaurantList } from "./RestaurantList";

export default {
  title: "design/RestaurantList",
  component: RestaurantList,
};

export const Default: StoryObj<typeof RestaurantList> = {
  args: {
    restaurantList: RESTAURANT_LIST,
  },
};

export const Empty: StoryObj<typeof RestaurantList> = {
  args: {
    empty: <NoMatch message="No match" />,
    restaurantList: [],
  },
};
