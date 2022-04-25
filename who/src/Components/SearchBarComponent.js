import { useState } from "react";
function SearchBarComponent({ setSearchQuery }) {
  const [value, setValue] = useState("");
  const onChange = (e) => {
  //this method shows what we type in searchbar -->onChange
    setValue(e.target.value);
  
  }; 
  const onSearch = () => {
    console.log(document.getElementById("search").value)  //this method shows the results of our desired search-->onSearch
    setSearchQuery(document.getElementById("search").value);
  };

  return (
    <div style={{ margin: "10px" }}>
        Search {" "}
      <input   
        id="search"
        type="text"
        value={value}
        onChange={onChange}  when
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBarComponent;
