import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  ApiContainer, 
  ApiCard, 
  ApiTitle,
  ApiButton, 
  ApiResult,
  ApiErrorMessage
} from './ApiStyles';
import { ClipLoader } from 'react-spinners'; // Install react-spinners for this

function QuoteComponent() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data);
    } catch (err) {
      setError('Failed to fetch quote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <ApiContainer>
      <ApiCard>
        <ApiTitle>Inspirational Quote</ApiTitle>
        
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
            <ClipLoader size={30} color="#3498db" />
          </div>
        ) : (
          <>
            {error && <ApiErrorMessage>{error}</ApiErrorMessage>}
            
            {quote && (
              <ApiResult>
                <blockquote style={{ margin: 0, fontStyle: 'italic', color: '#2c3e50' }}>
                  <p>"{quote.content}"</p>
                  <footer style={{ marginTop: '0.5rem', textAlign: 'right', fontWeight: 'bold' }}>
                    - {quote.author}
                  </footer>
                </blockquote>
              </ApiResult>
            )}
          </>
        )}

        <ApiButton onClick={fetchQuote} disabled={loading}>
          {loading ? 'Fetching...' : 'New Quote'}
        </ApiButton>
      </ApiCard>
    </ApiContainer>
  );
}

export default QuoteComponent;