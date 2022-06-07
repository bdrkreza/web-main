import React, {forwardRef, useImperativeHandle, useState, useEffect } from "react";

import PropTypes from "prop-types";

// Filter UI
import MakerModelList from "./MakerModelList";
import TransmissionFilter from "./TransmissionFilter";
import MileageFilter from "./MileageFilter";
import EngineFilter from "./EngineFilter";
import FuelFilter from "./FuelFilter";
import ColorFilter from "./ColorFilter";
import SeatingFilter from "./SeatingFilter";
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

import Typography from "@material-ui/core/Typography";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import Taka from "@assets/taka.svg";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { SearchContext } from "context/SearchContext";

import { api, baseAPIURL } from "@configs/configs";
import _ from "lodash";

const renderLoader = () => <p>Loading</p>;

function Filter(props, ref) {
  const {
    onChipChange,
    cars,
    onModelChange,
    onPriceChangeCommitted,
    onFilterBodyType,
    selectedBodyTypeSet,

    onFilterFuel,
    selectedFuelSet,

    onFilterTransmission,
    selectedTransmissionSet,

    onFilterEngine,
    selectedEngineSet,

    // clearFilter,
    minDistance,
    minPriceRange,
    maxPriceRange
  } = props;
  const [currentPriceRange, setCurrentPriceRange] = useState([minPriceRange,maxPriceRange]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [showCorespondingInputs, setShowCorespondingInputs] = useState(true);

  let _models = [];
  let seen = [];
  for (const car of cars) {
    const model = {
      maker_id: car.car_manufacturer.maker_id,
      maker: car.car_manufacturer.maker_name,
      model_id: car.model_name.model_id,
      model: car.model_name.model_name,
    };
    // Prevent duplicate models, only push when the mode_id is never seen.
    if (!seen.includes(model.model_id)) {
      _models.push(model);
      seen.push(model.model_id);
    }
  }

  const allModels = _models.sort((a, b) => -`${b.maker} ${b.model}`.localeCompare(`${a.maker} ${a.model}`));

  // console.debug(allModels);

  const handlePriceChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setCurrentPriceRange([Math.min(newValue[0], currentPriceRange[1] - minDistance), currentPriceRange[1]]);
    } else {
      setCurrentPriceRange([currentPriceRange[0], Math.max(newValue[1], currentPriceRange[0] + minDistance)]);
    }
  };

  const handleMinPriceChange = (e) => {
    // console.debug(e.target.value)
    console.log(e.target.value);
    const newPrice = [parseInt(e.target.value), currentPriceRange[1]];
    setCurrentPriceRange(newPrice);
    onPriceChangeCommitted(e, newPrice);
  };

  const handleMaxPriceChange = (e) => {
    // console.debug(e.target.value)
    const newPrice = [currentPriceRange[0], parseInt(e.target.value)];
    setCurrentPriceRange(newPrice);
    onPriceChangeCommitted(e, newPrice);
  };

  const handleClearFilter = (e) => {
    const defaultPriceRange = [minPriceRange,maxPriceRange]
    
    setCurrentPriceRange(defaultPriceRange);
    onPriceChangeCommitted(e,defaultPriceRange)
    
    setSelectedModel(null);
    onModelChange(e,null)
    // clearFilter();
  };

  // Allow parent component to call to clear filters
  useImperativeHandle(ref, () => ({
    clearFilter: handleClearFilter,
  }));

  const handleModelChange = (e, v) => {
    console.group("AutoComplete");
    console.debug(e, v);
    console.groupEnd();
    setSelectedModel(v);
    onModelChange(e, v);
  };

  return (
    <div className="border-solid border-2 border-inherit min-w-60 lg:p-4 lg:mt-4 m-2 p-4">
      <h4 className="font-bold text-xl">
        Filters{" "}
        <Button variant="outline" endIcon={<ClearIcon />} onClick={handleClearFilter}>
          Clear
        </Button>
      </h4>
      {showCorespondingInputs && (
        <div className="flex justify-between mt-4">
          <div className="flex -ml-3">
            <img src={Taka} alt="Taka" />
            <h4 className="ml-1 font-bold text-lg" onChange={handleMinPriceChange}>
              {currentPriceRange[0]}
            </h4>
          </div>
          <div className="flex -mr-1">
            <img src={Taka} alt="Taka" />
            <h4 className="ml-1 font-bold text-lg" onChange={handleMaxPriceChange}>
              {currentPriceRange[1]}
            </h4>
          </div>
        </div>
      )}

      <Slider
        sx={{ width: "100%" }}
        getAriaLabel={() => "Price"}
        value={currentPriceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        getAriaValueText={(value) => `${value[0]} - ${value[1]}`}
        disableSwap
        min={minPriceRange}
        max={maxPriceRange}
        step={minDistance}
        onChangeCommitted={onPriceChangeCommitted}
        style={{ color: "#f06425" }}
      />

      <div className="flex justify-between mb-5">
        <span className="text-base text-sm">Min. Price</span>
        <span className="text-base text-sm">Max. Price</span>
      </div>

      <Autocomplete
        id="maker-model"
        options={allModels}
        groupBy={(option) => option.maker}
        getOptionLabel={(option) => `${option.maker} ${option.model}`}
        style={{ width: "100%", marginTop: "8px" }}
        onChange={handleModelChange}
        value={selectedModel}
        renderInput={(params) => <TextField {...params} label="Maker / Model" />}
      />
      {/* <h4 className="font-bold">Make + Models</h4> */}

      {/* <PriceFilter /> // No need, Price Slider is there.*/}
      <TransmissionFilter onCheck={onFilterTransmission} selectedSet={selectedTransmissionSet} />
      {/* <EngineFilter  onCheck={onFilterEngine} selectedSet={selectedEngineSet} /> */}
      <EngineFilter onCheck={onFilterEngine} selectedSet={selectedEngineSet}/>
      
      <ColorFilter onCheck={onFilterEngine} selectedSet={selectedEngineSet}/>
      <SeatingFilter onCheck={onFilterEngine} selectedSet={selectedEngineSet}/>
      <FuelFilter onCheck={onFilterFuel} selectedSet={selectedFuelSet} />
      <MileageFilter onCheck={onFilterFuel} selectedSet={selectedFuelSet} />
            
      <BodyTypeFilter onCheck={onFilterBodyType} selectedSet={selectedBodyTypeSet} />
    </div>
  );
}

export default forwardRef(Filter);


// onFilterEngine,
// selectedEngineSet,