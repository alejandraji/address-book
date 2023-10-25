function getAddressRequest (id) {
  fetch(`http://localhost:3001/addresses/${id}`)
  .then(response => response.json())
}

export default getAddressRequest;