import React, { Component } from "react";

export default class SearchBar extends Component {
  



  onSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="d-flex justify-content-center mt-3">
            <div style={{width: "500px"}}>
            <input 
              onChange={this.props.searchInput}
              className="form-control"
              placeholder="Search Movie"
            />
          </div>
          </div>
        </form>
      </div>
    );
  }
}
