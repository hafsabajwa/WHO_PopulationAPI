const Pagination = (props) => {
    console.log(props.apiData.pager)
    if (!props.apiData.pager) {
      return <p>Loading...</p>;
    }
  
    let page = props.apiData.pager.page;
    let lastPage = props.apiData.pager.pageCount;
  
  
    const PreviousPage = () => {
      props.setPageNumber(page - 1);
    }
      
    const NextPage = () => {
      props.setPageNumber(page + 1);
    }
  
    const PreviousButton = () => {
      if (page === 1) 
      { 
        return (
          <span>First Page</span>
        )
      }
      else 
      {
        return (<button onClick = {PreviousPage}>Previous</button>
        )
      }
    }
        
    const NextButton = () => {
      if (page === lastPage)
      { 
        return (
          <span>Last page</span>
        )
      }
      else 
      {
        return (
          <button onClick = {NextPage}> Next </button>
        )
      }
    }
  
    return (<div className = "Pagination">
      <PreviousButton />
      <NextButton />
      </div>
    )
  }
  
  export default Pagination;
  