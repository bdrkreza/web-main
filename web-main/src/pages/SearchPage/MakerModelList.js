/**
 * Summary.
 * MakerModelList components allows user to browse, search, select makers and models.
 *
 * Description.
 * Optimisation is the key (useMemo and useCallback).
 * Without it, handler functions are generated repeatedly and cuase obvious UI sluggishness.
 *
 * TODO.
 * - Better styling
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author Chayapol Moemeng.
 * @since  2022.04-.14
 */

import React, { useContext, useState, useEffect, useCallback, useMemo } from "react";
import { useQuery } from "react-query";
import PropTypes from "prop-types";
import axios from "axios";
// import { api } from "@configs/configs";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import LinearProgress from "@mui/material/LinearProgress";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { api, baseAPIURL } from "@configs/configs";

// Utility Functions
const isIndeterminate = (models, selectedModelIds) => {
  if (!selectedModelIds) return false; // Guard
  const modelCount = models.filter((model) => selectedModelIds.has(model.model_id)).length;
  return modelCount > 0 && modelCount < models.length;
};

const isAllModelSelected = (models, selectedModelIds) => {
  if (!selectedModelIds) return false; // Guard
  const modelCount = models.filter((model) => selectedModelIds.has(model.model_id)).length;
  return modelCount == models.length;
};

// The Main Component
function MakerModelList({ dataUrl, onSelectionChange, showChips = false }) {
  const [selectedMakerIds, setSelectedMakerIds] = useState(new Set());
  const [selectedModelIds, setSelectedModelIds] = useState(new Set());
  const [text, setText] = useState("");
  const [chips, setChips] = useState([]);
  // const [makerMap, setMakerMap] = useState({});  // useMemo instead
  // const [modelMap, setModelMap] = useState({});  // useMemo instead

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log("handleClick",event.currentTarget)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleMakerChipDelete = (makerId) => {
    selectedMakerIds.delete(makerId);
    // as well, delete all models
    for (const modelId of makerMap[makerId].models) {
      // console.log("handleMakerChipDelete DELETE",modelId.model_id)
      selectedModelIds.delete(modelId.model_id);
    }
    setSelectedMakerIds(new Set(selectedMakerIds));
    setSelectedModelIds(new Set(selectedModelIds));
  };

  const handleModelChipDelete = useCallback(
    (modelId) => {
      const makerId = modelMap[modelId].maker_id;
      if (isIndeterminate(makerMap[makerId].models)) {
        selectedMakerIds.delete(makerId);
        setSelectedMakerIds(new Set(selectedMakerIds));
      }
      selectedModelIds.delete(modelId);
      setSelectedModelIds(new Set(selectedModelIds));
    },
    [selectedModelIds]
  );

  useEffect(() => {
    // selectedMakerIds is a Set and no map(), hence no fancy map() forEach() like Array, don't bother convert it.

    const chipList = [];
    let keywords = "";
    // Chip for maker
    for (const makerId of selectedMakerIds) {
      const maker = makerMap[makerId];
      const chip = <CarChip key={makerId} label={maker.maker_name} onDelete={() => handleMakerChipDelete(makerId)} />;
      keywords = ` ${keywords} ${maker.maker_name}`
      chipList.push(chip);
    }
    // Chip for model
    for (const modelId of selectedModelIds) {
      const model = modelMap[modelId];
      if (selectedMakerIds.has(model.maker_id)) continue; // skip models whose the whole maker is selected.
      const chip = <CarChip key={modelId} label={`${model.maker_name} ${model.model_name}`} onDelete={() => handleModelChipDelete(modelId)} />;
      keywords = ` ${keywords} ${model.maker_name} ${model.model_name}`
      chipList.push(chip);
    }

    setChips(chipList);
    onSelectionChange(chipList,keywords.trim());
  }, [selectedMakerIds, selectedModelIds]);

  const {
    status,
    data: makers,
    error,
    isFetching,
  } = useQuery("all-models", async () => {
    const { data } = await api.get(dataUrl);
    return data;
  });

  const [makerMap, modelMap] = useMemo(() => {
    var makerMap = {};
    var modelMap = {};

    // console.debug("useMemo", makers);
    if (!makers) return [{}, {}];
    for (const maker of makers) {
      // Build Maker Map
      makerMap[maker.maker_id] = maker;
      // Build Model Map
      // console.log("Building modelMap --> maker",maker,)
      for (const model of maker.models) {
        modelMap[model.model_id] = {
          model_id: model.model_id,
          model_name: model.model_name,
          maker_id: maker.maker_id,
          maker_name: maker.maker_name,
        };
      }
    }

    return [makerMap, modelMap];
  }, [makers]);

  const containsModelName = (maker, keyword) => {
    if (!keyword || keyword.length == 0) return true;
    const foundModels = maker.models.filter((model) => {
      // if (model.model_name === 'Toyota') console.log('>>>> Toyota',model.model_name.search(new RegExp(keyword, "i")))
      return model.model_name.search(new RegExp(keyword, "i")) >= 0;
    });
    return foundModels.length > 0;
  };

  if (!makers) {
    // Guard: render progress bar
    return (
      <Box sx={{ display: "flex" }}>
        <LinearProgress />
      </Box>
    );
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleClearFilters = () => {
    setText("");
    setSelectedMakerIds(new Set());
    setSelectedModelIds(new Set());
  };

  const handleFoundModelCheck = (modelId) => {
    console.assert(modelId, `modelId should be a number, got ${modelId}`);
    // console.debug("handleFoundModelCheck", modelId);
    // setChecked([checked[0], event.target.checked]);
    if (selectedModelIds.has(modelId)) {
      selectedModelIds.delete(modelId);
    } else {
      selectedModelIds.add(modelId);
    }

    // Determine selectedMakerIds, if a maker's models are all selected, the maker is then selected.
    // console.group();
    // console.debug(modelMap[modelId]);
    // console.groupEnd();
    const makerId = modelMap[modelId].maker_id;
    const maker = makerMap[makerId];
    if (isAllModelSelected(maker.models, selectedModelIds)) {
      selectedMakerIds.add(makerId);
    } else {
      selectedMakerIds.delete(makerId);
    }

    // console.log("handleModelCheck", modelId,selectedModelIds);
    setSelectedMakerIds(new Set(selectedMakerIds));
    setSelectedModelIds(new Set(selectedModelIds));
  };

  // JSX for MakerModelList
  return (
    <div>
      <TextField
        fullWidth
        value={text}
        placeholder="Search Makers/Models"
        onChange={handleTextChange}
        style={{ width: "100%", marginTop: "5px" }}
        onClick={handleClick}
      />
      <div className="lg:hidden">
        {/* <Stack direction="row" spacing={1}> */}
        {/* <Button variant="contained" endIcon={<ClearIcon />} onClick={handleClearFilters}>
            Clear Filters
          </Button> */}
        {chips}
        {/* </Stack> */}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box style={{ maxHeight: "45vh", overflow: "auto", width: "100%" }}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            // subheader={
            //   <ListSubheader className="-ml-3" component="div" id="nested-list-subheader">
            //     Choose from our DB
            //   </ListSubheader>
            // }
          >
            {makers
              .filter((maker) => {
                // console.debug(
                //   maker.maker_name,
                //   maker.containsModelName(text),
                //   maker.maker_name.search(new RegExp(text, "i"))
                // );
                return containsModelName(maker, text) || maker.maker_name.search(new RegExp(text, "i")) >= 0;
              })
              .sort((a, b) => a.maker_name.localeCompare(b.maker_name))
              .map((maker) => (
                <MakerList
                  maker={maker}
                  searchText={text}
                  key={maker.maker_id}
                  defaultChecked={selectedMakerIds.has(maker.maker_id)}
                  selectedMakerIds={selectedMakerIds}
                  selectedModelIds={selectedModelIds}
                  setSelectedMakerIds={setSelectedMakerIds}
                  setSelectedModelIds={setSelectedModelIds}
                  makerMap={makerMap}
                  modelMap={modelMap}
                />
              ))}
          </List>
          {/* Show only when text search */}
          {text !== "" && (
            <Box>
              <h4 className="text-sm">Found Models</h4>
              {Object.values(modelMap)
                .filter(
                  (model) => text == "" || `${model.maker_name}${model.model_name}`.search(new RegExp(text, "i")) >= 0
                )
                .map((model, index) => (
                  <ModelCheckBox
                    label={`${model.maker_name} ${model.model_name}`}
                    key={index}
                    model={model}
                    selectedModelIds={selectedModelIds}
                    onChange={() => handleFoundModelCheck(model.model_id)}
                  />
                ))}
            </Box>
          )}
        </Box>
      </Popover>
      {/* <hr className="mt-10"/> */}
    </div>
  );
}

function CarChip({ label, onDelete }) {
  return <Chip label={label} onDelete={onDelete} />;
}

// MakerList Component
// Do not nest this component insite the MakerModelList,
// because the open state will be reset to false
// as soon as the checkbox is checked/unchecked and trigger React to render, hence re-run the usesState to false.
function MakerList({
  searchText = "",
  maker,
  // handleClick,
  // defaultChecked = false,
  selectedMakerIds,
  selectedModelIds,
  setSelectedMakerIds,
  setSelectedModelIds,
  makerMap,
  modelMap,
}) {
  const [open, setOpen] = useState(false);

  // Significantly improve performance with useCallback.
  // these handler functions are created everytime this company is rendered.
  // useCallback helps cache them.
  const handleMakerCheck = useCallback(
    (makerId) => {
      // setChecked([event.target.checked, checked[1]]);
      if (selectedMakerIds.has(makerId)) {
        selectedMakerIds.delete(makerId);
        // remove all models
        maker.models.forEach((model) => {
          selectedModelIds.delete(model.model_id);
        });
      } else {
        selectedMakerIds.add(makerId);
        // add all models
        maker.models.forEach((model) => {
          selectedModelIds.add(model.model_id);
        });
      }
      setSelectedMakerIds(new Set(selectedMakerIds));
      setSelectedModelIds(new Set(selectedModelIds));
    },
    [selectedMakerIds, selectedModelIds]
  );

  const handleModelCheck = useCallback(
    (modelId) => {
      // setChecked([checked[0], event.target.checked]);
      if (selectedModelIds.has(modelId)) {
        selectedModelIds.delete(modelId);
      } else {
        selectedModelIds.add(modelId);
      }

      // Determine selectedMakerIds, if a maker's models are all selected, the maker is then selected.
      const makerId = modelMap[modelId].maker_id;
      const maker = makerMap[makerId];
      if (isAllModelSelected(maker.models, selectedModelIds)) {
        selectedMakerIds.add(makerId);
      } else {
        selectedMakerIds.delete(makerId);
      }

      // console.log("handleModelCheck", modelId,selectedModelIds);
      // console.debug("handleModelCheck OPEN", open);
      setSelectedMakerIds(new Set(selectedMakerIds));
      setSelectedModelIds(new Set(selectedModelIds));
    },
    [selectedModelIds]
  );

  const makerId = maker.maker_id;

  // JSX for Makers / Models
  return (
    <>
      <Box className="ml-2">
        <FormControlLabel
          label={maker.maker_name}
          control={
            <Checkbox
              checked={selectedMakerIds.has(makerId) || isAllModelSelected(maker.models, selectedModelIds)}
              indeterminate={isIndeterminate(maker.models, selectedModelIds)}
              onChange={() => handleMakerCheck(makerId)}
            />
          }
        />
        {open ? (
          <ExpandLess onClick={() => setOpen(!open)} className="border-2 align-middle" />
        ) : (
          <ExpandMore onClick={() => setOpen(!open)} className="border-2 align-middle" />
        )}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {maker.models
          .filter(
            (model) =>
              searchText == "" || `${maker.maker_name}${model.model_name}`.search(new RegExp(searchText, "i")) >= 0
          )
          .sort((a, b) => a.model_name.localeCompare(b.model_name))
          .map((model) => (
            <ModelCheckBox
              key={model.model_id}
              model={model}
              selectedModelIds={selectedModelIds}
              onChange={() => handleModelCheck(model.model_id)}
            />
          ))}
      </Collapse>
    </>
  );
}

// nested inside MakeList component
function ModelCheckBox({ model, label, selectedModelIds, onChange }) {
  const modelId = model.model_id;
  const _label = label || model.model_name;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label={_label}
        control={<Checkbox checked={selectedModelIds.has(modelId)} onChange={onChange} />}
      />
    </Box>
  );
}
MakerModelList.propTypes = {
  dataUrl: PropTypes.string,
  onSelect: PropTypes.func,
  // primary: PropTypes.bool,
  // backgroundColor: PropTypes.string,
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  // label: PropTypes.string.isRequired,
  // onClick: PropTypes.func,
};

MakerModelList.defaultProps = {
  // dataUrl: "https://api-a.bhalogari.com/api/cars/models/",
  // dataUrl: "https://backend.bhalogari.com/api/cars/models/",
  dataUrl: "api/cars/models/",
};

export default MakerModelList;
