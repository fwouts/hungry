import { ComponentStory } from "@storybook/react";
import { MENU_ITEM } from "../testing/fixtures";
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
  menuItem: MENU_ITEM,
  count: 0,
};

export const Picked = Template.bind({});
Picked.args = {
  menuItem: MENU_ITEM,
  count: 3,
};
