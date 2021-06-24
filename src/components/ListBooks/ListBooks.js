import React, { Component } from "react";
import BookShelf from "../BookShelf";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";

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
class ListBooks extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
    
    if(this.state.books !== books){

    this.setState({ books })
    
  }
}
);
}
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
          <div className="list-books-content">
            <div>
              {BookShelfs.map((Bookshelf, index) => (
                <BookShelf
                  setState={(p) => {
                    this.setState(p);
                  }}
                  key={index}
                  title={Bookshelf.title}
                  books={this.state.books}
                  shelfBooks={this.state.books.filter(
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
