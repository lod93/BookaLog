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
              typeof this.props.shelfBooks.error !== "undefined"
                ? "no books found"
                : this.props.shelfBooks.map((book, index) => (
                    <Book
                      setState={(p) => {
                        this.setState(p.books);
                        this.props.setState(this.state);
                      }}
                      key={index}
                      title={book.title}
                      id={book.id}
                      currentShelf={
                        typeof book.shelf === "undefined"
                      ? "none"
                      :book.shelf
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
                  ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;
