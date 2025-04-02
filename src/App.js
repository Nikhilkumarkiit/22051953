import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [windowSize] = useState(10); 
  const [numberType, setNumberType] = useState('e');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNumbers = async () => {
    setLoading(true);
    
    
    await new Promise(resolve => setTimeout(resolve, 300));
    
    
    setResponse({
      windowPrevState: [],
      windowCurrState: [2, 4, 6, 8],
      numbers: [2, 4, 6, 8],
      avg: 5.00
    });
    
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNumbers();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Average Calculator Microservice</h1>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="numberType" style={styles.label}>Number Type:</label>
          <select
            id="numberType"
            value={numberType}
            onChange={(e) => setNumberType(e.target.value)}
            style={styles.select}
          >
            <option value="p">Prime</option>
            <option value="f">Fibonacci</option>
            <option value="e">Even</option>
            <option value="r">Random</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          style={styles.button}
        >
          {loading ? 'Fetching...' : 'Fetch Numbers'}
        </button>
      </form>

      {error && <div style={styles.error}>{error}</div>}

      {response && (
        <div style={styles.response}>
          <h2 style={styles.subHeader}>Response</h2>
          <div style={styles.responseSection}>
            <h3 style={styles.sectionTitle}>Previous Window State:</h3>
            <pre style={styles.codeBlock}>
              {JSON.stringify(response.windowPrevState, null, 2)}
            </pre>
          </div>
          <div style={styles.responseSection}>
            <h3 style={styles.sectionTitle}>Current Window State:</h3>
            <pre style={styles.codeBlock}>
              {JSON.stringify(response.windowCurrState, null, 2)}
            </pre>
          </div>
          <div style={styles.responseSection}>
            <h3 style={styles.sectionTitle}>Numbers Received:</h3>
            <pre style={styles.codeBlock}>
              {JSON.stringify(response.numbers, null, 2)}
            </pre>
          </div>
          <div style={styles.responseSection}>
            <h3 style={styles.sectionTitle}>Average:</h3>
            <p style={styles.average}>
              {typeof response.avg === 'number' ? response.avg.toFixed(2) : 'N/A'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};


const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '30px',
  },
  subHeader: {
    color: '#2c3e50',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
  },
  form: {
    background: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#34495e',
  },
  select: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    background: '#3498db',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    transition: 'background 0.3s',
  },
  buttonHover: {
    background: '#2980b9',
  },
  error: {
    color: '#e74c3c',
    padding: '10px',
    background: '#fadbd8',
    borderRadius: '4px',
    marginBottom: '20px',
  },
  response: {
    background: '#eaf2f8',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  responseSection: {
    marginBottom: '20px',
  },
  sectionTitle: {
    color: '#2980b9',
    marginBottom: '10px',
  },
  codeBlock: {
    background: '#fff',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    overflowX: 'auto',
  },
  average: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#27ae60',
    margin: '10px 0',
  },
};

export default AverageCalculator;