import React, { useState } from 'react';
import axios from 'axios';
import { 
  ApiContainer, 
  ApiCard, 
  ApiTitle,
  ApiInput, 
  ApiButton, 
  ApiResult,
  ApiErrorMessage
} from './ApiStyles';
import { ClipLoader } from 'react-spinners'; // Install react-spinners for this

function BookSearchComponent() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
      setBooks(response.data.docs.slice(0, 5)); // Limit to 5 results
    } catch (err) {
      setError('Failed to search books. Please try again.');
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContainer>
      <ApiCard>
        <ApiTitle>Book Search</ApiTitle>
        
        <ApiInput 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a book title or author"
          onKeyPress={(e) => e.key === 'Enter' && searchBooks()}
        />
        
        <ApiButton onClick={searchBooks} disabled={!query.trim() || loading}>
          {loading ? <ClipLoader size={20} color="#ffffff" /> : 'Search'}
        </ApiButton>
        
        {error && <ApiErrorMessage>{error}</ApiErrorMessage>}
        
        {books.length > 0 && (
          <ApiResult>
            {books.map((book) => (
              <div key={book.key} style={{ marginBottom: '1rem' }}>
                <h3 style={{ margin: '0.5rem 0', color: '#2c3e50' }}>{book.title}</h3>
                <p style={{ margin: 0, color: '#7f8c8d' }}>
                  Author: {book.author_name?.[0] || 'Unknown'}
                </p>
              </div>
            ))}
          </ApiResult>
        )}
      </ApiCard>
    </ApiContainer>
  );
}

export default BookSearchComponent;