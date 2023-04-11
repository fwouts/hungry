import { StoryObj } from "@storybook/react";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";
import { RestaurantHeader, RestaurantHeaderProps } from "./RestaurantHeader";

export default {
  title: "design/RestaurantHeader",
  component: RestaurantHeader,
};

export const Example: StoryObj<RestaurantHeaderProps> = {
  args: {
    title: "Restaurant name",
    photoUrl: RESTAURANT_LIST[0].photoUrl,
  },
};
