import React, {useContext, useState} from 'react'
import {BookContext} from '../contexts/BookContext';
const NewBook = () => {
    const {addBook} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
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
