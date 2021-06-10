import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelfChanger from "../BookShelfChanger";

class Book extends Component {
  render() {
    const coverStyle = {
      width: 128,
      height: 193,
      backgroundImage: "url(" + this.props.url + ")",
    };
    return (
      <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={coverStyle} />

          <BookShelfChanger />
        </div>
        <div className="book-title">
          <h3>{this.props.title}</h3>
        </div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
      </li>
    );
  }
}

export default Book;
