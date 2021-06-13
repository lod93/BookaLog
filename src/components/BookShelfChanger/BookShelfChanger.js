import React, { Component } from "react";
import * as BooksAPI from "../../BooksAPI";

const options = [
  {
    title: "Currently Reading",
    value: "currentlyReading",
  },
  {
    title: "Want To Read",
    value: "wantToRead",
  },
  {
    title: "Read",
    value: "read",
  },
];
class BookShelfChanger extends Component {
  state = {
    shelf: "",
  };
  handleChangeShelf(book, target) {
    BooksAPI.update(book, target);
  }
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.book.shelf}
          onChange={(event) =>
            this.handleChangeShelf(this.props.book, event.target.value)
          }
        >
          <option value="move" disabled>
            Move to...
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
