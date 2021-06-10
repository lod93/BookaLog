import React, { Component } from "react";

const options =[
  {
    title: "Currently Reading",
  },
  {
    title: "Want To Read",
  },
  {
    title: "Read",
  },
]
class BookShelfChanger extends Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>
            Move to...
          </option>
          {options.map((option, index) => (
                <option
                  key={index}
                  value={option.title.replace(/ /g, "")}
                  >{option.title}</option>
                  ))}
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
