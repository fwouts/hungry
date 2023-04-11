import { StoryObj } from "@storybook/react";
import { SearchHeader } from "./SearchHeader";

export default {
  title: "design/SearchHeader",
  component: SearchHeader,
};

export const Empty: StoryObj<typeof SearchHeader> = {
  args: {
    search: "",
  },
};

export const Filled: StoryObj<typeof SearchHeader> = {
  args: {
    search: "foo",
  },
};
