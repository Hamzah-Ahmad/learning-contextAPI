import React, {useContext, useState, createContext} from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'DaVinchi Code', id: 1},
        {title: 'Angels and Demons', id: 2},
        {title: 'DaVinchi Code', id: 1}
    ]);
    return (
        <BookContext.Provider value = {books}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
