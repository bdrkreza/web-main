import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function EngineFilter({ onCheck, selectedSet }) {
  const engines = [
    { id: "0", label: "800 cc or Less"},
    { id: "1", label: "1,000 to 1,499 cc"},
    { id: "2", label: "1,500 to 1,999 cc"},
    { id: "3", label: "2,000 to 2,499 cc"},
    { id: "4", label: "2,500 to 2,999 cc"},
    { id: "5", label: "3,000 cc or above"}
  ]
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>
          <span className="font-bold">Engine Size</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ul className="ml-3">
            {
              engines.map((e) => {
                const {id,label:name} = e;
                const checked = selectedSet && selectedSet.has(id);
                return(
                  <li key={id} style={{ textDecoration: "none" }}>
                      <FormControlLabel 
                        control={<Checkbox name={name} />} 
                        label={name}
                        onChange={(event) => onCheck(e, event.target.checked)}
                        checked={checked}
                     />
                  </li>                  
                )
              })
            }
            {/* <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="0" />} label="800 cc or Less" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="1" />} label="1,000 to 1,499 cc" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="2" />} label="1,500 to 1,999 cc" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="3" />} label="2,000 to 2,499 cc" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="4" />} label="2,500 to 2,999 cc" />
            </li>
            <li style={{ textDecoration: "none" }}>
              <FormControlLabel control={<Checkbox name="5" />} label="3,000 cc or above" />
            </li> */}
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default EngineFilter;
