import { Button } from "./Button";

export default {
  title: "design/Button",
  component: Button,
};

export const Default = {
  args: {
    children: "Example",
  },
};

export const Success = {
  args: {
    type: "success",
    children: "Success",
  },
};

export const Error = {
  args: {
    type: "error",
    children: "Error",
  },
};

export const Large = {
  args: {
    size: "large",
    children: "Large button",
  },
};

export const Small = {
  args: {
    size: "small",
    children: "Small button",
  },
};
