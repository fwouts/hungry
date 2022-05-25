import { ComponentStory } from "@storybook/react";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";
import { RestaurantMenu } from "./RestaurantMenu";

export default {
  title: "design/MenuPicker",
  component: RestaurantMenu,
};

const Template: ComponentStory<typeof RestaurantMenu> = (args) => (
  <RestaurantMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: RESTAURANT_LIST[0].menu,
  pickedItems: {},
};

export const Picked = Template.bind({});
Picked.args = {
  items: RESTAURANT_LIST[0].menu,
  pickedItems: {
    M1: 1,
    M2: 3,
  },
};
