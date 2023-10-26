const update = (address)=>
  fetch(`http://localhost:3001/addresses/${address.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(address)
  })
    .then(response => {
      return response.json().then(parsedResponse => ({parsedResponse, ok:response.ok}))
    }) 
    .then(({parsedResponse, ok}) => {
      if (ok) {
        return parsedResponse
      } else {
        return Promise.reject(JSON.parse(parsedResponse.message))
      }
    })

export default update;