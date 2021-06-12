import React,{Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }
  clearQuery = () => {
    this.updateQuery('')
  }

  render(){
    const { query } = this.state
    const { books } = this.props
    const showingBooks = query === ''
    ? books
    : books.filter((c) => (
        c.name.toLowerCase().includes(query.toLowerCase())
      ))
    return (
      <div className="search-books">
      <div className="search-books-bar">
          <Link 
          to="/"
          className="close-search" 
          >Close</Link>
          
          <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" />

          </div>
      </div>
      <div className="search-books-results">
          <ol className="books-grid"></ol>
      </div>
  </div>
    )
  }
  
}
  

export default Search;
