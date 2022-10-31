import { ComponentStory } from "@storybook/react";
import { SearchHeader } from "./SearchHeader";

export default {
  title: "design/SearchHeader",
  component: SearchHeader,
};

export const Empty: ComponentStory<typeof SearchHeader> = {
  args: {
    search: "",
  },
};

export const Filled: ComponentStory<typeof SearchHeader> = {
  args: {
    search: "foo",
  },
};
