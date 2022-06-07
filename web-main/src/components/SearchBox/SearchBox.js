/* TODO
Data still loads from JSON. 
Because we do not have these search phrases in our database yet.
When we collect enough statistics, will have to only query the
search phrases from the API.
*/
import React, { useRef, useState } from "react";
import { makeStyles, Snackbar } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@material-ui/icons/Search";
import { api } from "@configs/configs";
import { SEARCHPAGE,SEARCHEDCARLIST } from "@routes/paths";
import MuiAlert from "@material-ui/lab/Alert";
import styled from "styled-components";
import { useHistory } from "react-router-dom"; // fixed from warnings
import { useSessionStorage } from "react-use";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useQuery } from "react-query";
import sampleAllKeywords from "./searchautocomplete.json";
import Popper from "@mui/material/Popper";

// MUI Custom Styling
const useStyles = makeStyles((theme) => ({
  noBorder: {
    border: "none",
  },
  grow: {
    flexGrow: 1,
    maxWidth: "617px",
    borderRadius: "5px",
    height: "44px",
    lineHeight: "41px",
    boxShadow: "0px 2px 5px rgb(240 100 36 / 16%)",
    "@media(max-width: 1024px)": {
      width: "calc(100% - 15px)",
      margin: "10px 0 10px 7px",
      maxWidth: "inherit",
      boxShadow: "0px 2px 5px rgb(232 232 232)",
      border: "0px solid #f06425",
      lineHeight: "49px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  searchIcon: {
    color: "#f06425",
    borderRadius: "10%",
    border: "2px solid #f06425",
    position: "absolute",
    top: "0px",
    cursor: "pointer",
    textAlign: "center",
    right: "-3px",
    width: "44px",
    height: "44px",
    lineHeight: "52px",
    background: "#fff",
    zIndex: "9",
    transition: "all ease-in-out 0.4s",
    "&:hover": {
      background: "#f06425",
      color: "#fff",
      transition: "all ease-in-out 0.4s",
    },
    "@media(max-width: 1024px)": {
      background: "#f06425",
      top: "3px",
      right: "0px",
      borderRadius: "10%",
      width: "44px",
      height: "44px",
      lineHeight: "52px",
      color: "white",
      border: "2px solid #ff8e5b",
    },
  },
  search: {
    position: "relative",
    "&:hover": {},
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
}));

let arrId = 10;
let arrOrder = "5";

function SearchBox({ onChange }) {
  const refSearchTextBox = useRef();
  const [keywords, setKeywords] = useState([]);
  const [allKeywords, setAllKeywords] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  const [cars, setCars] = useState([]);
  const [text, setText] = useSessionStorage("search-phrase", " ");
  const [open, setOpen] = React.useState(false);
  const [snackMsg, setSnakMsg] = React.useState("");
  const [phrase, setPhrase] = React.useState("");
  const [searchStatus, setSearchStatus] = React.useState("notSubmitted");
  const lang = sessionStorage.getItem("lang");
  const langVariables = JSON.parse(sessionStorage.getItem("langVariables"));
  const [flag, setFlag] = useState(true); // what flag?
  // const [fill, setFill] = useSessionStorage("search-filler", "");

  const { status, data, error, isFetching } = useQuery("keywords-for-searchbox", async () => {
    if (sessionStorage.getItem("recentSearchedKeywords")) {
      const localArrayForSearch = JSON.parse(sessionStorage.getItem("recentSearchedKeywords"));
      // let keywords = removeDuplicatePhrases(localArrayForSearch);
      let keywords = localArrayForSearch;
      setKeywords(keywords);

      // setAllKeywords(removeDuplicatePhrases(sampleAllKeywords));
      setAllKeywords(sampleAllKeywords);
      return keywords;
    } else {
      const { data } = await api.get("/api/cars/search-phrases/");
      let keywords = data.result
        .sort((a, b) => (a.order < b.order ? -1 : 1))
        .sort((a, b) => (a.category < b.category ? -1 : 1));
      // keywords = removeDuplicatePhrases(keywords);
      setKeywords(keywords);
      // setAllKeywords(removeDuplicatePhrases(sampleAllKeywords));
      setAllKeywords(sampleAllKeywords);
      return keywords;
    }
  });

  // Removing duplicate causes more issues
  // Example, TOYOTA may appear multiple times in different categories,
  // Popular, Recent, Recommended.
  // Removing the duplicates will also get rid of grouping.
  // TODO consider remove this function
  const removeDuplicatePhrases = (keywords) => {
    // covert the array to map
    const kMap = {}; // keyword map
    for (const k of keywords) {
      const { phrases, order } = k;
      if (!(phrases in kMap)) {
        kMap[phrases] = order;
      }
    }
    // convert the map to array
    const kArr = []; // keyword array
    for (const [key, value] of Object.entries(kMap)) {
      kArr.push({ phrases: key, order: value });
    }
    return kArr;
  };

  //Styling For the Popper Component in the Autocomplete
  const StyledPopper = styled(Popper)({
    [`& .${autocompleteClasses.listbox}`]: {
      marginTop: "5px",
    },
    [`& .${autocompleteClasses.groupLabel}`]: {
      fontSize: "17px",
      fontWeight: 600,
      color: "white",
      backgroundColor: "#f06425",
      "& ul": {},
    },
  });

  //MUI Autocomplete/ Search Box Functionalities
  const handleChangefromList = (e, v, r, d) => {
    if (e?.type == "click") {
      apiCall(e.target.textContent);
      setText(e.target.textContent);
    } else if (e?.key == "Enter") {
      if (v?.phrases) {
        apiCall(v.phrases);
        setText(v.phrases);
      } else {
        apiCall(v);
        setText(v);
      }
    }
  };

  const handleHighlightChange = (option) => {
    setPhrase(option?.phrases);
  };

  const handleInputBoxClicked = (e) => {
    // console.debug("handleInputBoxClicked")
    // e.stopPropagation();
    const s = sessionStorage.getItem("search-phrase");
    if (s.length > 2) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const handlePopularBrandClicked = (s) => {
    setText(s);
    if (s.length > 2) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const handleInputBoxChanged = (e) => {
    setText(e.target.value); // This set state will be run after this handleChange() returns.
    if (e.target.value !== "") {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const handleClickToSearch = () => {
    if (phrase) {
      apiCall(phrase);
    } else {
      apiCall("");
    }
  };

  const apiCall = async (keyword) => {
    setSearchStatus("loading");
    if (keyword !== "") {
      if (window.location.pathname === "/bikes") {
        const { data } = await api.get(`api/bikes/search-bike/?q=${keyword}`);
        if (data.count > 0) {
          setCars(data.result);
          history.push({
            pathname: `/searched-bike-list`,
            state: {
              bikeData: data.result,
              count: data.count,
              url: "api/bikes/search-bike/?q=" + keyword,
            },
          });
          setSearchStatus("done");
        } else {
          setSnakMsg("No data found for this search. Please try another Search!");
          setSearchStatus("done");
          open(true);
          setText("");
        }
      } else {
        const { data } = await api.get(`api/cars/search/?q=${keyword}`);
        if (data) {
          setCars(data);
          // console.log("Cars =>" ,cars);
          // Setting the recent search phrases into keywords 
          keywords.splice(5, 0, { id: arrId, phrases: `${keyword}`, category: "Recent", order: arrOrder });
          keywords.pop();
          arrId++;
          parseInt(arrOrder);
          arrOrder++;
          arrOrder = arrOrder.toString();
          sessionStorage.setItem("recentSearchedKeywords", JSON.stringify(keywords));

          history.push({
            pathname: SEARCHEDCARLIST,
            state: {
              carData: data,
              count: data.count,
              url: "api/cars/search/?q=" + keyword,
            },
          });

          setSearchStatus("done");
        } else {
          setSnakMsg("No data found for this search. Please try another Search!");
          setSearchStatus("done");
          setOpen(true);
        }
      }
    } else if (text !== "") {
      if (window.location.pathname === "/bikes") {
        const { data } = await api.get(`api/bikes/search-bike/?q=${text}`);
        if (data.count > 0) {
          setCars(data.result);
          history.push({
            pathname: `/searched-bike-list`,
            state: {
              bikeData: data.result,
              count: data.count,
              url: "api/bikes/search-bike/?q=" + text,
            },
          });
          setSearchStatus("done");
        } else {
          setSnakMsg("No data found for this search. Please try another Search!");
          setSearchStatus("done");
          setOpen(true);
          setText("");
        }
      } else {
        const { data } = await api.get(`api/cars/search/?q=${text}`);
        if (data) {
          setCars(data);

          // Setting the recent search phrases into keywords
          keywords.splice(5, 0, { id: arrId, phrases: `${keyword}`, category: "Recent", order: arrOrder });
          keywords.pop();
          arrId++;
          parseInt(arrOrder);
          arrOrder++;
          arrOrder = arrOrder.toString();
          sessionStorage.setItem("recentSearchedKeywords", JSON.stringify(keywords));

          history.push({
            pathname: SEARCHEDCARLIST,
            state: {
              carData: data.result,
              count: data.count,
              url: "api/cars/search/?q=" + text,
            },
          });

          setSearchStatus("done");
        } else {
          setSnakMsg("No data found for this search. Please try another Search!");
          setSearchStatus("done");
          setOpen(true);
        }
      }
    } else {
      // If the search is empty, send the users to search-page
      // setSnakMsg("Please put some text!");
      // setOpen(true);
      setSearchStatus("done");
      history.push({
        pathname: `/search-page`,
      });
    }
  };

  //SnackBar Functionalities
  const [state] = React.useState({
    vertical: "top",
    horizontal: "center",
  });

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const { vertical, horizontal } = state;

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const SearchSuggestion = () => (
    <div>
      <h1 className="text-base font-bold">Popular Brands</h1>
      <ul>
        <li
          onClick={() => {
            handlePopularBrandClicked("Toyota");
          }}
        >
          Toyota
        </li>
        <li
          onClick={() => {
            handlePopularBrandClicked("Honda");
          }}
        >
          Honda
        </li>
        <li
          onClick={() => {
            handlePopularBrandClicked("Mitsubishi");
          }}
        >
          Mitsubishi
        </li>
        <li
          onClick={() => {
            handlePopularBrandClicked("Nissan");
          }}
        >
          Nissan
        </li>
        <li
          onClick={() => {
            handlePopularBrandClicked("Hyundai");
          }}
        >
          Hyundai
        </li>
      </ul>
    </div>
  );
  return (
    <>
      <div className={classes.grow}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          onClose={handleClose}
          autoHideDuration={1500}
          open={open}
          message={snackMsg}
          key={vertical + horizontal}
        >
          <Alert onClose={handleClose} severity="warning">
            {snackMsg}
          </Alert>
        </Snackbar>

        <div className={classes.search}>
          <Autocomplete
            id="custom-input-demo"
            // options={flag ? keywords : allKeywords}
            options={allKeywords}
            onChange={handleChangefromList}
            onHighlightChange={handleHighlightChange}
            // autoComplete
            autoHighlight
            // open={true}
            // forcePopupIcon
            // openOnFocus
            freeSolo
            clearOnEscape
            noOptionsText={<SearchSuggestion />}
            inputValue={text}
            groupBy={(option) => option.category}
            getOptionLabel={(option) => option.phrases}
            sx={{
              display: "inline-block",
              border: "2px solid #f06424",
              bgcolor: "background.paper",
              borderRadius: "4px",
              maxWidth: "100%",
              width: "calc(100% - 35px)",
              fontFamily: '"Open Sans", sans-serif',
              // marginTop: "-5px",
              height: "44px",
              "& input": {
                // paddingTop: '5px',
                paddingLeft: "20px",
                fontSize: "19px",
                border: "none",
                outline: "none",
                height: "9px",
                color: (theme) => theme.palette.getContrastText(theme.palette.background.paper),
              },
              "& .MuiAutocomplete-endAdornment": {
                display: "none",
              },
              "& .MuiInputBase-root": {
                display: "flex",
                marginTop: "9px",
              },
              "@media(max-width: 1024px)": {
                marginTop: "0px",
                height: "44px",
                fontSize: "19px",
              },
            }}
            PopperComponent={StyledPopper}
            renderInput={(params) => {
              const { InputLabelProps, InputProps, ...rest } = params;
              return (
                <InputBase
                  {...params.InputProps}
                  {...rest}
                  onClick={handleInputBoxClicked}
                  onChange={handleInputBoxChanged}
                  // ref={refSearchTextBox}
                  placeholder={
                    langVariables !== null
                      ? langVariables["top_search_placeholder"].lang_content
                      : "Search by Maker, Model, or Keyword"
                  }
                />
              );
            }}
          />


          <Button onClick={handleClickToSearch} className={classes.searchIcon}>
            {searchStatus !== "loading" && <SearchIcon style={{ marginBottom: "14px" }} />}
            {searchStatus === "loading" && <CircularProgress color="#000" size={30} style={{ margin: "5px 0px" }} />}
          </Button>
        </div>
      </div>
    </>
  );
}

const Button = styled.button`
  &:focus {
    outline: none;
  }
`;

const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code: "TW",
    label: "Taiwan, Province of China",
    phone: "886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];

export default SearchBox;
