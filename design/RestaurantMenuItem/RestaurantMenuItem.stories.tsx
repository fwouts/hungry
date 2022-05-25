import { ComponentStory } from "@storybook/react";
import { getMenuItem } from "../../pages/api/hardcoded-data";
import { RestaurantMenuItem } from "./RestaurantMenuItem";

export default {
  title: "design/MenuItemPicker",
  component: RestaurantMenuItem,
};

const Template: ComponentStory<typeof RestaurantMenuItem> = (args) => (
  <RestaurantMenuItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  menuItem: getMenuItem("JD4"),
  count: 0,
};

export const Picked = Template.bind({});
Picked.args = {
  menuItem: getMenuItem("JD4"),
  count: 3,
};
