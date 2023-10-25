const searchAddresses = (search = "") =>
  fetch(`http://localhost:3001/addresses?search=${search}`)
    .then(response => response.json())

export default searchAddresses;