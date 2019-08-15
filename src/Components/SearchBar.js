import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ""
    };
  }

  render() {
    return (
      <div className="container searchBar">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type a robot's name..."
            onChange={this._onSearch}
          />
        </div>
      </div>
    );
  }

  /* --------------- methods --------------- */
  _onSearch = e => {
    this.setState(
      {
        keyword: e.target.value
      },
      () => {
        this.props.onSearchChange(this.state.keyword);
      }
    );
  };
}
