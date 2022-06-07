import { FormControl, InputLabel, MenuItem, Select, makeStyles } from "@material-ui/core";

import React from "react";
import { api } from "@configs/configs";
const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 412,
  },
}));

const RenderSelect = ({ name, label, onChange, flag, error, style, ...rest }) => {
  const classes = useStyles();
  const [sex] = React.useState(["Male", "Female", "Others"]);
  const [district, setDistrict] = React.useState([]);
  let options = [];
  flag === "gender" ? (options = sex) : (options = district);

  React.useEffect(() => {
    try {
      (async () => {
        const response = await api.get(`api/locations/district/`);

        setDistrict(response.data);
      })();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <FormControl variant="outlined" error={error} className={classes.formControl}>
      <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
      <Select
        {...rest}
        name={name}
        // disabled={label === "Area" && true}
        onChange={onChange}
        label={label}
      >
        {options.map((item, index) => (
          <MenuItem value={flag === "gender" ? item[0] : item.district_id} key={index + 1}>
            {item.district_name ? item.district_name : item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RenderSelect;
