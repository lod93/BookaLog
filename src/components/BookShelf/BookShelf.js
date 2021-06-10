import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "../Book";
class BookShelf extends Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((book, index) => (
              
                  <Book
                    key={index}
                    title={book.title}
                    url={book.imageLinks.smallThumbnail}
                  />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;
