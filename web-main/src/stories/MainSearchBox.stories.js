import React from "react";
import SearchBox from "@components/SearchBox";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";

export default {
  title: "Search Box/Main Search Box",
  component: SearchBox,
};

const queryClient = new QueryClient();
const Template = (args) => (
  <QueryClientProvider client={queryClient}>
    <SearchBox {...args} />
  </QueryClientProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
