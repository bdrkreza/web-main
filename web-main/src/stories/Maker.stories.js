import React from "react";
import {MemoryRouter} from 'react-router-dom';
import ChooseByMaker from "@components/ChooseByMaker/chooseByMaker";

// import {
//     QueryClient,
//     QueryClientProvider,
//   } from "react-query"
//   import { ReactQueryDevtools } from "react-query/devtools"

export default {
  title: "Maker List",
  component: ChooseByMaker,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
};

const Template = (args) => <ChooseByMaker {...args} />;

export const Primary = Template.bind({});
  
Primary.args = {
};