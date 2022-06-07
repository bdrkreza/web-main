import React from "react";
import BDMap from "@components/LocationSearchUI/BDMap";

export default {
  title: "Map/BD Map",
  component: BDMap,
};

const Template = (args) => <BDMap {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

