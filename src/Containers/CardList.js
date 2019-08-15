import React, { Component } from "react";
import Card from "../Components/Card";

export default class CardList extends Component {
  render() {
    return (
      <div className="cardList  col-xl-10 d-flex flex-wrap justify-content-center align-item-around container-fluid">
        {this._getCardList()}
      </div>
    );
  }

  /* --------------- methods --------------- */
  _getCardList = () => {
    return this.props.robots.map((user, i) => {
      return <Card key={i} user={user} />;
    });
  };
}
