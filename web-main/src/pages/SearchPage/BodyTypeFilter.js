import React, { useEffect, useState } from "react";
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

function BodyTypeFilter({ dataUrl, onCheck, selectedSet }) {
  const { data: bodyTypes, isFetching } = useQuery("body-type", async () => {
    const { data } = await api.get(dataUrl);
    console.debug("BodyTypeFilter", data);
    return data;
  });

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>
          <span className="font-bold">Body Type</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {isFetching ? (
            <span>Loading</span>
          ) : (
            <ul className="ml-3">
              {bodyTypes.map((bodyType, index) => {
                // const name = bodyType.body_name;
                const { body_name:name, id} = bodyType;
                const checked = selectedSet && selectedSet.has(id)
                // console.log(bodyType,selectedSet)
                return (
                  <li key={index} className="flex flex-col">
                    <FormControlLabel
                      control={<Checkbox name={name} />}
                      checked={checked}
                      label={name}
                      onChange={(event) => onCheck(bodyType,event.target.checked)}
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

BodyTypeFilter.propTypes = {
  dataUrl: PropTypes.string,
  onCheck: PropTypes.func.isRequired,
  selectedSet: PropTypes.object
};

BodyTypeFilter.defaultProps = {
  // dataUrl: "https://backend.bhalogari.com/api/cars/body-type/",
  dataUrl: "api/cars/body-type/",
};

export default BodyTypeFilter;
