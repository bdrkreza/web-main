import React from "react";
import "date-fns";
// import { FormControl, TextField } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { createTheme } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const defaultMaterialTheme = createTheme({
  palette: {
    primary: deepOrange,
  },
  overrides: {
    MuiPickersYear: {
      year: {
        width: "inherit",
        margin: "0px auto",
      },
      yearSelected: {
        fontSize: "40px",
      },
    },
    MuiPickersToolbarButton: {
      toolbarBtn: {
        marginLeft: "40px",
      },
    },
  },
});

const RenderCalender = ({ name, label, onChangeFunction, value, format, ...rest }) => {
  return (
    // <FormControl>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DatePicker
          // mask="____/__/__"
          label={label}
          name={name}
          value={value && value}
          dateFormat="MM-DD-YYYY"
          // format={format}
          maxDate={new Date()}
          // onChange={() => onChange(Date)}
          onChange={onChangeFunction}
          openTo="year"
          views={["year", "month", "day"]}
          // animateYearScrolling
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
    // </FormControl>
  );
};

export default RenderCalender;
