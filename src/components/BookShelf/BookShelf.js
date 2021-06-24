import React, { Component } from "react";
import Book from "../Book";
class BookShelf extends Component {
  state = { books: [] };

  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
              typeof(this.props.shelfBooks) === 'undefined' ||  typeof(this.props.shelfBooks.error) !== 'undefined' ? 'no books found' 
              : this.props.shelfBooks.map((book, index) => (
                <Book
                  setState={(p) => {
                    this.setState(p.books);
                    this.props.setState(this.state)
                  }}
                  key={index}
                  title={book.title}
                  id={book.id}
                  shelf={book.shelf}
                  url={book.imageLinks.smallThumbnail}
                  books={this.props.books}
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
