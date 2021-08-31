import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { getMenuItemData } from "../../../data";
import { MenuItemPicker } from "./MenuItemPicker";

export default {
  title: "MenuItemPicker",
  component: MenuItemPicker,
} as ComponentMeta<typeof MenuItemPicker>;

const Template: ComponentStory<typeof MenuItemPicker> = (args) => (
  <MenuItemPicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  menuItem: getMenuItemData("JD4"),
  pickedItems: {},
};

export const Picked = Template.bind({});
Picked.args = {
  menuItem: getMenuItemData("JD4"),
  pickedItems: {
    JD4: 3,
  },
};
