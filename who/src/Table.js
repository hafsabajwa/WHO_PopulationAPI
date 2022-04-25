import React, { useState } from "react";
import "./style.css";

function Table(props) {

  let [currentPage, setCurrentPage] = useState(props.pageNumber); //Default = Page 1
  const [pageSize, setPageSize] = useState(props.pageSize); // Default Page size 10

  if (!props.apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {
    // Write your code here:


    let result = props.apiData.results;
    // Logic for displaying current Countries 
   
    let last = currentPage * props.pageSize;
    let currentCountries = result.slice(0, last); 

    const renderRows = currentCountries.map((list, i) => {
      return ( //setting key with index i
        <tr key={i}>             
          <td>{list.Country}</td>
          <td>{list.Continent}</td>
          <td>{list.Population}</td>
          <td>{list.PopulationGrowth}</td>
        </tr>
      );
    });

   
   

    return (
      <>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Continent</th>
              <th>Population</th>
              <th>Population Growth</th>
            </tr>
          </thead>
          <tbody>{renderRows}</tbody>
        </table>
    
      </>
    );
  }
}

export default Table;
