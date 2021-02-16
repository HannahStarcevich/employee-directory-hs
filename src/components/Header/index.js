import React from "react";
import "./style.css";

function Header() {
  return (
<div className="card">
  <h5 className="card-header">Worldwide Employee Network</h5>
  <div className="card-body">
    <h5 className="card-title">Employee Directory</h5>
    <p className="card-text">Search below or filter the list by clicking on the column header.</p>
  </div>
</div>
  );
}

export default Header;


