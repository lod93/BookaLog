import React,{ Component } from "react";
import * as BooksAPI from '../../BooksAPI'
import BookShelf from '../BookShelf'

const BookShelfs =[
  {
    name : 'Currently Reading'
  },
  {
    name : 'Want to Read'
  },
  {
    name : 'Read'
  }

]
  


class ListBooks extends Component  {
  componentDidMount() {
    BooksAPI.getAll().then((books) => (
      this.setState({ books })
    ))
  }  

  state ={
    books:[],
  }

  render(){
  console.log(this.state) 
  return (
  <div className="list-books-content">
                            <div>
                                <BookShelf 
                                
                                />
                            </div>
                        </div>
);
  } ;
  
};

export default ListBooks;
