import React, { Component } from "react";
import BookShelfChanger from "../BookShelfChanger";

class Book extends Component {
  state = {
    books: [],
  };

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

            <BookShelfChanger
              setState={(p) => {
                this.props.setState({ books: p.books });
              }}
              book={this.props.bookinfo}
              currentShelf={this.props.currentShelf}
            />
          </div>
          <div className="book-title">
            <h1>{this.props.title}</h1>
          </div>
          <div className="book-authors">
            {typeof this.props.authors === "undefined"
              ? "Unknown"
              : this.props.authors.map((author, index) => (
                  <span key={index} className="book-author">
                    {author},
                  </span>
                ))}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
