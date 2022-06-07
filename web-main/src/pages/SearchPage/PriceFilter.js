import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PriceFilter() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>
          <h4 className="font-bold">Price</h4>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ul className="ml-3">
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="0" />} label="1 - 10 Lacs" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="1" />} label="10 to 20 Lacs" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="2" />} label="20 to 30 Lacs" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="3" />} label="30 to 40 Lacs" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="4" />} label="40 to 50 Lacs" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="5" />} label="50 Lacs or above" />
            </li>
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default PriceFilter;
