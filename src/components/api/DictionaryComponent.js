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
import { ClipLoader } from 'react-spinners';

function DictionaryComponent() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDefinition = async () => {
    if (!word.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setDefinition(response.data[0]);
    } catch (err) {
      setError('Word not found. Please try another word.');
      setDefinition(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContainer>
      <ApiCard>
        <ApiTitle>Dictionary Lookup</ApiTitle>
        <ApiInput 
          type="text" 
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word"
          onKeyPress={(e) => e.key === 'Enter' && fetchDefinition()}
        />
        <ApiButton 
          onClick={fetchDefinition} 
          disabled={!word.trim() || loading}
        >
          {loading ? <ClipLoader size={20} color="#ffffff" /> : 'Get Definition'}
        </ApiButton>
        
        {error && <ApiErrorMessage>{error}</ApiErrorMessage>}
        
        {definition && (
          <ApiResult>
            <h3>{definition.word}</h3>
            <p>
              {definition.meanings[0]?.definitions[0]?.definition || 'No definition found'}
            </p>
          </ApiResult>
        )}
      </ApiCard>
    </ApiContainer>
  );
}

export default DictionaryComponent;
