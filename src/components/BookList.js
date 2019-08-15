import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  
  //if we had used a class component, we would have used the following two lines to get context
  //static contextType = BookContext
  //const {books} = this.context

  const {books}  = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const {removeBook} = useContext (BookContext);
  const theme = isLightTheme ? light : dark;
  return(
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map((book) => {
          return(
            <li key = {book.id} onClick = {() => removeBook(book.id)} style = {{ background: theme.ui }}>{book.title}</li>
          )
        })}
      </ul>
    </div>
  )     

  
}
 
export default BookList;