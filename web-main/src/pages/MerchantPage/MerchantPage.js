import React, { useEffect, useState } from "react";
import MerchantCoverphoto from "components/MerchantProfile/MerchantCoverphoto";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import MerchantDetails from "components/MerchantProfile/MerchantDetails";
import MerchantMailDetails from "components/MerchantProfile/MerchantMailDetails";
import SafetyTips from "components/MerchantProfile/SafetyTips";
import MerchantContact from "components/MerchantProfile/MerchantContact";
import MerchantCarList from "components/MerchantProfile/MerchantCarList";
import MerchantRecentlyAdded from "components/MerchantProfile/MerchantRecentlyAdded";
import UserAvatar from "./avatar.png";
import Grid from "@material-ui/core/Grid";
import { api, msfApi } from "@configs/configs";
import { Phone } from "@material-ui/icons";


function MerchantPage(props) {
  // const { state } = useLocation();
  // const { merchant_id } = state;
  // console.log("Merchant Page",props)
  const location = useLocation();
  // console.log("porps", props);
  // console.log("location", location);
  const value = location.pathname;
  // console.log("value =>", value);
  // console.log("D", value)
  // console.log("Type of", typeof value);
  const y = parseInt(value.slice(7));
  // console.log("val =>", y);
  // const str_y = y.toString();
  // console.log(typeof str_y);
  // const [id, setId] = useState([]);
  // setId(y);
  // console.log("ID =>", id);
  // const history = useHistory();
  // const { location } = history;
  // console.log("Lcoation stat",location.state)
  // console.log("MErchanr pagve", location.state)
  //   const id = location.state.merchant_id
  // const history = useLocation();
  // console.log(props.location.state);
  // const [loading, setLoading] = useState(true);
  // let x = parseInt(history.location.state?.merchant_id);
  // console.log("X =>",x);

  // console.log("Path =>", location.pathname);
  //   console.log("State",location.state.merchant_id)

  // let v = [];
  const [data, setData] = useState([]);
  const [car, setCar] = useState([]);
  const [message, setMessage] = useState([]);
  const [detail, setDetail] = useState();
  const [backdropUrl, setBackdropUrl] = useState();
  const [logoUrl, setLogoUrl] = useState();
  const [name, setName] = useState();
  const [address,setAddress] = useState();
  const [singleUser, setSingleUser] = useState();
  const [singleAddress, setSingleAddress] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  useEffect(async () => {
    try {
      // Expect to have the merchant_id
      // const id = parseInt(location.state.merchant_id);
      // const id = String(location.state.merchant_id);
      // console.log("ID =>",id);
      // const name = location.state.name;
      // console.log("merchant name", name);
      // const value = await api.get(`api/user/profile/?user_id=${y}`);
      // const { v } = await axios.get(`bg-msf.bhalogari.com/api/store/41`);
      // bg-msf.herokuapp.com/api/store/23
      // https://api-a.bhalogari.com/api/merchant-storefront/store/23/
      // console.log("User Profile", data);
      // /api/merchant/41
      // const mer = await api.get(`/api/merchant/3`);
      const carData = await api.get(`api/cars/search-by-id/?page=1&user_id=${y}`);

      // SUSPECT UNUSED because the API does not return complete data. Use msfApi
      const store = await api.get(`api/merchant-storefront/store/${y}/`);
      // console.log("Message =>", store.data);

      // TODO this API isn't complete, it does not reutnr all merchant data
      // const merchantInfo = await api.get(`api/merchant-storefront/store/${y}/`);
      const { data: merchantInfo } = await msfApi.get(`api/merchant/${y}`);
      // console.log("Car Data inside useEffect=>", carData.data?.results);
      // console.log("Merchant Data =>", v);
      // console.log("merchantInfo (MSF) =>", merchantInfo);
      // console.log("Merchant Info Merchant object =>", merchantInfo.merchant);
      // console.log("Merchant Info Store object =>", merchantInfo.store);
      setData(data);
      setCar(carData.data?.results);
      setName(merchantInfo.store?.name);
      setSingleUser(merchantInfo.merchant?.first_name + " " + merchantInfo.merchant?.last_name)
      setSingleAddress(merchantInfo.merchant?.address);
      setEmail(merchantInfo.merchant?.email);
      setPhone(merchantInfo.merchant?.contact_number);
      setLogoUrl(merchantInfo.store.logo_url);
      setBackdropUrl(merchantInfo.store.backdrop_url);
      setDetail(merchantInfo.store?.aboutus)
      setMessage(store?.data);
      setAddress(merchantInfo.store?.address);
      // TODO fetch the car?
    } catch (err) {
      console.error(err);
    }

    // console.log("Data Outside useEffect=>",data);
    // console.log("Car Data Outside UseEffect =>", car);
    // console.log("Namee => ", data.username);
  }, []);

  // console.log("Name =>", singleAddress);
  /* 
  // SUSPECT UNUSED: 
  // this useEffect only fetches and print
  useEffect(() => {
    // axios.get(`https://bg-msf.herokuapp.com/api/merchant/${y}/`).then((response) => {
    //   console.log("Response =>",response);
    //   setDetail(response);
    // })
    axios.get(`https://bg-msf.herokuapp.com/api/merchant/${y}`,{
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "*",
      },
    }).then((response) => {
      console.log("Response",response);
    })

  },[])
  */

  // console.log("Message =>", message);
  // for(var i = 0; i < car.length; i++){
  //   console.log("Car", car[i]);
  //   v.push(car[i]);
  // }

  // v.sort(function(a, b){
  //   return new Date(b.created_at) - new Date(a.created_at);
  // })
  // console.log("V after Sort =>", v);

  // setArrange(v)

  // console.log("Sort", arrange);
  // console.log("ID =>",id)
  // console.log("Message =>", message);
  // console.log("Car Outside outside useEffect=>",car);
  // console.log("car information created at =>", car.car_id);
  // console.log("Namee outside useEffect=> ", data.username,data.contact_number);
  // console.log("Image =>", data.image_url)
  let userName = "";
  if (name) {
    userName = name;
  }
  else{
    userName = singleUser;
  }

  let image="";
  if(logoUrl){
    image = logoUrl
  }
  else{
    image = UserAvatar
  }
  
  let msg = "";
  if(detail){
    msg = detail;
  }
  else{
     msg = "No info about the merchant"
  }

  let place = "";
  if(address){
    place = address
  }
  else if(singleAddress){
    place = singleAddress
  }else{
    place = ""
  }


  //merchantInfo.merchant?.first_name
  return (
    <>
      <div className="md:container  md:mx-auto ">
        {/* <MerchantCoverphoto name={userName} image={data.image} /> */}
        <MerchantCoverphoto name={userName} image={image} backdrop={backdropUrl} />
        <Grid container maxWidth="xl">
          <Grid container spacing={2} className="p-2">
            <Grid item xs={12} md={9}>
              <MerchantDetails message={msg}/>
              <MerchantCarList car={car} />
            </Grid>
            <Grid item xs={12} md={3}> 
              <MerchantContact name={userName} address={place} number={phone} email={email} />
              <MerchantRecentlyAdded car={car}/>
              <MerchantMailDetails />
              <SafetyTips />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default withRouter(MerchantPage);
