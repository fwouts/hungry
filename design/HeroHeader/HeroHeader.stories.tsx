import { Story } from "@storybook/react";
import { RESTAURANT_LIST } from "../../pages/api/hardcoded-data";
import { HeroHeader, HeroHeaderProps } from "./HeroHeader";

export default {
  title: "design/HeroHeader",
  component: HeroHeader,
};

const Template: Story<HeroHeaderProps> = (args) => <HeroHeader {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: "Restaurant name",
  photoUrl: RESTAURANT_LIST[0].photoUrl,
};
