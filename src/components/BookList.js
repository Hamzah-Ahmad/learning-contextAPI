import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const {books}  = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const {dispatchBooks} = useContext (BookContext);
  const theme = isLightTheme ? light : dark;
  return(
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map((book) => {
          return(
            <li key = {book.id} onClick = {() => dispatchBooks({type: 'REMOVE_BOOK', id: book.id})} style = {{ background: theme.ui }}>{book.title}</li>
          )
        })}
        {/* <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the name of the wind</li>
        <li style={{ background: theme.ui }}>the final empire</li> */}
      </ul>
    </div>
  )     

  
}
 
export default BookList;