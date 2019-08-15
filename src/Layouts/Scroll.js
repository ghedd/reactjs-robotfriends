import React, { Component } from "react";

export default class Scroll extends Component {
  render() {
    return (
      <div
        style={{
          overflowY: "scroll",
          borderTop: "4.5px solid #222",
          borderBottom: "4.5px solid #222",
          height: 720
        }}
      >
        {this.props.children}
      </div>
      /* NOTE Scroll is partent of CardList so props.children is loaded to render Cardlist within Scroll. Also, Scroll is reusable. */
    );
  }
}
