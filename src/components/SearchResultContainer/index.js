import React, { Component } from "react";
import SearchBar from "../SearchBar";
import EmployeeResultList from "../EmployeeResultList";
import API from "../../utils/API";
import "./style.css";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: [],
        filteredResults: []
      };
    
      // When this component mounts, search the randompeople API
      componentDidMount() {
        this.searchPeople();
      };

        searchPeople = query => {
        API.search(query)
          .then(res => this.setState({ 
            ...this.state,
            results: res.data.results,
           filteredResults: res.data.results}))
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {

        const value = event.target.value;
        this.setState({
          ...this.state,
          search: value
        });
      };
    
      // When the form is submitted, search the API
      handleFormSubmit = event => {
        event.preventDefault();
        // this.searchPeople(this.state.search);
        this.setState({
          ...this.state,
          filteredResults: this.state.results.filter( (person) => person.name.first.toLowerCase() === this.state.search.toLowerCase()), search:""})
        
      };

      clearFilter = event => {
        event.preventDefault();
        // this.searchPeople(this.state.search);
        this.setState({
          ...this.state,
          filteredResults: this.state.results
        
      })
    }
    
      render() {
          console.log(this.state.search)
        return (
          <div>
            <SearchBar
              search={this.state.search}
              onFormSubmit={this.handleFormSubmit}
              onInputChange={this.handleInputChange}
              clearFilter={this.clearFilter}
            />
            <EmployeeResultList results={this.state.filteredResults} />
          </div>
        );
      }
}

export default SearchResultContainer;
