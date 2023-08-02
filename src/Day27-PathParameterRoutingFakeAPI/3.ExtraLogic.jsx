const removeAllOlderQueryParams = (newParams) => {
    const newSearchParams = new URLSearchParams();

    // Set the new query parameters in the newSearchParams object
    Object.entries(newParams).forEach(([key, value]) => {
      newSearchParams.set(key, value);
    });

    // Update the URL without reloading the page
    setSearchParams(newSearchParams);
  };


  export default removeAllOlderQueryParams;