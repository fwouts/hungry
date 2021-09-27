import { ComponentStory } from "@storybook/react";
import React from "react";
import { RESTAURANT_LIST } from "../../data";
import { MenuPicker } from "./MenuPicker";

export default {
  title: "design/MenuPicker",
  component: MenuPicker,
};

const Template: ComponentStory<typeof MenuPicker> = (args) => (
  <MenuPicker {...args} />
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
