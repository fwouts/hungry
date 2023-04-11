import { StoryObj } from "@storybook/react";
import { Counter, CounterProps } from "./Counter";

export default {
  title: "design/Counter",
  component: Counter,
};

export const Zero: StoryObj<CounterProps> = {
  args: {
    count: 0,
  },
};

export const Positive: StoryObj<CounterProps> = {
  args: {
    count: 5,
  },
};
