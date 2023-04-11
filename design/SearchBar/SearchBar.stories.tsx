import { StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

export default {
  title: "design/SearchBar",
  component: SearchBar,
};

export const Empty: StoryObj<typeof SearchBar> = {
  args: {
    search: "",
  },
};

export const Filled: StoryObj<typeof SearchBar> = {
  args: {
    search: "foo",
  },
};
