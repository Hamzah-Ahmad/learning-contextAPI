import React, {useContext, useState} from 'react'
import {BookContext} from '../contexts/BookContext';
const NewBook = () => {
    const {dispatchBooks} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchBooks({type: 'ADD_BOOK', book: {title, author}});
        setTitle('');
        setAuthor('');
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type = 'text' value = {title} onChange  = {(e) => setTitle(e.target.value)}  />
                <input type = 'text' value = {author} onChange = {(e) => setAuthor(e.target.value)}/>
                <input type = 'submit' />
            </form>
        </div>
    )
}

export default NewBook
