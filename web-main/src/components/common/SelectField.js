import React from "react";
import { Select, FormControl, InputLabel, makeStyles } from "@material-ui/core";
import districts from "../../utils/districts";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 412,
  },
}));

const SelectField = ({ label, onChange, flag }) => {
  const classes = useStyles();

  const [sex, setSex] = React.useState(["Male", "Female"]);
  const [district, setDistrict] = React.useState(districts);
  let options = "";
  flag === "gender" ? (options = sex) : (options = district);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
      <Select onChange={onChange} label={label}>
        {options.map((item, index) => (
          <option value={index} key={index}>
            {item.name ? item.name : item}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
