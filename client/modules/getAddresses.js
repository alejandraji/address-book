function getAddresses () {
  fetch('http://localhost:3001/addresses')
  .then(response => response.json())
}

export default getAddresses;