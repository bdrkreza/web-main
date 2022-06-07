import React from "react";
import { FormControl, TextField, FormHelperText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textfield: {
    "&.MuiInputBase-input": {
      cursor: "pointer",
    },
  },
}));

const RenderInput = ({ name, value, label, error, placeholder, helpertext, onChange, labelWidth, input, ...rest }) => {
  const classes = useStyles();
  const notEditable = ["Country", "Your Mobile Number"];
  return (
    <FormControl variant="outlined" error={error}>
      <TextField
        {...rest}
        // className={classes.textfield}
        // disabled={label === "Address" && true}
        value={value && value}
        label={label}
        name={name}
        autoComplete="off"
        fullWidth
        onChange={label !== "Your Mobile Number" && label !== "Country" && onChange}
        placeholder={placeholder}
        variant="outlined"
      />
      <FormHelperText>{helpertext}</FormHelperText>
    </FormControl>
  );
};

export default RenderInput;
