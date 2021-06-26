import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import BookShelf from "../BookShelf/BookShelf";
class Add extends Component {
  state = {
    query: "",
    books: [],
    mybook: [],
  };
  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }));
    BooksAPI.search(query).then((books) =>
      this.setState({
        books,
      })
    );
  };
  clearQuery = () => {
    this.updateQuery("");
  };

  render() {
    const { query } = this.state;
    const { books } = this.state;

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
              this.props.setState({ mybook: p });
            }}
            title="Search Results"
            shelfBooks={books}
          />
        </div>
      </div>
    );
  }
}

export default Add;
