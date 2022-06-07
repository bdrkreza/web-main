import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 200,
    // width: "100%",
    
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
    // background: "red",
    "& .MuiSelect-select:focus": {
      background: "transparent",
    },
    "& .MuiSelect-selectMenu": {
      padding: "27px 0",
    },
    [theme.breakpoints.between("xs", "md")]: {
      padding: "0px 30px",
    },
  },
  noUnderline: {
    "&.MuiInput-underline": {
      "&::before": {
        content: "none",
      },
    },
  },
  menuPaper: {
    maxHeight: 400,
    minWidth: "215px !important",
  },
  firstPart: {
    "@media(max-width: 1023px)": {
      display: "none"
    }
  }
}));

export default function SimpleSelect({
  onChange,
  menulist: list,
  value,
  keys,
  classname,
  buttonname,
  buttonname2,
}) {
  const classes = useStyles();

  // if(keys[0] === "model_id") {

  // }

  return (
    <FormControl className={(classes.formControl, classname)}>
      <Select
        IconComponent={NavigateNextIcon}
        disableUnderline
        value={value}
        onChange={onChange}
        displayEmpty
        classes={classes.selectEmpty}
        className={classes.selectEmpty}
        inputProps={{ "aria-label": "Without label" }}
        // MenuProps={classes.selectEmpty}
        MenuProps={{ classes: { paper: classes.menuPaper } }}
      >
        <MenuItem value="" disabled>
          <span className={classes.firstPart}>{buttonname}&nbsp;</span>
          <strong>{buttonname2}</strong>
        </MenuItem>
        {list.map((l, index) => {
          return (
            <MenuItem key={index} value={l[keys[0]]}>
              {l[keys[1]]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
