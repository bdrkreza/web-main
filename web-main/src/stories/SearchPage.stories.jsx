import React from "react";
import FilteredSearchPage from "@pages/SearchPage/FilteredSearchPage";
import MakerModelList from "@pages/SearchPage/MakerModelList";
// import Transmission from "@pages/SearchPage/Transmission";
// import Mileage from "@pages/SearchPage/Mileage";
// import Engine from "@pages/SearchPage/Engine";
// import Seating from "@pages/SearchPage/Seating";
// // import Fuel from "@pages/SearchPage/Fuel";
// import Body from "@pages/SearchPage/Body";
// import Price from "@pages/SearchPage/Price";


import {
  QueryClient,
  QueryClientProvider,
} from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

export default {
  title: "Search/Search Page with Filter",
  component: FilteredSearchPage
};

const queryClient = new QueryClient()
const TemplateSearchPage = (args) => 
  <QueryClientProvider client={queryClient}>
    <FilteredSearchPage {...args} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  ;

export const AllCars = TemplateSearchPage.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AllCars.args = {
  dataUrl: "https://api-a.bhalogari.com/api/cars/all"
};

export const FeaturedCars = TemplateSearchPage.bind({});
FeaturedCars.args = {
  dataUrl: "https://backend.bhalogari.com/api/cars/search-featured-car/?car_type=recondition&car_featured=False"
};

const TemplateMakerModelList = (args) => 
  <QueryClientProvider client={queryClient}>
    <MakerModelList {...args} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  ;

export const MakerModelComponent = TemplateMakerModelList.bind({});
// MakerModelComponent.args = {
//   dataUrl: "https://api-a.bhalogari.com/api/cars/models/"
// };
// const TemplateTransmission = (args) => 
//    <QueryClientProvider client={queryClient}>
//        <Transmission {...args}/>
//        <ReactQueryDevtools initialIsOpen={false} />
//    </QueryClientProvider>
// ;


// export const TransmissionTypes = TemplateTransmission.bind({});

// Mileage
// const TemplateMileage = (args) => 
//   <QueryClientProvider client={queryClient}>
//     <Mileage {...args}/>
//     <ReactQueryDevtools initialIsOpen={false} />
//   </QueryClientProvider>
// ;

// export const MileageTypes = TemplateMileage.bind({});

// Engine
// const TemplateEngine = (args) => 
//     <QueryClientProvider client={queryClient}>
//       <Engine {...args}/>
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
// ;

// export const EngineTypes = TemplateEngine.bind({});

//Seating
// const TemplateSeating = (args) => 
//     <QueryClientProvider client={queryClient}>
//       <Seating {...args}/>
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
// ;

// export const SeatingTypes = TemplateSeating.bind({});

//  Fuel
// const TemplateFuel = (args) => 
//     <QueryClientProvider client={queryClient}>
//       <Fuel {...args}/>
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
// ;

// export const FuelTypes = TemplateFuel.bind({});

// Body
// const TemplateBody = (args) => 
//   <QueryClientProvider client={queryClient}>
//     <Body {...args}/>
//     <ReactQueryDevtools initialIsOpen={false} />
//   </QueryClientProvider>
// ;

// export const BodyTypes = TemplateBody.bind({});
// BodyTypes.args = {
//   dataUrl: "https://backend.bhalogari.com/api/cars/body-type/"
// };

// Price
// const TemplatePrice = (args) => 
//   <QueryClientProvider client={queryClient}>
//     <Price {...args}/>
//     <ReactQueryDevtools initialIsOpen={false} />
// </QueryClientProvider>
// ;

// export const PriceTypes = TemplatePrice.bind({});