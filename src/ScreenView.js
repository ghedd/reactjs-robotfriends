import React, { Component } from "react";
import Header from "./Layouts/Header";
import CardList from "./Containers/CardList";
// import robots from "./Components/robots";
import SearchBar from "./Components/SearchBar";
import Scroll from "./Layouts/Scroll";

export default class ScreenView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      searchedArray: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({
          robots: users
        });
      });
  }

  render() {
    // NOTE Apply destructuring objects to make code cleaner
    const { robots, searchedArray } = this.state;

    return !robots.length ? (
      <div
        className="d-flex justify-content-center spinner-border"
        role="status"
      >
        <h1 className="sr-only">Loading...</h1>
      </div>
    ) : (
      <div className="background pt-5">
        <section className="appHeader">
          <Header />
          <SearchBar onSearchChange={this._onSearchChange} />
        </section>
        <Scroll>
          <CardList
            robots={searchedArray.length !== 0 ? searchedArray : robots}
          />
        </Scroll>
      </div>
    );
    /* NOTE CardList is now a children of Scroll */
  }

  /* --------------- methods --------------- */
  _onSearchChange = keyword => {
    let receivedKeyword = keyword;
    let filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(receivedKeyword.toLowerCase());
    });
    this.setState({
      searchedArray: filteredRobots
    });
  };
}
