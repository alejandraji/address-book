const search = (searchTerms = "") => 
  fetch(`http://localhost:3001/addresses?search=${searchTerms}`)
    .then(response => response.json())

export default search;