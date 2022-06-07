import {Snackbar, makeStyles} from "@material-ui/core";

import CircularProgress from "@material-ui/core/CircularProgress";
import Cryptr from "cryptr";
import Joi from "joi-browser";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";
import RenderCalender from "@components/common/Calendar";
import RenderInput from "@components/common/Input";
import RenderSelect from "@components/common/Select";
import {StyledButton} from "@styles/global/Button";
import {api} from "@configs/configs";
import formFunction from "@utils/formData";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: "20px",
    "& > div": {
      width: "calc(50% - 10px)",
      "@media (max-width: 767px)": {
        width: "100%",
      },
    },
    "& .MuiFormHelperText-root.Mui-error": {
      position: "absolute",
      bottom: "-15px",
      left: "0",
      marginLeft: "0",
    },
  },

  formItem: {
    width: "calc(50% - 5px)",
    marginBottom: "15px",
  },
}));

const ProfileForm = ({accountType, profileImage, updateInputs}) => {
  console.log("update inputs----" + updateInputs);
  const classes = useStyles();
  const access_token = localStorage.getItem("access_token");
  const cryptr = new Cryptr(process.env.REACT_APP_SECRET_KEY);
  const [status, setStatus] = React.useState("not submitted");
  const [open, setOpen] = React.useState(false);
  const [snackMsg, setSnakMsg] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);
  const [loginRedirect, setLoginRedirect] = React.useState(false);
  const [date, setDate] = React.useState();
  const history = useHistory();

  const [inputs, setInput] = React.useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    gender: "",
    date_of_birth: ``,
    address: "",
    user_district: "",
    post_code: "",
    country: "",
    nid_number: "",
    tin_number: "",
  });

  const inputRef = React.useRef(inputs);
  const [inputErrors, setError] = React.useState({});
  const schema = {
    first_name: Joi.string().min(3).max(20).required().label("FirstName"),
    last_name: Joi.string().min(3).max(20).required().label("LastName"),
    contact_number: Joi.string()
      .min(11)
      .max(15)
      .required()
      .label("Contact Number"),
    email: Joi.string()
      .email({minDomainSegments: 2, tlds: {allow: false}})
      .required()
      .label("Email"),
    gender: Joi.string().required().label("Gender"),
    date_of_birth: Joi.string().allow("").label("Date Of Birth"),
    post_code: Joi.number().allow("").label("Zip Code"),
    address: Joi.string().allow("").label("Address"),
    user_district: Joi.number().allow("").label("Area"),
    country: Joi.string().allow("").label("Country"),
    nid_number: Joi.number().allow("").label("Nid"),
    tin_number: Joi.number().allow("").label("Tin"),
  };

  const validateProperty = ({name, value}) => {
    const obj = {[name]: value};
    const singleSchema = {[name]: schema[name]};
    const {error} = Joi.validate(obj, singleSchema);

    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const {error} = Joi.validate(inputs, schema, {abortEarly: false});
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return Object.keys(errors).length === 0 ? {} : errors;
  };

  const handleChange = ({target: input}) => {
    const errors = {...inputErrors};
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    setInput({...inputs, [input.name]: input.value});
    setError(errors);
  };

  const handleDateChange = (Date) => {
    setDate(Date);
    // console.log(Date);
    // console.log(Date.toISOString());
    // var todayDate = Date.toISOString().slice(0, 10);
    // setInput({ ...inputs, date_of_birth: todayDate });
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // const handleYearChange = () => {};

  const handleSubmit = async (e) => {
    setStatus("loading");
    if (date) {
      var todayDate = date.toISOString().slice(0, 10);
      // console.log(todayDate);
    }
    // setInput({ ...inputs, date_of_birth: todayDate });
    // console.log(inputs);
    e.preventDefault();
    const formData = formFunction(profileImage, inputs, accountType);
    const id = JSON.parse(localStorage.getItem("user_id"));
    const newInputs = {...formData, user_id: id, date_of_birth: todayDate};

    if (profileImage) {
      let formData = new FormData();
      formData.append("image", profileImage);

      try {
        const response = await api.post(
          `api/user/profile-image/update/${id}/`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    // console.log(newInputs);

    const errors = validate();
    setError(errors || {});
    if (errors) {
      setStatus("error");
      return;
    }

    const token = cryptr.decrypt(access_token);

    if (accountType === "Individual") {
      try {
        const response = await api.patch(
          `api/user/profile/update/${id}/`,
          newInputs,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setStatus("submitted");
          setSnakMsg("Successfully Update Your Profile!");
          localStorage.removeItem("update");
          setOpen(true);
          setRedirect(true);
        } else {
          setStatus("error");
          setSnakMsg("Something wrong happened!");
          setOpen(true);
        }
      } catch (err) {
        setStatus("error");
        if (err.response) {
          console.log(err);
          setSnakMsg(
            err.response.data.messages[0].message
              ? `${err.response.status}: ${err.response.data.messages[0].message}`
              : `${err.response.status} : ${err.response.data}`
          );
          setOpen(true);
        }
        if (err.response.status === 401) {
          setStatus("error");
          setLoginRedirect(true);
          localStorage.clear();
          history.push("/login");
        }
      }
    } else if (accountType === "Business") {
      try {
        const response = await api.patch(
          `api/user/profile/update/${id}/`,
          newInputs,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setStatus("submitted");
          setSnakMsg("Successfully Update Your Profile!");
          localStorage.removeItem("update");
          setOpen(true);
          setRedirect(true);
        } else {
          setStatus("error");
          setSnakMsg("Something wrong happened!");
          setOpen(true);
        }
      } catch (err) {
        setStatus("error");
        if (err.response) {
          setSnakMsg(
            err.response.data.messages[0].message
              ? `${err.response.status}: ${err.response.data.messages[0].message}`
              : `${err.response.status} : ${err.response.data}`
          );
          setOpen(true);
        }
        if (err.response.status === 401) {
          setStatus("error");
          setLoginRedirect(true);
          localStorage.clear();
          history.push("/login");
        }
      }
    }
  };

  // React.useEffect(() => {
  //   inputRef.current = inputs;
  // }, [inputs]);

  // React.useEffect(() => {
  //   if (localStorage.getItem("inputs") !== null) {
  //     let newInputs = JSON.parse(localStorage.getItem("inputs"));

  //     // setInput({ ...inputs, first_name: newInputs.first_name });
  //     inputs.first_name = newInputs.first_name;
  //     inputs.last_name = newInputs.last_name;
  //     inputs.contact_number = newInputs.contact_number;
  //     inputs.email = newInputs.email;
  //     inputs.date_of_birth = newInputs.date_of_birth;
  //     inputs.gender = newInputs.gender;
  //     inputs.address = newInputs.address;
  //     inputs.nid_number = newInputs.nid_number;
  //     inputs.tin_number = newInputs.tin_number;
  //     inputs.post_code = newInputs.post_code;

  //     localStorage.removeItem("inputs");
  //   }
  // }, []);

  // React.useEffect(() => {
  //   return () => {
  //     localStorage.setItem("inputs", JSON.stringify(inputRef.current));
  //   };
  // }, []);

  React.useEffect(() => {
    if (date) {
      var todayDate = date.toISOString().slice(0, 10);
      console.log(todayDate);
    }
    if (updateInputs === null) {
      try {
        (async () => {
          const id = JSON.parse(localStorage.getItem("user_id"));
          const response = await api.get(`api/user/profile/?user_id=${id}`);

          if (response.statusText === "OK") {
            setInput({
              ...inputs,
              contact_number: response.data.contact_number,
              date_of_birth: todayDate,
            });
          }
        })();
      } catch (err) {
        console.error(err);
      }
    } else {
      const number_type =
        updateInputs.individual_user === true
          ? "nid_number"
          : updateInputs.business_user === true
            ? "tin_number"
            : "nid_number";

      setInput({
        ...inputs,
        first_name:
          updateInputs.first_name === null ? "" : updateInputs.first_name,
        last_name:
          updateInputs.last_name === null ? "" : updateInputs.last_name,
        contact_number:
          updateInputs.contact_number === null
            ? ""
            : updateInputs.contact_number,
        email: updateInputs.email === null ? "" : updateInputs.email,
        address: updateInputs.address === null ? "" : updateInputs.address,
        user_district:
          updateInputs.user_district === null ? "" : updateInputs.user_district,
        date_of_birth:
          updateInputs.date_of_birth === null
            ? `${new Date()}`
            : updateInputs.date_of_birth,
        country: updateInputs.country === null ? "" : updateInputs.country,
        post_code:
          updateInputs.post_code === null ? "" : updateInputs.post_code,
        gender: updateInputs.gender === null ? "" : updateInputs.gender,
        [number_type]:
          updateInputs[number_type] === null ? "" : updateInputs[number_type],
      });
    }
  }, []);

  if (redirect) history.push("/profile-view");
  // Profile page compare
  return (
    <>
      <form className={classes.formGroup}>
        <RenderInput
          name="first_name"
          label="First Name"
          value={inputs.first_name}
          error={inputErrors.first_name}
          helpertext={inputErrors.first_name}
          onChange={handleChange}
        />

        <RenderInput
          name="last_name"
          label="Last Name"
          value={inputs.last_name}
          error={inputErrors.last_name}
          helpertext={inputErrors.last_name}
          onChange={handleChange}
        />

        <RenderInput
          name="contact_number"
          label="Your Mobile Number"
          error={inputErrors.contact_number}
          value={inputs.contact_number}
          onChange={handleChange}
        />

        <RenderInput
          name="email"
          label="Email"
          error={inputErrors.email}
          helpertext={inputErrors.email}
          value={inputs.email}
          onChange={handleChange}
        />

        <RenderCalender
          name="date_of_birth"
          label="Date of Birth"
          value={date ? date : inputs.date_of_birth}
          format="MM-DD-YYYY"
          onChangeFunction={handleDateChange}
        />
        <RenderSelect
          name="gender"
          label="Gender"
          value={inputs.gender}
          error={inputErrors.gender}
          helpertext={inputErrors.gender}
          onChange={handleChange}
          flag="gender"
        />
        <RenderInput
          name="address"
          label="Address"
          value={inputs.address}
          error={inputErrors.address}
          helpertext={inputErrors.address}
          onChange={handleChange}
          // flag="district"
        />
        <RenderInput
          name="post_code"
          label="Zip Code"
          value={inputs.post_code}
          error={inputErrors.post_code}
          helpertext={inputErrors.post_code}
          onChange={handleChange}
        />
        <RenderSelect
          name="user_district"
          label="Area"
          value={inputs.user_district}
          onChange={handleChange}
          flag="district"
        />
        <RenderInput
          name="country"
          // placeholder="Bangladesh"
          value="Bangladesh"
          label="Country"
          onChange={handleChange}
        />

        {accountType === "Individual" ? (
          <RenderInput
            name="nid_number"
            value={inputs.nid_number}
            error={inputErrors.nid_number}
            helpertext={inputErrors.nid_number}
            label="NID"
            onChange={handleChange}
          />
        ) : (
          <RenderInput
            name="tin_number"
            label="Tin Number"
            value={inputs.tin_number}
            error={inputErrors.tin_number}
            helpertext={inputErrors.tin_number}
            onChange={handleChange}
          />
        )}
        {status === "loading" && (
          <CircularProgress
            color="#000"
            size={40}
            style={{margin: "5px auto"}}
          />
        )}
        {status !== "loading" && (
          <StyledButton onClick={handleSubmit} type="submit" primary>
            {/* {status !== "loading" && <p>Update Information</p>} */}
            {updateInputs !== null ? "Update Information" : "Save Information"}
          </StyledButton>
        )}
      </form>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {snackMsg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProfileForm;
