import React, { Component }from "react"
import "./App.css"
import ListBooks from "./components/ListBooks"
import Search from  "./components/Search"
import { Route,Router } from 'react-router-dom'
class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  render() {
    return (
      <div className="app">
         <div>
       
        <Route exact path='/' render={() => (
            <ListBooks />
          
        )} />
        <Route path='/add' render={({ history }) => (
          <div>add new book</div>
        )} />
         <Route path='/search' render={({ history }) => (
          <Search />
        )} />
      </div>
      </div>
    );
  }
}

export default BooksApp;
