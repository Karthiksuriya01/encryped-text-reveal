import React from 'react';
import EncryptedButton from './Component/EncryptedButton';

function App() {
  const buttonStyles = {
    default: {
      base: {
        fontFamily: 'monospace',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      },
      hover: {
        backgroundColor: '#45a049',
        transform: 'scale(1.05)',
      },
      active: {
        backgroundColor: '#3e8e41',
        transform: 'scale(0.95)',
      },
    },
    custom: {
      base: {
        fontFamily: 'Arial, sans-serif',
        padding: '15px 25px',
        fontSize: '18px',
        backgroundColor: '#3498db',
        color: 'white',
        border: '2px solid #2980b9',
        borderRadius: '25px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
      },
      hover: {
        backgroundColor: '#2980b9',
        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
      },
      active: {
        backgroundColor: '#2471a3',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transform: 'translateY(2px)',
      },
    },
  };

  return (
    <div className="App">
      <header className="App-header" style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Encrypted Button Demo</h1>
        
        <div style={{ marginBottom: '20px' }}>
          <EncryptedButton 
            text="Default Style" 
            styles={buttonStyles.default}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <EncryptedButton 
            text="Custom Style" 
            styles={buttonStyles.custom}
            revealSpeed={100}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <EncryptedButton 
            text="Looping Decrypt" 
            styles={buttonStyles.default}
            loop={true}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
