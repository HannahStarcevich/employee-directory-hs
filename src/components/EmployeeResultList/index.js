import React from "react";

function EmployeeResultList(props) {
    const list = props.results || [];
  return (
    <table className="table">
  <thead>
    <tr>
        <TableHeader displayName={"Image"} />
        <TableHeader displayName={"Name"} />
        <TableHeader displayName={"Phone"} />
        <TableHeader displayName={"Email"} />
    </tr>
  </thead>
  <tbody>
  {list.map(result => (
    <tr key={result.email+result.phone}>
      <td><img alt="profile image" className="img-fluid" src={result.picture.thumbnail} /></td>
      <td>{result.name.first+" "+result.name.last}</td>
      <TableCell text={result.phone} />
      <TableCell text={result.email} />
    </tr>
    ))}
  </tbody>
</table>
  );
}

function TableHeader(props) {
    return (
    <th scope="col">{props.displayName}</th>
    )
}
function TableCell (props) {
    return (
        <td>{props.text}</td>
    )
}
export default EmployeeResultList;
