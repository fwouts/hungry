import { StoryObj } from "@storybook/react";
import { NoMatch } from "./NoMatch";

export default {
  title: "design/NoMatch",
  component: NoMatch,
};

export const Default: StoryObj<typeof NoMatch> = {
  args: {
    message: "No match",
  },
};

export const ComplexChild: StoryObj<typeof NoMatch> = {
  args: {
    message: (
      <>
        No match for <b>"foo"</b>
      </>
    ),
  },
};
