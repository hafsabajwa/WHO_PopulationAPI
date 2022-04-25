function PageSizeComponent({pSize, setPSize}){
  const onChange = (e) => {
    setPSize(e.target.value)

    
  };

  return (
      <select name = "Results per page:"  onChange = {onChange}  >
      
      <option value = "10"> 10 </option>
      <option value = "20"> 20 </option>
      <option value = "50"> 50 </option>
     
      </select>
  )}

export default PageSizeComponent;