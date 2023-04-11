import { StoryObj } from "@storybook/react";
import {
  MENU_ITEM_DUMPLINGS,
  MENU_ITEM_KUNG_PAO_CHICKEN,
  MENU_ITEM_STRAWBERRY_CUPCAKES,
} from "../testing/fixtures";
import { RestaurantMenu } from "./RestaurantMenu";

export default {
  title: "design/RestaurantMenu",
  component: RestaurantMenu,
};

export const Default: StoryObj<typeof RestaurantMenu> = {
  args: {
    items: [
      MENU_ITEM_DUMPLINGS,
      MENU_ITEM_KUNG_PAO_CHICKEN,
      MENU_ITEM_STRAWBERRY_CUPCAKES,
    ],
    pickedItems: {},
  },
};

export const Picked: StoryObj<typeof RestaurantMenu> = {
  args: {
    items: [
      MENU_ITEM_DUMPLINGS,
      MENU_ITEM_KUNG_PAO_CHICKEN,
      MENU_ITEM_STRAWBERRY_CUPCAKES,
    ],
    pickedItems: {
      [MENU_ITEM_DUMPLINGS.id]: 3,
      [MENU_ITEM_STRAWBERRY_CUPCAKES.id]: 1,
    },
  },
};
