// import React, { useMemo, useContext, useEffect, useState, lazy, Suspense } from "react";
import React, {createRef, useMemo, useContext, useState, useEffect, Suspense,lazy } from "react";

import { useQuery, useQueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import PropTypes from "prop-types";

// Filter UI
import MakerModelList from "./MakerModelList";
import TransmissionFilter from "./TransmissionFilter";
import MileageFilter from "./MileageFilter";
import EngineFilter from "./EngineFilter";
import FuelFilter from "./FuelFilter";

import PriceFilter from "./PriceFilter";
import BodyTypeFilter from "./BodyTypeFilter";

// MUI
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import ClearIcon from "@mui/icons-material/Clear";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Pagination from "@mui/material/Pagination";
// const Pagination = lazy(() => import("@components/Pagination/pagination"));
import Typography from "@material-ui/core/Typography";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import Taka from "@assets/taka.svg";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { SearchContext } from "context/SearchContext";
import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SeatingFilter from "./SeatingFilter";
import { api, baseAPIURL } from "@configs/configs";
const CarCard = lazy(() => import("@components/CarCard/CarCard"));
import _ from "lodash";
import Filter from "./Filter";
const renderLoader = () => <p>Loading</p>;

// TODO Suspect unused
// const CarCards = styled.div`
//   &.list {
//     display: flex;
//     flex-direction: column;
//   }
//   &.grid {
//     width: calc(100% + 30px);
//     margin-left: -15px;
//     margin-right: -15px;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     flex-wrap: wrap;
//     justify-content: flex-start;

//     @media (max-width: 768px) {
//       justify-content: center;
//     }
//   }
// `;

// const CarViewContainer = styled.div`
//   margin-top: 5px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   ${"" /* gap: 40px; */}
//   @media (max-width: 768px) {
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
// `;

function FilteredSearchPage(props) {
  // Constants
  const ITEMS_PER_PAGE = 20;
  const DEFAULT_SEARCH_KEYWORDS = "toyota";
  const HOUR = 60 * 60 * 1000;
  const minDistance = 50000;
  const MIN_PRICE_RANGE = 50000;
  const MAX_PRICE_RANGE = 10000000;

  // Refs to child components
  const filterRef = createRef();

  const queryClient = useQueryClient();
  const [filteredModels, setFilteredModels] = useState([]);
  const [chips, setChips] = useState([]);
  const location = useLocation();
  // const searchContext = useContext(SearchContext);
  // console.log("FilteredSearchPage searchContext", searchContext);

  // searchContext.setKeywords(props)
  var { dataUrl } = props;
  // const [dataUrl, setDataUrl] = useState(props.dataUrl);

  // const [carList, setCarList] = useState([]); // JSX
  const [filteredCars, setFilteredCars] = useState([]); // subset of cars
  const [priceRange, setPriceRange] = useState([MIN_PRICE_RANGE, MAX_PRICE_RANGE]);
  const [carCount, setCarCount] = useState(0);
  const [keywords0, setKeywords0] = useState(DEFAULT_SEARCH_KEYWORDS); // previous keywords
  const [keywords, setKeywords] = useState(DEFAULT_SEARCH_KEYWORDS);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageinationUrl, setPaginationUrl] = useState({ next: null, previous: null });

  const [selectedModel, setSelectedModel] = useState();
  const [selectedBodyTypeIds, setSelectedBodyTypeIds] = useState(new Set());
  const [selectedTransmissionIds, setSelectedTransmissionIds] = useState(new Set());
  const [selectedFuelIds, setSelectedFuelIds] = useState(new Set());
  const [selectedEngineIds, setSelectedEngineIds] = useState(new Set());

  const [sortRule, setSortRule] = useState();

  // Filters
  const filterPrice = (car) => car.fixed_price >= priceRange[0] && car.fixed_price <= priceRange[1];
  const filterModel = (car) => car.model_name.model_id === selectedModel.model_id;
  const filterBodyType = (car) => selectedBodyTypeIds.has(car.car_body_type.id);
  const filterTransmission = (car) => selectedTransmissionIds.has(car.transmission_type);
  const filterFuel = (car) => selectedFuelIds.has(car.car_fuel.fuel_id);

  // TODO Engine capacity is undefined in most cars!
  const filterEngine = (car) => selectedTransmissionIds.has(car.transmission_type);
  const sortPriceAsc = (a, b) => a.fixed_price - b.fixed_price;
  const sortPriceDesc = (a, b) => b.fixed_price - a.fixed_price;
  const sortYearAsc = (a, b) => a.car_year - b.car_year;
  const sortYearDesc = (a, b) => b.car_year - a.car_year;

  const prepareDataCards = (cars) => {
    return cars.map((car) => {
      let pathname = `cars`;
      return <CarCard key={car.car_id} car={car} listView={false} pathName={pathname} />;
    });
  };

  // Canonicalised the query name (keywords.toUpperCase to facilitate query caching.)
  const { data, isFetching } = useQuery([keywords.toUpperCase(), currentPage], () => fetchCars(keywords, currentPage), {
    keepPreviousData: true,
    staleTime: HOUR,
  });

  // Prefetch the next page!
  useEffect(() => {
    if (data?.next) {
      console.debug(`FSP Prefetch next page ${currentPage + 1}`);
      queryClient.prefetchQuery([keywords.toUpperCase(), currentPage + 1], () => fetchCars(keywords, currentPage + 1));
    }
  }, [data, currentPage, queryClient]);

  // Change on keywords will clear the filter
  useEffect(() => {
    clearFilter();
  }, [keywords]);

  // Prepare featured cars
  useEffect(() => {
    // let cars = data.results;
    // let limitation = data.count;
    console.group("useEffect[data]");
    if (!data) return; // Guard
    console.debug("data", data);
    let { results: cars, count, next, previous } = data;

    // setLimit(data[0].count);
    // Clean data
    cars = cars.map((car) => {
      car.fixed_price = parseInt(car.fixed_price);
      car.car_year = parseInt(car.car_year);
      return car;
    });

    console.groupEnd();
    // const _filteredModels = prepareFilteredModels(cars);

    setPaginationUrl({ next, previous });
    setCarCount(count);
    setFilteredCars(cars);
    setFilteredModels(prepareFilteredModels(cars));
    applyFilters();
  }, [data]);

  // If chips are empty, clearFilter
  useEffect(() => {
    console.group("useEffect[chips]");
    console.debug(chips);
    if (chips || chips.length == 0) {
      console.debug("clearFilter");
      clearFilter();
    }
    console.groupEnd();
  }, [chips]);

  // Apply Filters when these dependencies changes
  useEffect(() => {
    applyFilters();
  }, [
    selectedModel,
    selectedBodyTypeIds,
    selectedEngineIds,
    selectedFuelIds,
    selectedTransmissionIds,
    priceRange,
    sortRule,
  ]);

  async function fetchCars(keywords = DEFAULT_SEARCH_KEYWORDS, page = 1) {
    let dataUrl = "api/cars/search/?q=";

    console.group("FSP Query");
    console.debug("Page", currentPage);
    console.debug("dataUrl\n", dataUrl);

    // WARNING Very very very bad API design.
    // NOTE this api returns 301 if there no trailing slash.
    // const { data } = await api.get(dataUrl);
    let encodedKeywords = encodeURI(keywords.trim());
    if (encodedKeywords == "") {
      dataUrl = "api/cars/type-of-cars/?car_type=Reconditione";
    }
    let uri = `${dataUrl}${encodedKeywords}`;
    var u = new URL(uri, baseAPIURL);
    console.debug("URL", u);
    u.searchParams.set("page", page);
    dataUrl = u.href.replace(u.origin, "");
    console.debug("Fetching", dataUrl);

    let res = await api.get(dataUrl);
    if (res.error) {
      // Guard: Most cases, found not so many cars hence no other pages, then come back to page 1
      setCurrentPage(1);
      console.groupEnd();
      return [];
    }
    const { data } = res;
    console.groupEnd();
    return data;
  }

  // console.log(limit)
  // console.log("Cars =>",cars)

  // useEffect(() => {
  //   const list = prepareDataCards(filteredCars);
  //   // setCarList(list);
  // }, [filteredCars]);

  const carList = useMemo(() => {
    console.log("useMemo", filteredCars);
    return prepareDataCards(filteredCars);
  }, [filteredCars]);

  /** All filters must be applied altogether on cars.
   * Applying each time on each adjustment will only reduce cars to empty.
   */
  const applyFilters = () => {
    // console.debug("Apply Filters ======");
    // console.group();
    console.group("Apply Filters");
    console.debug("data", data);
    if (!data) {
      // Guard
      console.groupEnd();
      return;
    }

    let { results: cars } = data;
    if (!cars) {
      // Guard
      console.groupEnd();
      return;
    }
    console.debug(cars);

    if (selectedModel && filterModel) {
      cars = cars.filter(filterModel);
      console.debug("Filter Model", cars);
    }
    if (filterPrice) {
      console.debug("Filter Price");
      cars = cars.filter(filterPrice);
    }
    if (selectedBodyTypeIds.size > 0 && filterBodyType) {
      console.debug("Filter Body Type", selectedBodyTypeIds);
      cars = cars.filter(filterBodyType);
    }

    if (selectedTransmissionIds.size > 0 && filterTransmission) {
      console.debug("Filter Transmission", selectedTransmissionIds);
      cars = cars.filter(filterTransmission);
    }

    if (selectedEngineIds.size > 0 && filterEngine) {
      console.debug("Filter Engine", selectedEngineIds);
      cars = cars.filter(filterEngine);
    }

    if (selectedFuelIds.size > 0 && filterFuel) {
      console.debug("Filter Fuel", selectedFuelIds);
      cars = cars.filter(filterFuel);
    }

    if (sortRule) {
      const [field, order] = sortRule;
      console.debug(`Sort ${field} ${order}`);
      if (field == "price" && order == "asc") cars = cars.sort(sortPriceAsc);
      if (field == "price" && order == "desc") cars = cars.sort(sortPriceDesc);
      if (field == "year" && order == "asc") cars = cars.sort(sortYearAsc);
      if (field == "year" && order == "desc") cars = cars.sort(sortYearDesc);
    }

    console.groupEnd();
    let _cars = [...cars];
    setFilteredCars(_cars);
    setFilteredModels(prepareFilteredModels(_cars));
  };

  const handleFilterBodyType = (bodyType, checked) => {
    // console.debug(bodyType);
    // if (selectedBodyTypeIds.has(bodyType.id)) {
    if (checked) {
      selectedBodyTypeIds.add(bodyType.id);
    } else {
      selectedBodyTypeIds.delete(bodyType.id);
    }
    setSelectedBodyTypeIds(new Set(selectedBodyTypeIds));
  };

  /**
   *
   * @param string {A|M} transmission
   * @param boolean checked
   */
  const handleFilterTransmission = (transmission, checked) => {
    // console.log(transmission, checked);
    if (checked) {
      selectedTransmissionIds.add(transmission.id);
    } else {
      selectedTransmissionIds.delete(transmission.id);
    }
    setSelectedTransmissionIds(new Set(selectedTransmissionIds));
  };

  const handleFilterFuel = (fuel, checked) => {
    console.log(fuel, checked);
    const { fuel_id: id } = fuel;
    if (checked) {
      selectedFuelIds.add(id);
    } else {
      selectedFuelIds.delete(id);
    }
    setSelectedFuelIds(new Set(selectedFuelIds));
  };

  const handleFilterEngine = (engine, checked) => {
    console.log(engine, checked);
    if (checked) {
      selectedEngineIds.add(engine.id);
    } else {
      selectedEngineIds.delete(engine.id);
    }
    setSelectedTransmissionIds(new Set(selectedEngineIds));
  };

  const handleModelChange = (e, model) => {
    console.debug("handleModelChange", model);
    setSelectedModel(model);
  };

  const handlePriceChangeCommitted = (e, v) => {
    console.group("handlePriceChangeCommitted");
    console.debug(v);
    const [minPrice, maxPrice] = v;
    console.log("minPrice", minPrice);
    console.log("maxPrice", maxPrice);
    console.groupEnd("handlePriceChangeCommitted");
    setPriceRange(v);
  };

  const clearFilter = () => {
    // TODO clear maker/model as well
    filterRef.current.clearFilter();

    setPriceRange([MIN_PRICE_RANGE, MAX_PRICE_RANGE]);
    setSelectedTransmissionIds(new Set());
    setSelectedBodyTypeIds(new Set());
    setSelectedFuelIds(new Set());
    setSelectedModel(null);
    setSortRule(null);
    // applyFilters();
  };

  const sortCars = (field, order) => {
    setSortRule([field, order]);
  };

  const handlePaginate = (e, page) => {
    setCurrentPage(page);
  };

  const handleSelectMakerModel = (chipComponents, newKeywords) => {
    console.group("handleSelectMakerModel");
    console.debug(`keywords [${newKeywords}]`);
    console.groupEnd();
    setChips(chipComponents);
    setKeywords0(keywords);
    setKeywords(newKeywords); // This will trgger react-query to fetch
  };

  const prepareFilteredModels = (cars) => {
    // if (!data) return; // Guard
    // let { results: cars } = data;

    let _models = [];
    let seen = [];
    for (const car of cars) {
      const model = {
        maker_id: car.car_manufacturer.maker_id,
        maker: car.car_manufacturer.maker_name,
        model_id: car.model_name.model_id,
        model: car.model_name.model_name,
        count: 0,
      };
      // Prevent duplicate models, only push when the mode_id is never seen.
      // console.log(`${model.maker} ${model.model}`)
      if (!seen.includes(model.model_id)) {
        _models.push(model);
        seen.push(model.model_id);
      }
    }

    return _models.sort((a, b) => -`${b.maker} ${b.model}`.localeCompare(`${a.maker} ${a.model}`));
  };

  return (
    <div className="sm:flex block">
      <Filter
        ref={filterRef}
        onChipChange={setChips}
        // cars={cars}
        cars={filteredCars}
        onModelChange={handleModelChange}
        onPriceChangeCommitted={handlePriceChangeCommitted}
        selectedFuelSet={selectedFuelIds}
        onFilterFuel={handleFilterFuel}
        selectedTransmissionSet={selectedTransmissionIds}
        onFilterTransmission={handleFilterTransmission}
        selectedEngineSet={selectedEngineIds}
        onFilterEngine={handleFilterEngine}
        selectedBodyTypeSet={selectedBodyTypeIds}
        onFilterBodyType={handleFilterBodyType}
        clearFilter={clearFilter}
        minDistance={minDistance}
        minPriceRange={MIN_PRICE_RANGE}
        maxPriceRange={MAX_PRICE_RANGE}
        className=""
      />
      <div className="w-full">
        <div className="flex justify-between mt-10">
          <MakerModelList onSelectionChange={handleSelectMakerModel} />
          {/* <Autocomplete
            id="maker-model"
            options={filteredModels}
            groupBy={(option) => option.maker}
            getOptionLabel={(option) => `${option.maker} ${option.model}`}
            style={{ width: "200px" }}
            onChange={handleModelChange}
            value={selectedModel}
            size="small"
            renderInput={(params) => <TextField {...params} label="Maker / Model" />}
          /> */}

          <div className="self-center">
            Found <span className="font-bold"> {carCount} </span> {carCount > 1 ? "cars" : "car"}
          </div>

          <Pagination
            page={currentPage}
            count={parseInt(carCount / ITEMS_PER_PAGE)}
            size="small"
            style={{ alignSelf: "center" }}
            onChange={handlePaginate}
          />

          <Stack direction="row" spacing={0} style={{ alignSelf: "center" }}>
            <Typography>Price:</Typography>
            <ArrowDropDownIcon onClick={() => sortCars("price", "asc")} className="cursor-pointer" />
            <ArrowDropUpIcon onClick={() => sortCars("price", "desc")} className="cursor-pointer" />
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
            <Typography>Year:</Typography>
            <ArrowDropDownIcon onClick={() => sortCars("year", "asc")} className="cursor-pointer" />
            <ArrowDropUpIcon onClick={() => sortCars("year", "desc")} className="cursor-pointer" />
          </Stack>
        </div>

        <Stack direction="row" spacing={1} className="transition-all">
          <span className="hidden lg:block mt-2">{chips}</span>
        </Stack>

        {/* <div className="grid mt-5">{carList}</div> */}

        {/* CarCards = styled.div`
  &.list {
    display: flex;
    flex-direction: column;
  }
  &.grid {
    width: calc(100% + 30px);
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`; */}
        {/* <div className="flex flex-col md:flex-row mt-5 justify-center items-center "> */}
        {/* <CarViewContainer> */}
        {isFetching && <LinearProgress sx={{ margin: 1 }} color="success" />}
        <ReactQueryDevtools initialIsOpen />
        <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {!isFetching && <>{carList}</>}
          {/* {cars.length > 0 && (
          <Pagination
            data={cars}
            RenderComponent={CarCard}
            pageLimit={5}
            dataLimit={20}
            listView={false}
            count={cars.length}
            url={dataUrl}
          />
        )} */}
        </div>
        {/* </CarViewContainer> */}
        {/* </div> */}
      </div>
    </div>
  );
}

// function Filter(props) {
//   const {
//     onChipChange,
//     cars,
//     onModelChange,
//     onPriceChangeCommitted,
//     onFilterBodyType,
//     selectedBodyTypeSet,

//     onFilterFuel,
//     selectedFuelSet,

//     onFilterTransmission,
//     selectedTransmissionSet,

//     onFilterEngine,
//     selectedEngineSet,

//     clearFilter,
//     minDistance,
//     priceRange,
//   } = props;
//   const [currentPriceRange, setCurrentPriceRange] = useState(priceRange);
//   const [selectedModel, setSelectedModel] = useState(null);
//   const [showCorespondingInputs, setShowCorespondingInputs] = useState(true);

//   let _models = [];
//   let seen = [];
//   for (const car of cars) {
//     const model = {
//       maker_id: car.car_manufacturer.maker_id,
//       maker: car.car_manufacturer.maker_name,
//       model_id: car.model_name.model_id,
//       model: car.model_name.model_name,
//     };
//     // Prevent duplicate models, only push when the mode_id is never seen.
//     if (!seen.includes(model.model_id)) {
//       _models.push(model);
//       seen.push(model.model_id);
//     }
//   }

//   const allModels = _models.sort((a, b) => -`${b.maker} ${b.model}`.localeCompare(`${a.maker} ${a.model}`));

//   // console.debug(allModels);

//   const handlePriceChange = (event, newValue, activeThumb) => {
//     if (!Array.isArray(newValue)) {
//       return;
//     }

//     if (activeThumb === 0) {
//       setCurrentPriceRange([Math.min(newValue[0], currentPriceRange[1] - minDistance), currentPriceRange[1]]);
//     } else {
//       setCurrentPriceRange([currentPriceRange[0], Math.max(newValue[1], currentPriceRange[0] + minDistance)]);
//     }
//   };

//   const handleMinPriceChange = (e) => {
//     // console.debug(e.target.value)
//     console.log(e.target.value);
//     const newPrice = [parseInt(e.target.value), currentPriceRange[1]];
//     setCurrentPriceRange(newPrice);
//     onPriceChangeCommitted(e, newPrice);
//   };

//   const handleMaxPriceChange = (e) => {
//     // console.debug(e.target.value)
//     const newPrice = [currentPriceRange[0], parseInt(e.target.value)];
//     setCurrentPriceRange(newPrice);
//     onPriceChangeCommitted(e, newPrice);
//   };

//   const handleClearFilter = () => {
//     setCurrentPriceRange(priceRange);
//     setSelectedModel(null);
//     clearFilter();
//   };

//   const handleModelChange = (e, v) => {
//     console.group("AutoComplete");
//     console.debug(e, v);
//     console.groupEnd();
//     setSelectedModel(v);
//     onModelChange(e, v);
//   };

//   return (
//     <div className="border-solid border-2 border-inherit min-w-60 lg:p-4 lg:mt-4 m-2 p-4">
//       <h4 className="font-bold text-xl">
//         Filters{" "}
//         <Button variant="outline" endIcon={<ClearIcon />} onClick={handleClearFilter}>
//           Clear
//         </Button>
//       </h4>
//       {showCorespondingInputs && (
//         <div className="flex justify-between mt-4">
//           <div className="flex -ml-3">
//             <img src={Taka} alt="Taka" />
//             <h4 className="ml-1 font-bold text-lg" onChange={handleMinPriceChange}>
//               {currentPriceRange[0]}
//             </h4>
//           </div>
//           <div className="flex -mr-1">
//             <img src={Taka} alt="Taka" />
//             <h4 className="ml-1 font-bold text-lg" onChange={handleMaxPriceChange}>
//               {currentPriceRange[1]}
//             </h4>
//           </div>
//         </div>
//       )}

//       <Slider
//         sx={{ width: "100%" }}
//         getAriaLabel={() => "Price"}
//         value={currentPriceRange}
//         onChange={handlePriceChange}
//         valueLabelDisplay="auto"
//         getAriaValueText={(value) => `${value[0]} - ${value[1]}`}
//         disableSwap
//         min={priceRange[0]}
//         max={priceRange[1]}
//         step={minDistance}
//         onChangeCommitted={onPriceChangeCommitted}
//         style={{ color: "#f06425" }}
//       />

//       <div className="flex justify-between mb-5">
//         <span className="text-base text-sm">Min. Price</span>
//         <span className="text-base text-sm">Max. Price</span>
//       </div>

//       <Autocomplete
//         id="maker-model"
//         options={allModels}
//         groupBy={(option) => option.maker}
//         getOptionLabel={(option) => `${option.maker} ${option.model}`}
//         style={{ width: "100%", marginTop: "8px" }}
//         onChange={handleModelChange}
//         value={selectedModel}
//         renderInput={(params) => <TextField {...params} label="Maker / Model" />}
//       />
//       {/* <h4 className="font-bold">Make + Models</h4> */}

//       {/* <PriceFilter /> // No need, Price Slider is there.*/}
//       <TransmissionFilter onCheck={onFilterTransmission} selectedSet={selectedTransmissionSet} />
//       {/* <EngineFilter  onCheck={onFilterEngine} selectedSet={selectedEngineSet} /> */}
//       {/* <SeatingFilter /> // Most cars don't define number of seats */}
//       <FuelFilter onCheck={onFilterFuel} selectedSet={selectedFuelSet} />
//       <BodyTypeFilter onCheck={onFilterBodyType} selectedSet={selectedBodyTypeSet} />
//     </div>
//   );
// }

FilteredSearchPage.propTypes = {
  // dataUrl: PropTypes.string,
  // primary: PropTypes.bool,
  // backgroundColor: PropTypes.string,
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  // label: PropTypes.string.isRequired,
  // onClick: PropTypes.func,
};

// TODO should default to api/cars/all/ as soon as it supports pagination.
FilteredSearchPage.defaultProps = {
  // dataUrl: "https://api-a.bhalogari.com/api/cars/all",
  // dataUrl: "api/cars/all/",
  // dataUrl: "api/cars/choose-by-maker/?maker_name=toyota",
  // // dataUrl: "api/cars/type-of-cars/?car_type=Reconditione",
  // dataUrl: "api/cars/search/?q=",
  // dataUrl: "api/cars/search-by-specifications-new/?price_from=&price_to=&mileage_from=&mileage_to=&capacity_from=&capacity_to=&seating=&car_maker=&car_model="
};

export default FilteredSearchPage;
