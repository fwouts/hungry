import { Story } from "@storybook/react";
import React from "react";
import { Counter, CounterProps } from "./Counter";

export default {
  title: "design/Counter",
  component: Counter,
};

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Zero = Template.bind({});
Zero.args = {
  count: 0,
};

export const Positive = Template.bind({});
Positive.args = {
  count: 5,
};
