// import React, { Component } from "react";
// import SearchBar from "../SearchBar";
// import EmployeeResultList from "../EmployeeResultList";
// import API from "../../utils/API";
// import "./style.css";
// import Geocode from "react-geocode";


// class SearchResultContainer extends Component {
//     state = {
//         search: "",
//         results: [],
//         filteredResults: [],
//         alphabeticList: [],
//     };
    
//       // When this component mounts, search the randompeople API
//       componentDidMount() {
//         this.searchPeople();
//       };

//       searchPeople = query => {
        
//         API.search(query)
          
//         .then(res => this.setState({ 
//             ...this.state,
//             results: res.data.results,
//             filteredResults: res.data.results,
//             alphabeticList: res.data.results
//           }))
//           .catch(err => console.log(err));
//       };
    
//       handleInputChange = event => {

//         const value = event.target.value;
        
//         this.setState({
//           ...this.state,
//           search: value
//         });
//       };
    
//       // When the form is submitted, search the API
//       handleFormSubmit = event => {
        
//         event.preventDefault();

//         this.setState({
//           ...this.state,
//           filteredResults: this.state.results.filter( (person) => person.name.first.toLowerCase() === this.state.search.toLowerCase()), search:""})
//       };

//       handleNameSort = event => {
     
//         event.preventDefault();
        
//         this.setState({
//           ...this.state,
//           filteredResults: this.state.results.sort((a,b) => a.name.first > b.name.first ? 1:-1)
//         })
      
//       }

//       clearFilter = event => {

//         event.preventDefault();
        
//         this.setState({
//           ...this.state,
//           filteredResults: this.state.results
        
//       })
//     }
    
//       render() {
      
//         return (
//           <div>
//             <SearchBar
//               search={this.state.search}
//               onFormSubmit={this.handleFormSubmit}
//               onInputChange={this.handleInputChange}
//               clearFilter={this.clearFilter}
//             />

//             <EmployeeResultList results={this.state.filteredResults} handleNameSort={this.handleNameSort}/>
//           </div>
//         );
//       }
// }

// export default SearchResultContainer;
