import React, {useContext, useState, createContext} from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'DaVinchi Code', author: 'Dan Brown', id: 1},
        {title: 'Angels and Demons',author: 'Dan Brown', id: 2},
        {title: 'Memoirs of an Invisible Man',author: 'Harry F. Saint', id: 3}
    ]);
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id:Math.random()}]);
    };
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return (
        <BookContext.Provider value = {{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
