import React, { Component } from "react";
import Book from "../Book";
import placeholder from "../../images/placeholder.png";
class BookShelf extends Component {
  state = { books: [] };

  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {typeof this.props.shelfBooks === "undefined" ||
              typeof this.props.shelfBooks.error !== "undefined" ? (
                <div className="list-books-title">
                  <h1 className="">No books found</h1>
                </div>
              ) : (
                this.props.shelfBooks.map((book, index) => (
                  <Book
                    setState={(p) => {
                      this.props.setState({ books: p.books });
                    }}
                    key={index}
                    title={book.title}
                    currentShelf={
                      typeof book.shelf === "undefined" ? "none" : book.shelf
                    }
                    url={
                      typeof book.imageLinks === "undefined"
                        ? placeholder
                        : book.imageLinks.smallThumbnail
                    }
                    bookinfo={book}
                    books={this.props.books}
                    authors={book.authors}
                  />
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;
