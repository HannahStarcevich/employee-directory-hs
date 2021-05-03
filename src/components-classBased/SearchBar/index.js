import React from "react";
import "./style.css";


function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <div className="container">
          <div className="row">
          <div className="col-4"></div>
            <div className="col-4 search-input">
              <label htmlFor="search">Search:</label>
              <input
                onChange={props.onInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for an Employee"
                id="search"
              />
            </div>
            <div className="col-4">
                <button onClick={props.onFormSubmit} className="btn btn-primary mt-3">
                  Search
                </button>
                <button onClick={props.clearFilter} className="btn btn-outline-primary mt-3">
                  Clear
                </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
