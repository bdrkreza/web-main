import React, { createContext, useEffect, useState } from "react";
import Wrapper from "./containers/Wrapper";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Routes from "./routes";
import "./index.css";
import "./styles/index.less";
import ScrollToTop from "./components/ScrollToTop";
import { SearchContext } from "context/SearchContext";
const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

function App() {
  const [keywords, setKeywords] = useState("");

  const localStorageList = localStorage.getItem("serviceList");
  const locatStorageItemCount = localStorage.getItem("totalCount");
  const localStorageTotalPrice = localStorage.getItem("totalPrice");
  const [serviceList, setServiceList] = useState(
    localStorageList ? (localStorageList.length > 0 ? JSON.parse(localStorageList) : []) : []
  );
  const [totalCount, setTotalCount] = useState(locatStorageItemCount ? parseInt(locatStorageItemCount) : 0);
  const [totalPrice, setTotalPrice] = useState(localStorageTotalPrice ? parseFloat(localStorageTotalPrice) : 0);
  // console.debug("localStorageprice---", localStorageTotalPrice);
  // console.debug(totalPrice);

  // console.log("service-----", serviceList);

  const addService = (serviceId, serviceTitle, serviceImage, servicePrice) => {
    const service = serviceList.find((el) => el.serviceId === serviceId);
    if (service) {
      service.count++;
      setServiceList((list) => [...list]);
      // localStorage.setItem("serviceList", JSON.stringify(serviceList));
    } else {
      setServiceList((list) => [
        ...list,
        {
          serviceId: serviceId,
          image: serviceImage,
          title: serviceTitle,
          price: servicePrice,
          count: 1,
        },
      ]);
      // localStorage.setItem("serviceList", JSON.stringify(serviceList));
    }
    // localStorage.setItem("serviceList", JSON.stringify(serviceList));
    setTotalCount(totalCount + 1);
    setTotalPrice(parseFloat(totalPrice) + parseFloat(servicePrice));
  };

  const removeService = (id) => {
    setServiceList((list) => {
      // console.log("removing");
      const indexOfItemToRemove = list.findIndex((item) => item.serviceId == id);
      console.log(indexOfItemToRemove);

      if (indexOfItemToRemove === -1) {
        return list;
      }

      setTotalCount(totalCount - list[indexOfItemToRemove].count);
      setTotalPrice(totalPrice - list[indexOfItemToRemove].price * list[indexOfItemToRemove].count);

      return [...list.slice(0, indexOfItemToRemove), ...list.slice(indexOfItemToRemove + 1)];
    });
    // localStorage.setItem("serviceList", JSON.stringify(serviceList));
  };

  const decrementService = (id) => {
    const service = serviceList.find((el) => el.serviceId === id);
    console.log(service);
    if (service.count === 1) {
      removeService(id);
    } else {
      service.count -= 1;
    }
    setTotalPrice(totalPrice - service.price);
    setTotalCount(totalCount - 1);
    // localStorage.setItem("serviceList", JSON.stringify(serviceList));
  };

  const setWithAmount = () => {
    const unique = [...new Set(serviceList.map((item) => item.serviceId))];
    // console.log("unique---", unique);
  };

  useEffect(() => {
    localStorage.setItem("totalCount", totalCount);
    localStorage.setItem("totalPrice", totalPrice);
    localStorage.setItem("serviceList", JSON.stringify(serviceList));
  });

  // NOTE forceRefresh is removed from react-rounter-dom v6.
  // This is set because of the search page.
  // Ex: Search By Maker will point to the same URL /searched-car-list and
  // the Router will not refresh as it sees as the same place, regardless of different state.
  // This forceRefresh does the job.
  // BUT this leads to another issue. Most searches here are done by
  // PAGE 1 -- query data and pass data to PAGE 2.
  // So forceRefresh got rid of all state data.
  return (
    <QueryClientProvider client={queryClient}>
      <SearchContext.Provider value={{ keywords, setKeywords }}>
        <Router forceRefresh>
          <Wrapper
            addToCart={addService}
            serviceList={serviceList}
            removeService={removeService}
            decrementService={decrementService}
            totalCount={totalCount}
            totalPrice={totalPrice}
          >
            {/* <ScrollToTop /> */}
            <Routes
              addToCart={addService}
              serviceList={serviceList}
              removeService={removeService}
              decrementService={decrementService}
              totalCount={totalCount}
              totalPrice={totalPrice}
            />
          </Wrapper>
        </Router>
      </SearchContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
