import React from "react";
import { useQuery } from "react-query";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { api } from "configs/configs";

function FuelFilter({ dataUrl, onCheck, selectedSet }) {
  const { data: fuelTypes, isFetching } = useQuery("fuel-type", async () => {
    const { data } = await api.get(dataUrl);
    console.debug("Fuel Types", data);
    return data;
  });

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>
          <span className="font-bold">Fuel</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        {isFetching ? (
            <span>Loading</span>
          ) : (
          <ul className="ml-3">
            {fuelTypes.map((ft,index) => {
              const {fuel_id:id, fuel_type:name} = ft
              const checked = selectedSet && selectedSet.has(id)
              return (
                <li key={index} className="flex flex-col">
                <FormControlLabel
                  control={<Checkbox name={name} />}
                  checked={checked}
                  label={name}
                  onChange={(event) => onCheck(ft,event.target.checked)}
                />
              </li>
              );
            })}
          </ul>
          )}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

FuelFilter.propTypes = {
  dataUrl: PropTypes.string,
  onCheck: PropTypes.func.isRequired,
  selectedSet: PropTypes.object,
};

FuelFilter.defaultProps = {
  // dataUrl: "https://api-a.bhalogari.com/api/cars/fuel-type/",
  dataUrl: "api/cars/fuel-type/",
};
export default FuelFilter;
