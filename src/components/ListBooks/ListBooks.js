import React, { Component } from "react";
import * as BooksAPI from "../../BooksAPI";
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

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  state = {
    books: [],
  };

  render() {
    console.log(this.state);
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
                  books={this.state.books.filter(
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
