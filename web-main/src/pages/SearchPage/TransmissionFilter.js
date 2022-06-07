import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function TransmissionFilter({ onCheck, selectedSet }) {
  const transmissions = [
    { id: "A", label: "Automatic" },
    { id: "M", label: "Manual" },
  ];
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>
          <span className="font-bold">Transmission</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ul className="ml-3">
            {transmissions.map((t) => {
              const {id,label:name} = t;
              const checked = selectedSet && selectedSet.has(id);
              return (
                <li key={id} style={{ textDecoration: "none" }}>
                  <FormControlLabel
                    control={<Checkbox name={name} />}
                    label={name}
                    onChange={(event) => onCheck(t, event.target.checked)}
                    checked={checked}
                  />
                </li>
              );
            })}
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

TransmissionFilter.propTypes = {
  onCheck: PropTypes.func.isRequired,
  selectedSet: PropTypes.object,
};

export default TransmissionFilter;
