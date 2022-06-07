import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MileageFilter() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>
          <span className="font-bold">Mileage</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ul className="ml-3">
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="0" />} label="10,000 km or below" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="1" />} label="10,000 to 30,000 km" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="2" />} label="30,000 to 50,000 km" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="3" />} label="50,000 to 1,00,000 km" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="4" />} label="1,00,000 to 1,50,000 km" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="5" />} label="Over 1,50,000 km" />
            </li>
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default MileageFilter;
