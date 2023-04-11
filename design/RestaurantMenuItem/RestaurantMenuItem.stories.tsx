import { StoryObj } from "@storybook/react";
import { MENU_ITEM_STRAWBERRY_CUPCAKES } from "../testing/fixtures";
import { RestaurantMenuItem } from "./RestaurantMenuItem";

export default {
  title: "design/RestaurantMenuItem",
  component: RestaurantMenuItem,
};

export const Default: StoryObj<typeof RestaurantMenuItem> = {
  args: {
    menuItem: MENU_ITEM_STRAWBERRY_CUPCAKES,
    count: 0,
  },
};

export const Picked: StoryObj<typeof RestaurantMenuItem> = {
  args: {
    menuItem: MENU_ITEM_STRAWBERRY_CUPCAKES,
    count: 3,
  },
};
