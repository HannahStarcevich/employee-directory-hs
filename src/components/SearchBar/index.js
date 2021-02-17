import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
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
        <button onClick={props.onFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
        <button onClick={props.clearFilter} className="btn btn-danger mt-3">
          Clear
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
