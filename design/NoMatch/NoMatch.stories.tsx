import { ComponentStory } from "@storybook/react";
import { NoMatch } from "./NoMatch";

export default {
  title: "design/NoMatch",
  component: NoMatch,
};

export const Default: ComponentStory<typeof NoMatch> = {
  args: {
    message: "No match",
  },
};

export const ComplexChild: ComponentStory<typeof NoMatch> = {
  args: {
    message: (
      <>
        No match for <b>"foo"</b>
      </>
    ),
  },
};
