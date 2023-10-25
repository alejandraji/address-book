const create = (address) =>
  fetch('http://localhost:3001/addresses/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(address)
  })
  .then(response => response.json())

export default create;