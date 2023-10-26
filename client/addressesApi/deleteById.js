const deleteById = (id) => 
  fetch(`http://localhost:3001/addresses/${id}`, {
    method: "DELETE",
  })
    .catch((err) => console.log(err));

export default deleteById;