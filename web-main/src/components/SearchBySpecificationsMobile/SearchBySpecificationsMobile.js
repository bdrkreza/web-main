import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { useHistory} from "react-router-dom";
import styled from "styled-components";
import _ from "lodash";
import {
    ListItem,
    Checkbox,
    Button,
    FormControlLabel,
} from "@material-ui/core";
import {api} from "../../configs/configs";
import SendIcon from "@material-ui/icons/Send";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

//MUI Accordion Imports
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dropdown from "../Dropdown/Dropdown";
import { SEARCHPAGE } from "@routes/paths";



const useStyles = makeStyles((theme) => ({
      tag: {
          display: "flex",
          width: "100%",
          borderRadius: "5px",
          backgroundColor: "#ffffff",
          fontSize: "15px",
          fontWeight: "600",
          fontFamily: "Open Sans",
          textAlign: "left",
          margin: "5px 0px",
          
          "& span": {
              color: "#333",
            //   [theme.breakpoints.down("sm")]: {
            //       fontSize: "15px",
            //   },
            //   [theme.breakpoints.up("sm")]: {
            //       fontSize: "15px",
            //   },
          },
          "& p": {
              color: "#f06424",
              margin: "0",
              fontSize: "15px",
              paddingLeft: "5px",
            //   [theme.breakpoints.down("sm")]: {
            //       fontSize: "15px",
            //       paddingLeft: "5px",
            //   },
            //   [theme.breakpoints.up("sm")]: {
            //       fontSize: "15px",
            //       paddingLeft: "5px",
            //   },
          },
      },
      specifyLink: {
            textDecoration: "none",
            fontSize: "15px",
            color: "#000",
            fontWeight: "400",
            transition: "all ease-in-out 0.4s",
            "& .MuiCheckbox-colorSecondary.Mui-checked": {
                color: "#f06425",
            },
    
            "&:hover": {
                color: "#f06424",
                transition: "all ease-in-out 0.4s",
            },
            "& span": {
                fontSize: "15px",
                [theme.breakpoints.down("sm")]: {
                    fontSize: "12px",
                },
            },
        },
      searchButton: {
            width: "100%",
            display:"flex",
            marginTop: "10px",
            marginBottom: "20px",
            flexDirection: "column",
            alignItems: "center"
      },
      button: {
            padding: "10px 30px",
            fontSize: "20px",
            backgroundColor: "#EE6435",
            color: "#fff",
            fontWeight: "600",
            width: "180px",
            marginTop: "10px",
            border: "2px solid #fff",
            fontFamily: "'Open Sans', sans-serif",
            borderRadius: "35px",
            [theme.breakpoints.down("sm")]: {
                width: "160px",
                padding: "5px 30px",
                fontSize: "15px",
            },
            [theme.breakpoints.down("xs")]: {
                width: "140px",
            },
    
            "&:hover": {
                backgroundColor: "#da5320",
                transition: "all ease-in-out 0.25s",
            },
        },
      closer: {
            position: "absolute",
            top: "5px",
            right: "5px",
            fill: "#333",
      }
      
}));

const SearchBySpecificationsMobile = ({handleDrawerClose}) => {
      // Search Functions
      const [maker, setMaker] = React.useState("");
      const [carMakers, setCarMakers] = React.useState([]);
      const [model, setModel] = React.useState("");
      const [carModels, setCarModels] = React.useState([]);
      const [errorflag, setErrorflag] = React.useState(false);
      const [message, setMessage] = React.useState("");

      

      //------------------------ Car Manufacturer --------------------//
      React.useEffect(() => {
            (async () => {
                try {
                    let response1 = await api.get("api/cars/car-manufacturer/");
    
                    if (response1.status === 200) {
                        // response1.data.sort((a, b) => (a.maker_name > b.maker_name ? 1 : -1));
                        setCarMakers(response1.data);
                    } else {
                          console.log("Something went wrong!");
                    }
                } catch (err) {
                  console.log("Something went wrong!");
                }
            })();
        }, []);

      React.useEffect(() => {
            if (maker !== "") {
                  setCarModels([]);

                  (async () => {
                        try {
                              const response = await api.get(`api/cars/model-list/?maker_name=${maker}`);
                              if (response.status === 200) {
                                    // response.data.result.sort((a, b) =>
                                    //   a.model_name > b.model_name ? 1 : -1
                                    // );
                                    setCarModels(response.data.result);
                              } else {
                                    console.log("Search Alert: Model not available for this brand!");
                              }
                        } catch (err) {
                              console.log("Something went wrong!");
                        }
                  })();
            }
      }, [maker]);




      // Drawer functions
      const classes = useStyles();
      let count = false;
      const history = useHistory();

      const [expanded, setExpanded] = React.useState(false);

      const handleChange = (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
      };

      const [price, setPrice] = React.useState([
            {id: 1, low: 100000, high: 1000000},
            {id: 2, low: 1000000, high: 2000000},
            {id: 3, low: 2000000, high: 3000000},
            {id: 4, low: 3000000, high: 4000000},
            {id: 5, low: 4000000, high: 5000000},
            {id: 6, low: 5000000, high: 500000000},
      ]);
      const [mileage, setMileage] = React.useState([
      {id: 7, low: 1, high: 10000},
      {id: 8, low: 10000, high: 30000},
      {id: 9, low: 30000, high: 50000},
      {id: 10, low: 50000, high: 100000},
      {id: 11, low: 100000, high: 150000},
      {id: 12, low: 150000, high: 999999999999},
      ]);
      const [seat, setSeat] = React.useState([
      {id: 13, low: 2},
      {id: 14, low: 4},
      {id: 15, low: 5},
      {id: 16, low: 7},
      {id: 17, low: 8},
      {id: 18, low: 10},
      ]);
      const [engine, setEngine] = React.useState([
      {id: 19, low: 1, high: 800},
      {id: 20, low: 1000, high: 1499},
      {id: 21, low: 1500, high: 1999},
      {id: 22, low: 2000, high: 2499},
      {id: 23, low: 2500, high: 2999},
      {id: 24, low: 3000, high: 999999999999},
      ]);

      const [queryPrice, setQueryPrice] = React.useState([]);
      const [queryMileage, setQueryMileage] = React.useState([]);
      const [querySeat, setQuerySeat] = React.useState([]);
      const [queryEngine, setQueryEngine] = React.useState([]);

      const handlePrice = (e) => {
            const {name} = e.target;
            const id = `${price[name].id}`;
            const index = _.findIndex(queryPrice, function (o) {
                  return o.id == id;
            });

            if (index !== -1) {
                  const newBox = [...queryPrice];
                  newBox.splice(index, 1);
                  setQueryPrice(newBox);
            } else {
                  setQueryPrice([...queryPrice, price[name]]);
            }
        };

      const handleMileage = (e) => {
            const {name} = e.target;
            const id = `${mileage[name].id}`;
            const index = _.findIndex(queryMileage, function (o) {
                return o.id == id;
            });
            if (index !== -1) {
                const newBox = [...queryMileage];
                newBox.splice(index, 1);
                setQueryMileage(newBox);
            } else {
                setQueryMileage([...queryMileage, mileage[name]]);
            }
        };
    
      const handleSeat = (e) => {
            const {name} = e.target;
            const id = `${seat[name].id}`;
            const index = _.findIndex(querySeat, function (o) {
                return o.id == id;
            });
            if (index !== -1) {
                const newBox = [...querySeat];
                newBox.splice(index, 1);
                setQuerySeat(newBox);
            } else {
                setQuerySeat([...querySeat, seat[name]]);
            }
        };
    
      const handleEngine = (e) => {
            const {name} = e.target;
            const id = `${engine[name].id}`;
            const index = _.findIndex(queryEngine, function (o) {
                return o.id == id;
            });
            if (index !== -1) {
                const newBox = [...queryEngine];
                newBox.splice(index, 1);
                setQueryEngine(newBox);
            } else {
                setQueryEngine([...queryEngine, engine[name]]);
            }
        };

      const handleBrand = (e) => {
            setMaker(e.target.value);
        };

      const handleModel = (e) => {
            setModel(e.target.value);
        };

      let priceLow = '';
      let priceHigh = '';
      let mileageLow = '';
      let mileageHigh = '';
      let capacityLow = '';
      let capacityHigh = '';
      let seating = '';
      let carMaker = '';
      let carModel = '';
    
      const joinFunction = (name) => {
            if (name.length > 0) return name.join(",");
            else {
                return "";
            }
      };
      
    
      const querySet = () => {
            const queryArr = [
                "price_from",
                "price_to",
                "mileage_from",
                "mileage_to",
                "capacity_from",
                "capacity_to",
                "seating",
                "car_maker",
                "car_model"
            ];
    
            const simpleArr = (arrName) => {
                if (arrName.length > 0) count = true;
                const arr1 = [];
                const arr2 = [];
                for (let i = 0; i < arrName.length; i++) {
                    arr1.push(arrName[i].low);
                    arr2.push(arrName[i].high);
                }
    
                return [arr1, arr2];
            };
    
            const simpleArr1 = (arrName) => {
                if (arrName.length > 0) count = true;
                const arr1 = [];
    
                for (let i = 0; i < arrName.length; i++) {
                    arr1.push(arrName[i].low);
                }
    
                return arr1;
            };

    
            const price = simpleArr(queryPrice);
            priceLow = price[0];
            priceHigh = price[1];
            const mileage = simpleArr(queryMileage);
            mileageLow = mileage[0];
            mileageHigh = mileage[1];
            const capacity = simpleArr(queryEngine);
            capacityLow = capacity[0];
            capacityHigh = capacity[1];
            seating = simpleArr1(querySeat);
            carMaker = maker;
            carModel = model;
            if(count==false){
                  if(carMaker.length > 0 || carModel.length > 0){
                        count = true;
                  }
            }

    
            return (
                queryArr[0] +
                "=" +
                joinFunction(priceLow) +
                "&" +
                queryArr[1] +
                "=" +
                joinFunction(priceHigh) +
                "&" +
                queryArr[2] +
                "=" +
                joinFunction(mileageLow) +
                "&" +
                queryArr[3] +
                "=" +
                joinFunction(mileageHigh) +
                "&" +
                queryArr[4] +
                "=" +
                joinFunction(capacityLow) +
                "&" +
                queryArr[5] +
                "=" +
                joinFunction(capacityHigh) +
                "&" +
                queryArr[6] +
                "=" +
                joinFunction(seating) +
                "&" +
                queryArr[7] +
                "=" +
                carMaker +
                "&" +
                queryArr[8] +
                "=" +
                carModel
            );
      };


      const handleSubmit = async (e) => {
            e.preventDefault();
            const queryParam = querySet();
            if ( carMaker !== '' || carModel !== ''){
                  count = true;
            }
            if (count) {
                  try {
                        const {data} = await api.get(`api/cars/search-by-specifications-new/?${queryParam}`);
                        
                        
                        if (data.count > 0) {
                        history.push({
                              pathname: SEARCHPAGE,
                              state: {
                                    carData: data,
                                    count: data.count,
                                    url: `api/cars/search-by-specifications-new/?${queryParam}`,
                              },
                        });
                        handleDrawerClose();
                        } else {
                        setMessage("No listings found!");
                        setErrorflag(true);
                        // notify();

                        }
                  } catch (err) {
                        setMessage("Something went wrong!");
                        setErrorflag(true);
                        // notify();
                  }
            } else {
                  setMessage("Please Select Some Field!");
                  setErrorflag(true);
                  // notify();
            }
        };
        
      //       history.push({
      //       pathname: "/search-page",
      //       state: {
      //             carData: data,
      //             count: data.count,
      //             url: `api/cars/search-by-specifications-new/?${queryParam}`,
      //       },
      // });

      return (
            <div>
                  <HighlightOffIcon
                        onClick={handleDrawerClose}
                        className={classes.closer}
                  />
                  < br />
                  {/* Title */}
                  <TitleDiv>
                        {"Search by "}<span>&nbsp;{"Specifications"}</span>
                  </TitleDiv>

                  < br />
                  {/* // Accordions  */}

                  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary>
                              <div className={classes.tag}><span>Search by </span><p>Price</p></div>
                        </AccordionSummary>
                        <AccordionDetails>
                              <ul style={{listStyleType: "none"}}>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handlePrice} name={0}/>}
                                                label={'1 - 10 Lacs'}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handlePrice} name={1}/>}
                                                label={"10 - 20 Lacs"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handlePrice} name={2}/>}
                                                label={"20 - 30 Lacs"}
                                          />
                                    </li>

                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handlePrice} name={3}/>}
                                                label={"30 - 40 Lacs"}
                                          />
                                    </li>

                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handlePrice} name={4}/>}
                                                label={"40 - 50 Lacs"}
                                          />
                                    </li>

                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handlePrice} name={5}/>}
                                                label={"50 Lacs or above"}
                                          />
                                    </li>
                              </ul>
                        </AccordionDetails>
                  </Accordion>
                  <br />

                  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary>
                              <div className={classes.tag}><span>Search by </span><p>Mileage</p></div>
                        </AccordionSummary>
                        <AccordionDetails>
                              <ul style={{listStyleType: "none"}}>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleMileage} name={0}/>}
                                                label={"10,000 km or below"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleMileage} name={1}/>}
                                                label={"20,000 to 30,000 km"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleMileage} name={2}/>}
                                                label={"30,000 to 50,000 km"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleMileage} name={3}/>}
                                                label={"50,000 to 1,00,000 km"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleMileage} name={4}/>}
                                                label={"1,00,000 to 1,50,000 km"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleMileage} name={5}/>}
                                                label={"Over 1,50,000 km"}
                                          />
                                    </li>
                              </ul>
                        </AccordionDetails>
                  </Accordion>
                  <br />

                  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary>
                              <div className={classes.tag}><span>Search by </span><p>Seating Capacity</p></div>
                        </AccordionSummary>
                        <AccordionDetails>
                              <ul style={{listStyleType: "none"}}>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleSeat} name={0}/>}
                                                label={"2 seats"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleSeat} name={1}/>}
                                                label={"4 seats"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleSeat} name={2}/>}
                                                label={"5 seats"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleSeat} name={3}/>}
                                                label={"7 seats"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleSeat} name={4}/>}
                                                label={"8 seats"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleSeat} name={5}/>}
                                                label={"10 seats or above"}
                                          />
                                    </li>
                              </ul>
                        </AccordionDetails>
                  </Accordion>
                  <br />

                  <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary>
                              <div className={classes.tag}><span>Search by </span><p>Engine Capacity</p></div>
                        </AccordionSummary>
                        <AccordionDetails>
                              <ul style={{listStyleType: "none"}}>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleEngine} name={0}/>}
                                                label={"800 cc or less"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleEngine} name={1}/>}
                                                label={"1,000 to 1,499 cc"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleEngine} name={2}/>}
                                                label={"1,500 to 1,999 cc"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleEngine} name={3}/>}
                                                label={"2,000 to 2,499 cc"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleEngine} name={4}/>}
                                                label={"2,500 to 2,999 cc"}
                                          />
                                    </li>
                                    <li
                                          className={classes.specifyLink}
                                          style={{textDecoration: "none"}}
                                    >
                                          <FormControlLabel
                                                control={<Checkbox onChange={handleEngine} name={5}/>}
                                                label={"3,000 cc or above"}
                                          />
                                    </li>
                              </ul>
                        </AccordionDetails>
                  </Accordion>
                  <br />

                  <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary>
                              <div className={classes.tag}><span>Search by </span><p>Maker</p></div>
                        </AccordionSummary>
                        <AccordionDetails>
                              <ListItem>
                                    <Dropdown
                                          className={classes.dropdownbar}
                                          buttonname={"Select"}
                                          buttonname2={"Brand"}
                                          value={maker}
                                          onChange={handleBrand}
                                          keys={["maker_name", "maker_name"]}
                                          menulist={carMakers}
                                    />
                              </ListItem>
                        </AccordionDetails>
                  </Accordion>
                  <br />

                  <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary>
                              <div className={classes.tag}><span>Search by </span><p>Model</p></div>
                        </AccordionSummary>
                        <AccordionDetails>
                              <ListItem>
                                    <Dropdown
                                          buttonname={"Select"}
                                          buttonname2={"Model"}
                                          onChange={handleModel}
                                          value={model}
                                          keys={["model_name", "model_name"]}
                                          menulist={carModels}
                                    />
                              </ListItem>
                        </AccordionDetails>
                  </Accordion>



                  <div className={classes.searchButton}>
                        <div>
                              {errorflag? <ErrorDiv>{message}</ErrorDiv> : ''}
                        </div>
                        <div>
                              <Button
                              variant="contained"
                              onClick={handleSubmit}
                              className={classes.button}
                              endIcon={<SendIcon/>}
                              >
                              {"Search"}
                              </Button>
                        </div>
                  </div>
                  
            </div>
      );
};

//Title CSS
const TitleDiv = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  font-weight: 700;
  padding-bottom: 20px;
  text-align: left;
  span {
    color: #f06425;
    text-transform: capitalize;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    padding-bottom: 5px;
  }
  @media (max-width: 340px) {
    font-size: 14px;
  }
`;

const ErrorDiv = styled.div`
  padding: 10px;
  margin-top: 10px;
  color: white;
  border: 1px solid grey;
  font-weight: 700;
  background-color: #EE6435;
  border-radius: 5px;
`;

export default SearchBySpecificationsMobile;