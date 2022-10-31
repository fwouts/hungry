import { ComponentStory } from "@storybook/react";
import { MENU_ITEM_STRAWBERRY_CUPCAKES } from "../testing/fixtures";
import { RestaurantMenuItem } from "./RestaurantMenuItem";

export default {
  title: "design/RestaurantMenuItem",
  component: RestaurantMenuItem,
};

export const Default: ComponentStory<typeof RestaurantMenuItem> = {
  args: {
    menuItem: MENU_ITEM_STRAWBERRY_CUPCAKES,
    count: 0,
  },
};

export const Picked: ComponentStory<typeof RestaurantMenuItem> = {
  args: {
    menuItem: MENU_ITEM_STRAWBERRY_CUPCAKES,
    count: 3,
  },
};
