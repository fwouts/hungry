import { ComponentStory } from "@storybook/react";
import React from "react";
import { NoMatch } from "./NoMatch";

export default {
  title: "design/NoMatch",
  component: NoMatch,
};

const Template: ComponentStory<typeof NoMatch> = (args) => (
  <NoMatch {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: "No match",
};

export const ComplexChild = Template.bind({});
ComplexChild.args = {
  message: (
    <>
      No match for <b>"foo"</b>
    </>
  ),
};
