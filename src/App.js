import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider, { AuthContext } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;