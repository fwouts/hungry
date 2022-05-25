import { ComponentStory } from "@storybook/react";
import { getMenuItem } from "../../pages/api/hardcoded-data";
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
  menuItem: getMenuItem("JD4"),
  count: 0,
};

export const Picked = Template.bind({});
Picked.args = {
  menuItem: getMenuItem("JD4"),
  count: 3,
};
