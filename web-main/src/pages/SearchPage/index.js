import React from "react";
import SearchPageUI from "./SearchPage";
// import { useHistory } from "react-router-dom";
// import { SearchContext } from "context/SearchContext";

// TODO will not pass data via useHistory anymore
// export default function SearchPage() {
//   const location = useHistory();

//   return <SearchPageUI
//   data={location.location.state.carData}
//    count={location.location.state.count}
//    url={location.location.state.url}/>;
// }

export default function SearchPage() {
  return <SearchPageUI />;
}
