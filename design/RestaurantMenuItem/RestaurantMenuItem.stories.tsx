import { ComponentStory } from "@storybook/react";
import { MENU_ITEM_STRAWBERRY_CUPCAKES } from "../testing/fixtures";
import { RestaurantMenuItem } from "./RestaurantMenuItem";

export default {
  title: "design/RestaurantMenuItem",
  component: RestaurantMenuItem,
};

const Template: ComponentStory<typeof RestaurantMenuItem> = (args) => (
  <RestaurantMenuItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  menuItem: MENU_ITEM_STRAWBERRY_CUPCAKES,
  count: 0,
};

export const Picked = Template.bind({});
Picked.args = {
  menuItem: MENU_ITEM_STRAWBERRY_CUPCAKES,
  count: 3,
};
