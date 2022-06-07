export default function formFunction(profileImage, inputs, accountType) {
  let individual_user = false;
  let business_user = false;
  if (accountType === "Individual") {
    individual_user = true;
  } else {
    business_user = true;
  }

  // const user_type =
  //   individual_user === true ? "individual_user" : "business_user";

  // let business_user = false;
  // if(user_type !== "individual_user") {

  // }

  const formData = {
    first_name: inputs.first_name,
    last_name: inputs.last_name,
    email: inputs.email,
    gender: inputs.gender,
    contact_number: inputs.contact_number,
    individual_user: individual_user,
    business_user: business_user,
    // [user_type]: true,
  };

  // if (profileImage !== "/assets/user.png" && profileImage != null) {
  //   if (profileImage.startsWith("http")) {
  //     formData["image"] = toDataUrl(profileImage, function (myBase64) {
  //       return myBase64;
  //     });
  //   } else {
  //     formData["image"] = profileImage;
  // formData["image"] = null;
  //   }
  // }

  if (inputs.country !== "") {
    formData["country"] = inputs.country;
  }

  if (inputs.date_of_birth !== "") {
    formData["date_of_birth"] = inputs.date_of_birth;
  }
  if (inputs.post_code !== "") {
    formData["post_code"] = inputs.post_code;
  }
  if (inputs.user_district !== "") {
    formData["user_district"] = inputs.user_district;
  }

  if (inputs.address !== "") {
    formData["address"] = inputs.address;
  }

  if (inputs.tin_number !== "") {
    formData["tin_number"] = inputs.tin_number;
  }

  if (inputs.nid_number !== "") {
    formData["nid_number"] = inputs.nid_number;
  }

  return formData;
}
// TODO Suspect unused
// function toDataUrl(url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     var reader = new FileReader();
//     reader.onloadend = function () {
//       callback(reader.result);
//     };
//     reader.readAsDataURL(xhr.response);
//   };
//   xhr.open("GET", url);
//   xhr.responseType = "blob";
//   xhr.send();
// }
