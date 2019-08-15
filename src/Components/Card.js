import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { name, email, id } = this.props.user;
    return (
      <div className="cardItem card col-auto m-3 text-center">
        <img
          className="card-img-top"
          src={`https://robohash.org/${id}?200x200`}
          alt="something"
        />
        <div className="card-body">
          <h4 className="card-title" style={{ "fontWeight": "bold" }}>
            {name}
          </h4>
          <p className="card-text">{email}</p>
        </div>
      </div>
    );
  }

  /* --------------- methods --------------- */
}
