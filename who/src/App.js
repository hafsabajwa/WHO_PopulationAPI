import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBarComponent from "./Components/SearchBarComponent";
import PageSizeComponent from "./Components/PageSizeComponent";
import Pagination from "./Components/Pagination";

import Table from "./Table.js";

function App() {
  /* Create state:
        - apiData: List containing dictionaries of countries from API.
        - searchQuery: The query parameter that should be added to &search=
        - pageNumber: The page that is requested
  */
  //we use useState which is a built-in feature of react, useState is like props but in useState all the things in useEffect shall work.
  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(); // Default = No search query
  const [pageNumber, setPageNumber] = useState(1); //Default = Page 1
  const [pageSize, setPageSize] = useState(10); // setting default pagesize 10 



  useEffect(() => {
    // All parameters are appended to this URL.
    let apiQuery = "https://dhis2-app-course-api.ifi.uio.no/api?";

    // If searchQuery isn't empty add &search=searchQuery to the API request.
    if (searchQuery) {
      apiQuery = apiQuery + "&search=" + searchQuery;  
    }

    // Add what page we are requesting to the API request.
    apiQuery = apiQuery + "&page=" + pageNumber;

    // set Page Size.
  //  if (pageSize) {
    apiQuery = apiQuery + "&pageSize=" + pageSize;
    console.log("page size is" + pageSize);
    // Query data from API.
    console.log("Querying: " + apiQuery);
    fetch(apiQuery)                          
      .then((results) => results.json())
      .then((data) => {
        // Then add response to state.
        setApiData(data);
      });
  }, [searchQuery, pageNumber, pageSize]); // Array containing which state changes that should re-reun useEffect()

  return (
    <div className="App">
      <h1>Country Search</h1>
      <SearchBarComponent setSearchQuery={setSearchQuery} />
      <Table apiData={apiData} pageNumber={pageNumber} pageSize={pageSize} />
      <Pagination apiData = {apiData} setPageNumber = {setPageNumber}/>

      <p>page size</p>
      <PageSizeComponent pSize = {pageSize} setPSize = {setPageSize}  />

    </div>
  );
}

export default App;
