function deleteAddress (id) {
  fetch(`http://localhost:3001/addresses/${id}`, {
    method: "DELETE",
  })
  .then(response => response.json())
}

export default deleteAddress;