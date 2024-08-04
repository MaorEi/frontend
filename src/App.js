import React, { useState, useEffect } from 'react';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/demoapp/allBooks')
      .then(response => response.json())
      .then(data => setBooks(data.books)) // Access the 'books' property of the response
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
