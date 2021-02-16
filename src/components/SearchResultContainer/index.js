import React, { Component } from "react";
import SearchBar from "../SearchBar";
import EmployeeResultList from "../EmployeeResultList";
import API from "../../utils/API";
import "./style.css";

class SearchResultContainer extends Component {
    state = {
        userInput: "",
        results: []
      };
    
      // When this component mounts, search the randompeople API
      componentDidMount() {
        this.searchPeople();
      };

        searchPeople = query => {
        API.search(query)
          .then(res => this.setState({ results: res.data.results }))
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {

        const value = event.target.value;
        this.setState({
          userInput: value
        });
      };
    
      // When the form is submitted, search the Giphy API for `this.state.search`
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchPeople(this.state.search);
      };
    
      render() {
          console.log(this.state.userInput)
        return (
          <div>
            <SearchBar
              search={this.state.search}
              onFormSubmit={this.handleFormSubmit}
              onInputChange={this.handleInputChange}
            />
            <EmployeeResultList results={this.state.results} />
          </div>
        );
      }
}

export default SearchResultContainer;
