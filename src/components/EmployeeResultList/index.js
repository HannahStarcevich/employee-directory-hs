import React from "react";

function EmployeeResultList(props) {
    const list = props.results || [];
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  {list.map(result => (
    <tr key={result.email+result.phone}>
      <td><img alt="profile image" className="img-fluid" src={result.picture.thumbnail} /></td>
      <td>{result.name.fist} {result.name.last}</td>
      <td>{result.phone}</td>
      <td>{result.email}</td>
    </tr>
    ))}
  </tbody>
</table>
  );
}

export default EmployeeResultList;
