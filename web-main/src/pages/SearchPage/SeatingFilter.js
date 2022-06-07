import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SeatingFilter() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>
          <span className="font-bold">Seats</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ul className="ml-3">
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="1" />} label="2 Seats" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="2" />} label="4 Seats" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="3" />} label="5 Seats" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="4" />} label="7 Seats" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="5" />} label="8 Seats" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="6" />} label="10 Seats or above" />
            </li>
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default SeatingFilter;
