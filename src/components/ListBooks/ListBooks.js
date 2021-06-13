import React, { Component } from "react";
import BookShelf from "../BookShelf";
import { Link } from "react-router-dom";

const BookShelfs = [
  {
    title: "Currently Reading",
  },
  {
    title: "Want to Read",
  },
  {
    title: "Read",
  },
];

class ListBooks extends Component{

  render() {
    console.log(this.props);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
          <div className="list-books-content">
            <div>
              {BookShelfs.map((Bookshelf, index) => (
                <BookShelf
                  key={index}
                  title={Bookshelf.title}
                  books={this.props.books.filter(
                    (book) =>
                      book.shelf.toLowerCase() ===
                      Bookshelf.title.toLocaleLowerCase().replace(/ /g, "")
                  )}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="footer-controls">
          <Link to="/search" className="open-search">
            Search
          </Link>

          <Link to="/add" className="open-add">
            add
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
