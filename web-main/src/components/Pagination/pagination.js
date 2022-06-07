import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import { SearchContext } from "context/SearchContext";
import { api } from "@configs/configs";

function Pagination({
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
  listView,
  offsetToScroll,
  count,
  url,
  sortMode = "year-asc",
}) {
  const MAX_BUTTON = 6;

  const searchContext = useContext(SearchContext);
  // TODO Must stop using passing data via history object
  // use Context instead
  // const history = useHistory();
  // if (history.location.pathname === "/search-page") {
  //   data = history.location.state.carData.results;
  //   count = history.location.state.count;
  //   url = history.location.state.url;
  // }

  const pages = count % dataLimit > 0 ? parseInt(count / dataLimit) + 1 : parseInt(count / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState(data);

  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  let new_url = "";

  function goToNextPage() {
    new_url = nextPage;
    (async () => {
      await api.get(new_url).then((res) => {
        if (res.status === 200) {
          setPageData(res.data.results);
          setNextPage(res.data.next);
          setPrevPage(res.data.previous);
        }
      });
    })();
    scrollToTop();
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    new_url = prevPage;
    (async () => {
      await api.get(new_url).then((res) => {
        if (res.status === 200) {
          setPageData(res.data.results);
          setNextPage(res.data.next);
          setPrevPage(res.data.previous);
        }
      });
    })();
    scrollToTop();
    setCurrentPage((page) => page - 1);
  }

  React.useEffect(() => {
    (async () => {
      // console.log(`URL ${url}`);
      if (url === "") return; // guard for unnecessary fetch
      await api.get(url).then((res) => {
        if (res.status === 200) {
          setPageData(res.data.results);
          // console.log(res.data.results)
          setNextPage(res.data.next);
          setPrevPage(res.data.previous);
        }
      });
    })();

    setCurrentPage(1);
  }, [url]);

  useEffect(() => {
    // console.debug("Sort Mode ",sortMode)
    if (sortMode === "year-asc") {
      setPageData([...pageData.sort((a, b) => (a.car_year > b.car_year ? 1 : -1))]);
    } else if (sortMode === "year-desc") {
      setPageData([...pageData.sort((a, b) => (a.car_year > b.car_year ? 1 : -1)).reverse()]);
    } else if (sortMode === "price_asc") {
      setPageData([
        ...pageData.sort((a, b) =>
          parseFloat(a.fixed_price.split(" ")[0]) > parseFloat(b.fixed_price.split(" ")[0]) ? 1 : -1
        ),
      ]);
    } else {
      setPageData([
        ...pageData
          .sort((a, b) => (parseFloat(a.fixed_price.split(" ")[0]) > parseFloat(b.fixed_price.split(" ")[0]) ? 1 : -1))
          .reverse(),
      ]);
    }
  }, [sortMode]);

  function changePage(event) {
    const pageNumber = parseInt(event.target.textContent);
    (async () => {
      // console.log(url, data)
      await api.get(url + "&page=" + pageNumber).then((res) => {
        if (res.status === 200) {
          setPageData(res.data.results);
          setNextPage(res.data.next);
          setPrevPage(res.data.previous);
        }
      });
    })();
    setCurrentPage(pageNumber);
    scrollToTop();
  }

  // function getPaginatedData() {
  //   const startIndex = currentPage * dataLimit - dataLimit;
  //   const endIndex = startIndex + dataLimit;
  //   return pageData.slice(startIndex, endIndex);
  // }

  // const getPaginationGroup = () => {
  //   let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
  //   return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  // };

  const scrollToTop = () => {
    window.scrollTo({
      // top: 1530,
      top: offsetToScroll - 190,
      // top: `${ServicesRef.current .offsetTop ? offsetTop: 0}`,
      // top: ServicesRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  let pathname = location.pathname.slice(1);

  return (
    <>
      {/* show the posts, 10 posts at a time */}
      {pageData.map((d, idx) => (
        <RenderComponent key={idx} car={d} listView={listView} pathName={pathname} />
      ))}
      {pageData.length === 0 && <h1>No more data to show</h1>}
      {/* {console.log("paginate==",getPaginatedData().length)} */}

      {pages > 1 && (
        <PageList>
          {/* previous button */}
          <button key={"prev"} onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? "disabled" : ""}`}>
            <NavigateBeforeIcon />
          </button>

          {/* show page numbers */}
          {_.range(pages)
            .filter((item, index) => currentPage - 2 <= index && index <= currentPage + 2)
            .map(
              (item, index) =>
                index < MAX_BUTTON && (
                  <button
                    key={index}
                    onClick={changePage}
                    className={`paginationItem ${currentPage === item + 1 ? "active" : null}`}
                  >
                    <span>{item + 1}</span>
                  </button>
                )
            )}

          {/* next button */}
          <button key={"next"} onClick={goToNextPage} className={`next ${currentPage === pages ? "disabled" : ""}`}>
            <NavigateNextIcon />
          </button>
        </PageList>
      )}
    </>
  );
}

const PageList = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    &.paginationItem {
      color: #666;
      background: #fff;
      border: 2px solid #666;
      padding: 10px 15px;
      border-radius: 50%;
      height: 45px;
      // width: 45px;
      position: relative;
      margin: 0 5px;
      cursor: pointer;
    }
    &.prev,
    &.next {
      background: #fff;
      border: none;
      border-radius: 50%;
      padding: 10px;
      color: #666;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
      margin: 0 10px;
      cursor: pointer;
    }

    &.paginationItem.active {
      background: #666;
      color: #fff;
      pointer-events: none;
    }

    &.prev.disabled,
    &.next.disabled {
      pointer-events: none;
      box-shadow: none;
      color: #999;
    }
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;

export default Pagination;
