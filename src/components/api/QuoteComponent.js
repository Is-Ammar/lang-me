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
import { ClipLoader } from 'react-spinners';

function QuoteComponent() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
  
    try {
      console.log('Fetching quote...');
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key': 'lymz1FlLmn1lvjll9Vt6ew==1whid00woGYMrLQx' } 
      });
      console.log('API Response:', response.data);

      if (!response.data || response.data.length === 0) {
        throw new Error('No quotes found.');
      }

      const quoteData = response.data[0];
      setQuote({
        content: quoteData.quote,
        author: quoteData.author,
        category: quoteData.category,
      });
    } catch (err) {
      console.error('API Error:', err);
      setError(err.message || 'Failed to fetch quote. Please try again.');
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
            
            {quote ? (
              <ApiResult>
                <blockquote style={{ margin: 0, fontStyle: 'italic', color: '#2c3e50' }}>
                  <p>"{quote.content}"</p>
                  <footer style={{ marginTop: '0.5rem', textAlign: 'right', fontWeight: 'bold' }}>
                    - {quote.author}
                  </footer>
                </blockquote>
                <p style={{ margin: 0, fontStyle: 'italic', color: '#2c3e50', fontWeight: 'bold' }} >Category: "{quote.category}"</p>
              </ApiResult>
            ) : (
              <p>No quote available.</p>
            )}
          </>
        )}

        <ApiButton onClick={fetchQuote} disabled={loading} aria-busy={loading}>
          {loading ? 'Fetching...' : 'New Quote'}
        </ApiButton>
      </ApiCard>
    </ApiContainer>
  );
}

export default QuoteComponent;
