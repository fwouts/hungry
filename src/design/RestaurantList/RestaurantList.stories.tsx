import { ComponentStory } from "@storybook/react";
import React from "react";
import { RESTAURANT_LIST } from "../../data";
import { NoMatch } from "../NoMatch/NoMatch";
import { RestaurantList } from "./RestaurantList";

export default {
  title: "design/RestaurantList",
  component: RestaurantList,
};

const Template: ComponentStory<typeof RestaurantList> = (args) => (
  <RestaurantList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  restaurantList: RESTAURANT_LIST,
};

export const Empty = Template.bind({});
Empty.args = {
  empty: <NoMatch message="No match" />,
  restaurantList: [],
};
