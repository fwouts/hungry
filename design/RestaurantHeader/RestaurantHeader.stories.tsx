import { Story } from "@storybook/react";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";
import { RestaurantHeader, RestaurantHeaderProps } from "./RestaurantHeader";

export default {
  title: "design/RestaurantHeader",
  component: RestaurantHeader,
};

const Template: Story<RestaurantHeaderProps> = (args) => (
  <RestaurantHeader {...args} />
);

export const Example = Template.bind({});
Example.args = {
  title: "Restaurant name",
  photoUrl: RESTAURANT_LIST[0].photoUrl,
};
