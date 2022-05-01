import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBarComponent from "./Components/SearchBarComponent";
import PageSizeComponent from "./Components/PageSizeComponent";
import Pagination from "./Components/Pagination";
import Table from "./Table.js";

function App() {
  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(); 
  const [pageNumber, setPageNumber] = useState(1); 
  const [pageSize, setPageSize] = useState(10); 

  useEffect(() => {
    let apiQuery = "https://dhis2-app-course-api.ifi.uio.no/api?";

    if (searchQuery) {
      apiQuery = apiQuery + "&search=" + searchQuery;  
    }
    apiQuery = apiQuery + "&page=" + pageNumber;
    apiQuery = apiQuery + "&pageSize=" + pageSize;
    console.log("page size is" + pageSize);
    console.log("Querying: " + apiQuery);
    fetch(apiQuery)                          
      .then((results) => results.json())
      .then((data) => {
        setApiData(data);
      });
  }, [searchQuery, pageNumber, pageSize]); 

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
