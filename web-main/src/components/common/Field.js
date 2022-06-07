import React, { useRef } from "react";
import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import axios from "axios";
import SelectField from "./SelectField";

const Field = React.memo(
  ({ type, value, label, onChange, defaultValue, onSubmit }) => {
    const contact_number = useRef(null);

    React.useEffect(() => {
      (async () => {
        const response = await axios.get(
          "http://localhost:8000/api/user/profile/"
        );

        if (response.statusText === "OK") {
          contact_number = response.data[0].contact_number;
        }
      })();
    }, []);

    if (type === "input") {
      return (
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-emp_id">{label}</InputLabel>
          <OutlinedInput
            value={label}
            autoComplete="off"
            fullWidth
            onChange={onChange}
            placeholder={defaultValue}
            // error
            // helperText="Incorrect Entry"j
            labelWidth={135}
          />
        </FormControl>
      );
    } else if (type === "gender")
      return <SelectField flag="gender" label={label} onChange={onChange} />;
    else if (type === "area")
      return <SelectField flag="area" label={label} onChange={onChange} />;
  }
);

export default Field;
