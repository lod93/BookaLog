import React, { Component } from "react";
import "./App.css";
import ListBooks from "./components/ListBooks";
import Search from "./components/Search";
import Add from "./components/Add";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  render() {
    return (
      <div className="app">
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <ListBooks
                books={this.state.books}
                setState={(p) => {
                  this.setState({ books: p.books });
                }}
              />
            )}
          />
          <Route
            path="/add"
            render={({ history }) => (
              <Add
                books={this.state.books}
                setState={(p) => {
                  this.setState({ books: p.books });
                }}
              />
            )}
          />
          <Route
            path="/search"
            render={({ history }) => (
              <Search
                books={this.state.books}
                setState={(p) => {
                  this.setState({ books: p.books });
                }}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default BooksApp;
