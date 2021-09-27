import { ComponentStory } from "@storybook/react";
import React from "react";
import { SearchBar } from "./SearchBar";

export default {
  title: "design/SearchBar",
  component: SearchBar,
};

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  search: "",
};

export const Filled = Template.bind({});
Filled.args = {
  search: "foo",
};
