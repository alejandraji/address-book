function putAddressRequest (address, id) {
  fetch(`http://localhost:3001/addresses/${id}`, {
    method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(address)
    })


  }

export default putAddressRequest;