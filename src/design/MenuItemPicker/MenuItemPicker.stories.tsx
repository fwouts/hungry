import { ComponentStory } from "@storybook/react";
import React from "react";
import { getMenuItemData } from "../../data";
import { MenuItemPicker } from "./MenuItemPicker";

export default {
  title: "design/MenuItemPicker",
  component: MenuItemPicker,
};

const Template: ComponentStory<typeof MenuItemPicker> = (args) => (
  <MenuItemPicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  menuItem: getMenuItemData("JD4"),
  count: 0,
};

export const Picked = Template.bind({});
Picked.args = {
  menuItem: getMenuItemData("JD4"),
  count: 3,
};
