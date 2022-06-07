import Cryptr from "cryptr";

const getToken = () => {
  const cryptr = new Cryptr(process.env.REACT_APP_SECRET_KEY);
  var token = "";
  try {
    const access_token = localStorage.getItem("access_token");
    token = cryptr.decrypt(access_token);
    return token;
  } catch (err) {
    console.error(err);
    return token;
  }
};

export { getToken };
