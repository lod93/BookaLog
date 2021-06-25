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

  handleChangeShelf(book, target) {
    console.log(target + JSON.stringify(book));
    BooksAPI.update(book, target).then(
      BooksAPI.getAll().then((books) => {
        this.setState({ books });
        this.props.setState(books);
      })
    );
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
