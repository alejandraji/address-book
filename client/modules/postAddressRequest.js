function postAddressRequest (address) {
  fetch('/http://localhost:3001/addresses/', {
    method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(address)
    })


  }

export default postAddressRequest;