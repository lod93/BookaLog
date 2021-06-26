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
  {
    title: "None",
    value: "none",
  },
];
class BookShelfChanger extends Component {
  state = {
    shelf: "",
    books: [],
  };

async updateBooks() {
const books = await BooksAPI.getAll()
this.props.setState({ books: books})
}
 async handleChangeShelf(book, target) {
   await BooksAPI.update(book, target);
    this.updateBooks();
  }
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.currentShelf}
          onChange={(event) => {
            this.handleChangeShelf(this.props.book, event.target.value);
          }}
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
