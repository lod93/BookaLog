import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import BookShelf from "../BookShelf/BookShelf";
class Add extends Component {
  state = {
    query: "",
    books: [],
    searchBooks: [],
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }));
    BooksAPI.search(query).then((books) =>
      this.setState({searchBooks:books})
    );
  };
  clearQuery = () => {
    this.updateQuery("");
  };

  render() {
    const { query } = this.state;
    const { searchBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by keyword"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf
            setState={(p) => {
              this.props.setState({ books: p.books });
            }}
            title="Search Results"
            shelfBooks={searchBooks}
          />
        </div>
      </div>
    );
  }
}

export default Add;
