import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import BookShelf from "../BookShelf/BookShelf";
class Search extends Component {
  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }
  state = {
    query: "",
    books: [],
  };
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }));
  };
  clearQuery = () => {
    this.updateQuery("");
  };

  render() {
    const { query } = this.state;
    const { books } = this.state;

    const showingBooks =
      query === ""
        ? books
        : books.filter((c) =>
            c.title.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
        <div className="list-books-content">
          <BookShelf
            title="Search Results"
            shelfBooks={showingBooks}
            setState={(p) => {
              this.setState(p);
            }}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default Search;
