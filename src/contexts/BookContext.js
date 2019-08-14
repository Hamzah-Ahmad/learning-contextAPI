import React, {useContext, createContext, useReducer} from 'react'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatchBooks] = useReducer(bookReducer, [
        {title: 'DaVinchi Code', author: 'Dan Brown', id: 1},
        {title: 'Angels and Demons',author: 'Dan Brown', id: 2},
        {title: 'Memoirs of an Invisible Man',author: 'Harry F. Saint', id: 3}
    ]);
    

    return (
        <BookContext.Provider value = {{books, dispatchBooks}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
