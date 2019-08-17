import React, { Component } from "react";
import Header from "../Layouts/Header";
import CardList from "./CardList";
// import robots from "./Components/robots";
import SearchBar from "../Components/SearchBar";
import Scroll from "../Layouts/Scroll";

// redux stuff
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";

/* ------------ connect params ----------- */
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // NOTE this is where functions are declared when using redux
    onSearchChange: e => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class ScreenView extends Component {
  /*  constructor(props) {
    super(props);

    this.state = {
      robots: []
    };
  } */

  componentDidMount() {
    /* fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({
          robots: users
        });
      }); */
    this.props.onRequestRobots();
  }

  render() {
    // NOTE Apply destructuring objects to make code cleaner
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
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
          <SearchBar onSearchChange={onSearchChange} />
        </section>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
    /* NOTE CardList is now a children of Scroll */
  }

  /* --------------- methods --------------- */
  /*   _onSearchChange = keyword => {
    let receivedKeyword = keyword;
    let filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(receivedKeyword.toLowerCase());
    });
    this.setState({
      searchedArray: filteredRobots
    });
  }; */
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenView);
