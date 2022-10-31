import { Story } from "@storybook/react";
import { Counter, CounterProps } from "./Counter";

export default {
  title: "design/Counter",
  component: Counter,
};

export const Zero: Story<CounterProps> = {
  args: {
    count: 0,
  },
};

export const Positive: Story<CounterProps> = {
  args: {
    count: 5,
  },
};
