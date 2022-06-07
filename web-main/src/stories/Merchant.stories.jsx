import React from "react";

import MerchantPage from "pages/MerchantPage/MerchantPage";

export default {
    title: "Merchant Page/Merchant",
    component: MerchantPage,
  };

  const Template = (args) => <MerchantPage {...args} />;

  export const Primary = Template.bind({});

Primary.args = {
};