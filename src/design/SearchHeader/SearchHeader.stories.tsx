import { ComponentStory } from "@storybook/react";
import React from "react";
import { SearchHeader } from "./SearchHeader";

export default {
  title: "design/SearchHeader",
  component: SearchHeader,
};

const Template: ComponentStory<typeof SearchHeader> = (args) => (
  <SearchHeader {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  search: "",
};

export const Filled = Template.bind({});
Filled.args = {
  search: "foo",
};
