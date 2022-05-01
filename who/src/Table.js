import React, { useState } from "react";
import "./style.css";

function Table(props) {

  let [currentPage, setCurrentPage] = useState(props.pageNumber); 
  const [pageSize, setPageSize] = useState(props.pageSize); 
  if (!props.apiData.results) {
    
    return <p>Loading...</p>;
  } else {
    let result = props.apiData.results; 
    let last = currentPage * props.pageSize;
    let currentCountries = result.slice(0, last); 
    const renderRows = currentCountries.map((list, i) => {
      return ( 
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
